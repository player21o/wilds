{

    let InfiniteMap = function() {

        this.tiles = new Map;
        this.entities = [];

        this.left = 0;
        this.top = 0;
        this.bottom = 0;
        this.right = 0;

        this.width = 1;
        this.height = 1;
        this.padding = 2;

        this.mask = new Map;

        this.tilesToRefresh = [];

        this.meta = {};

    };

    InfiniteMap.prototype = {

        toJSON() {

            return JSON.stringify({
                map: this.export(),
                entities: this.entities
            });

        },

        forEach: function(callback) {

            this.tiles.forEach(function(tile, key) {

                let temp = key.split(",");
                let x = temp[0] | 0;
                let y = temp[1] | 0;

                callback(tile, x, y);

            });

        },

        export: function() {

            var result = {};
            var map = this;

            let exported = ["wall", "ground", "semi"];

            this.tiles.forEach(function(value, key) {

                result[key] = Utils.pick(value, exported);

            });

            return result;

        },

        serialize: function() {

            var exported = this.export();

            return JSON.stringify(exported);

        },

        unserialize: function(raw) {

            this.mask = new Map;

            return this.open(raw);

        },

        open: function(raw) {

            if (typeof raw === "string") {

                var temp = JSON.parse(raw);

            } else temp = raw;

            this.raw = temp;

            this.entities = temp.entities;
            this.meta = temp.meta || {};

            this.tiles.clear();

            var sorted = [];

            for (var key in temp.map) {

                let xy = this.xy(key);

                temp.map[key].x = xy.x;
                temp.map[key].y = xy.y;

                sorted.push(temp.map[key]);

            }

            sorted.sort(function(a, b) {

                if (a.y === b.y) return a.x - b.x;
                return a.y - b.y;

            });

            temp = {};


            for (var t of sorted) {

                let id = this.id(t.x, t.y);

                temp[id] = t;

            }

            for (var key in temp) {

                this.tiles.set(key, temp[key]);

                let xy = this.xy(key);

                if (xy.x < this.left) this.left = xy.x;
                if (xy.y < this.top) this.top = xy.y;
                if (xy.x > this.right) this.right = xy.x;
                if (xy.y > this.bottom) this.bottom = xy.y;

            }

            this.left -= this.padding;
            this.top -= this.padding;
            this.right += this.padding;
            this.bottom += this.padding;

            this.width = Math.abs(this.left - this.right) + 1;
            this.height = Math.abs(this.top - this.bottom) + 1;

            this.populateMask();

            return Promise.resolve();

        },

        findTileByID(id) {

            return this.tilesByID[id];

        },

        populateMask: function() {

            this.mask = new Map;
            this.ref = new Map;

            this.tilesByID = {};

            for (var key in this.tileset.tiles) {

                let tile = this.tileset.tiles[key];
                tile.key = key;

                if (!tile.id) continue;

                this.tilesByID[tile.id] = tile;

            }

            let tilesArray = Array.from(this.tiles.values());

            tilesArray.sort(function(a, b) {

                if (a.y !== b.y) return a.y - b.y;

                return a.x - b.x;

            });

            for (let tile of tilesArray) {

                this.refreshTile(tile.x, tile.y);

            };

        },

        fillData: function() {

            for (var e of this.tiles) {

                var column = e[1];

                for (var i = 0; i < column.length; i++) {

                    var tile = column[i];

                    tile.data = this.td(tile.key);

                }

            }

        },

        isError: function(o) {

            return typeof o === "string";

        },

        isSolid: function(tx, ty) {

            var tile = this.get(tx, ty);

            if (!tile) return false;

            return tile.data.solid;

        },

        error: function(msg) {

            return msg;

        },

        id: function(x, y) {

            return x + "," + y;

        },

        xy: function(id) {

            let temp = id.split(",");

            return {
                x: temp[0] | 0,
                y: temp[1] | 0
            }

        },

        emptyTile: false,

        get: function(x, y) {

            var key = this.id(x, y);

            if (!this.tiles.has(key)) return this.emptyTile;

            var tile = this.tiles.get(key);

            return tile;

        },

        create: function(x, y) {

            var key = this.id(x, y);

            if (!this.tiles.has(key)) this.tiles.set(key, {});

            var tile = this.tiles.get(key);

            return tile;

        },

        fget: function(x, y) {

            var tile = this.get(x, y);

            if (!tile) this.create(x, y);

            return this.get(x, y);

        },

        delete: function(gx, gy) {

            var tile = this.get(gx, gy);

            if (!tile) return;

            var key = this.id(gx, gy);

            this.tiles.delete(key);

        },

        set: function(gx, gy, prop, val) {

            var tile = this.fget(gx, gy);

            if (typeof prop === "object") {

                for (var k in prop) this.set(gx, gy, k, prop[k])

            } else {

                tile[prop] = val;

            }

        },

        adjacentCount: function(x, y, key) {

            var result = 0;

            result += this.get(x - 1, y)[key] ? 1 : 0;
            result += this.get(x + 1, y)[key] ? 1 : 0;
            result += this.get(x, y - 1)[key] ? 1 : 0;
            result += this.get(x, y + 1)[key] ? 1 : 0;

            return result;

        },

        squareCount: function(x, y, key) {

            var result = 0;

            result += this.get(x - 1, y)[key] ? 1 : 0;
            result += this.get(x + 1, y)[key] ? 1 : 0;
            result += this.get(x, y - 1)[key] ? 1 : 0;
            result += this.get(x, y + 1)[key] ? 1 : 0;

            result += this.get(x - 1, y - 1)[key] ? 1 : 0;
            result += this.get(x - 1, y + 1)[key] ? 1 : 0;
            result += this.get(x + 1, y - 1)[key] ? 1 : 0;
            result += this.get(x + 1, y + 1)[key] ? 1 : 0;

            return result;

        },

        crossCall: function(x, y, method) {

            this[method](x - 1, y);
            this[method](x + 1, y);
            this[method](x, y - 1);
            this[method](x, y + 1);

            this[method](x, y);

        },

        getBounds: function() {

            this.left = 0;
            this.top = 0;
            this.bottom = 0;
            this.right = 0;

            this.tiles.forEach((tile, key) => {

                let xy = this.xy(key);

                if (xy.x < this.left) this.left = xy.x;
                if (xy.y < this.top) this.top = xy.y;
                if (xy.x > this.right) this.right = xy.x;
                if (xy.y > this.bottom) this.bottom = xy.y;

            });

            return {
                left: this.left,
                top: this.top,
                bottom: this.bottom,
                right: this.right
            };


        },

        getSub: function(x, y) {

            let id = this.id(x, y);

            return this.mask.get(id) || 0;

        },

        setSub: function(x, y, value) {

            let id = this.id(x, y);

            return this.mask.set(id, value);

        },

        getSubTile: function(x, y) {

            let id = this.id(x, y);

            return this.ref.get(id) || 0;

        },

        getSubAbs: function(x, y) {

            x = Math.floor(x / COMMON.SUBTILE_WIDTH);
            y = Math.floor(y / COMMON.SUBTILE_HEIGHT);

            let id = this.id(x, y);

            return this.mask.get(id) || 0;

        },

        /* Game logic */

        hitTile(tile, object) {

            if (!tile.wall) return;

            if (!tile.wallDef.health) {

                tile.data.health -= 50;

                if (tile.data.health <= 0) this.replaceLayer(tile, "wall", tile.wallDef.ondestroy);

            };

            if (tile.wallDef.resource === object.key) {

            };



        },

        clearMaskAtTile(tile) {

            let mask = tile.mask;

            for (var i = 0; i < mask.length; i += 3) {

                let ox = mask[i + 0];
                let oy = mask[i + 1];

                let value = mask[i + 2];

                let sx = tile.x * 4 + ox;
                let sy = tile.y * 4 + oy;

                let id = this.id(sx, sy);

                let tx = Math.floor(sx / 4);
                let ty = Math.floor(sy / 4);

                this.mask.delete(id);
                this.ref.delete(id);

            }

            for (var i = -1; i <= 1; i++) {
                for (var j = -1; j <= 1; j++) {

                    this.tilesToRefresh.push(tile.x + i, tile.y + j);

                }
            }

        },

        refreshTile(tx, ty) {

            let tile = this.get(tx, ty);

            if (!tile) return;

            let ground = null;
            let wall = null;
            let semi = null;
            let mask = [];

            if (tile.ground) ground = this.tileset.tiles[tile.ground];
            if (tile.semi) semi = this.tileset.tiles[tile.semi];
            if (tile.wall) wall = this.tileset.tiles[tile.wall];

            if (ground) NAMESPACE.PositionalArray.union(mask, ground.mask);
            if (semi) NAMESPACE.PositionalArray.union(mask, semi.mask);
            if (wall) NAMESPACE.PositionalArray.union(mask, wall.mask);

            tile.mask = mask;

            tile.wallDef = wall;
            tile.groundDef = ground;
            tile.semiDef = semi;

            if (!tile.data) {

                tile.data = {};

            }

            for (var i = 0; i < mask.length; i += 3) {

                let ox = mask[i + 0];
                let oy = mask[i + 1];

                let value = mask[i + 2];

                let sx = tx * 4 + ox;
                let sy = ty * 4 + oy;

                let id = this.id(sx, sy);

                let current = this.mask.get(id) | 0;

                let next = this.resolveMaskImportance(current, value);

                if (next === current) continue;

                // if (current > value) continue;

                this.mask.set(id, next);
                this.ref.set(id, tile);

            }

        },

        resolveMaskImportance(a, b) {

            if ((a === 1 && b === 3) || (a === 3 && b === 1)) return 1;

            return Math.max(a, b);

        },

        refresh() {

            for (var i = 0; i < this.tilesToRefresh.length; i += 2) {

                let tx = this.tilesToRefresh[i];
                let ty = this.tilesToRefresh[i + 1];

                this.refreshTile(tx, ty);

            }

            this.tilesToRefresh.length = 0;

        },

        replaceLayer(tile, layer, key) {

            if (typeof key === "string") key = this.findTileByID(key).key;

            this.clearMaskAtTile(tile);

            tile.wall = key;
            tile.wallDef = this.tileset.tiles[tile.wall];

            this.game.enqueue("mapReplaceTile", {
                layer: "wall",
                x: tile.x,
                y: tile.y,
                key: key
            });

            this.refresh();

        }


    };

    if (typeof exports !== "undefined") {

        module.exports = InfiniteMap;

    }

    if (typeof NAMESPACE !== "undefined") {

        NAMESPACE.InfiniteMap = InfiniteMap;

    }

}