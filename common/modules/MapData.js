NAMESPACE.MapData = function(data) {

    this.map = {};
    this.entities = [];
    this.meta = {};
    this.scripts = {};

    this.sandbox_id = NAMESPACE.sandbox_id++;

    this.scripts[this.sandbox_id] = [];


    if (data) this.open(data);

};

NAMESPACE.MapData.prototype = {

    merge(mapData, x = 0, y = 0) {

        for (let key in mapData.map) {

            let tile = mapData.map[key];

            let pos = mapData.pos(key);

            let shiftedKey = this.key(pos[0] + x, pos[1] + y);

            this.map[shiftedKey] = tile;

        }

        for (let entity of mapData.entities) {

            this.entities.push(Object.assign(Utils.clone(entity), {
                x: entity.x + x * COMMON.TILE_WIDTH,
                y: entity.y + y * COMMON.TILE_HEIGHT
            }));

        }

        // this.updateBounds();

        Object.assign(this.scripts, mapData.scripts);

    },

    toObject() {

        return {
            map: this.map,
            entities: this.entities,
            meta: this.meta
        }

    },

    toJSON() {

        return JSON.stringify(this.toObject());

    },

    updateBounds() {

        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;

        for (let key in this.map) {

            let pos = this.pos(key);

            this.left = Math.min(this.left, pos[0]);
            this.top = Math.min(this.top, pos[1]);
            this.right = Math.max(this.right, pos[0] + 1);
            this.bottom = Math.max(this.bottom, pos[1] + 1);

        }

        for (let entity of this.entities) {

            let tx = entity.x / COMMON.TILE_WIDTH | 0;
            let ty = entity.y / COMMON.TILE_HEIGHT | 0;

            this.left = Math.min(this.left, tx);
            this.top = Math.min(this.top, ty);
            this.right = Math.max(this.right, tx);
            this.bottom = Math.max(this.bottom, ty);
        }


        this.width = (this.right - this.left) || 4;
        this.height = (this.bottom - this.top) || 4;


    },

    open(data) {

        data = Utils.clone(data);

        this.map = {};

        for (let key in data.map) {

            this.map[key] = data.map[key];

        }

        this.entities = data.entities;
        this.meta = data.meta;

        this.scripts[this.sandbox_id] = data.meta.scripts || [];

        for (let entity of this.entities) {

            entity.sandbox_id = this.sandbox_id;

        }

        this.updateBounds();


    },

    pos(key) {

        let temp = key.split(",");
        return [temp[0] | 0, temp[1] | 0];

    },

    key(x, y) {

        return x + "," + y;

    },

    shiftToZero() {

        let shiftedTiles = {};

        for (let key in this.map) {

            let pos = this.pos(key);

            pos[0] -= this.left;
            pos[1] -= this.top;

            let shiftedKey = this.key(pos[0], pos[1])

            shiftedTiles[shiftedKey] = this.map[key];

        }

        this.map = shiftedTiles;

        for (let entity of this.entities) {

            entity.x -= this.left * COMMON.TILE_WIDTH;
            entity.y -= this.top * COMMON.TILE_HEIGHT;

        }

        this.updateBounds();
    },

    shiftToCenter() {

        this.updateBounds();
        let width = Math.abs(this.left - this.right);
        let height = Math.abs(this.top - this.bottom);


        let left = -width / 2 | 0;
        let top = -height / 2 | 0;

        let shiftLeft = left - this.left - 1;
        let shiftUp = top - this.top - 1;

        let shiftedTiles = {};

        for (let key in this.map) {

            let pos = this.pos(key);

            pos[0] += shiftLeft;
            pos[1] += shiftUp;

            let shiftedKey = this.key(pos[0], pos[1])

            shiftedTiles[shiftedKey] = this.map[key];

        }

        this.map = shiftedTiles;

        for (let entity of this.entities) {

            entity.x += shiftLeft * COMMON.TILE_WIDTH;
            entity.y += shiftUp * COMMON.TILE_HEIGHT;

        }

        this.updateBounds();
    },

    get(x, y) {

        return this.map[this.key(x, y)];

    }

};