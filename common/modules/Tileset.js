NAMESPACE.Tileset = class {

  constructor() {

    this.tiles = {};
    this.palettes = [];
    this.imagesCount = 0;
    this.tileIndex = 0;
    this.ready = true;
    this.emptyTile = {};

  }

  unserialize(raw) {

    if (typeof raw === "string") {

      var temp = JSON.parse(raw);

    } else {

      temp = raw;

    }

    this.tileIndex = temp.tileIndex;
    this.tiles = temp.tiles;
    this.imagesCount = temp.imagesCount;
    this.ready = false;

  }

};