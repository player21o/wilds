 
var arapi = {

  services: [],

  index: 0,

  x: 0,
  y: 0,
  width: 10,
  height: 10,

  add: function(item) {

    item.api = this;

    this.services.push(item);

  },

  show: function(country) {

    if (window != window.top) return;

    if (!this.services.length) return;

    if (!this.item) this.index = Math.random() * this.services.length | 0;

    this.visible = true;

    this.item = this.services[this.index];

    var result = this.item.show(country);

    if (result) this.cycle();

  },

  cycle: function() {

    this.index = (this.index + 1) % this.services.length;

  },

  hide: function() {

    if (!this.services.length) return;

    if (!this.item) return;

    this.visible = false;

    this.item.hide();

  },

  update: function() {

    if (!this.item) return;
    if (!this.item.update) return;

    if (!this.visible) return;

    this.item.update();

  }

}