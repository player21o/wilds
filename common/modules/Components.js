NAMESPACE.Components = function(subject) {

  this.subject = subject;
  this.components = [];

};

NAMESPACE.Components.prototype = {

  call(method, a, b, c) {

    let result = false;

    for (var i = 0; i < this.components.length; i++) {

      let component = this.components[i];

      if (component[method]) {

        result = result || component[method](a, b, c);

      }

    }

    return result;

  },

  fromArray(array) {

    for (var i = 0; i < array.length; i++) {

      let info = array[i];

      let component = new NAMESPACE.Components[info.component];

      component.subject = this.subject;
      component.data = info;

      if (component.create) component.create();

      this.components.push(component);

    }

  }

};