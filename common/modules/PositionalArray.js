NAMESPACE.PositionalArray = {

  offset(array, x = 0, y = 0) {

    for (var i = 0; i < array.length; i += 3) {

      array[i + 0] += x;
      array[i + 1] += y;

    }
  },

  get(array, x, y) {

    for (var i = 0; i < array.length; i += 3) {

      if (array[i] !== x) continue;
      if (array[i + 1] !== y) continue;

      return array[i + 2];

    }

    return undefined;

  },

  set(array, x, y, value) {

    this.delete(array, x, y);

    array.push(x, y, value);

  },

  delete(array, x, y) {

    for (var i = 0; i < array.length; i += 3) {

      if (array[i] !== x) continue;
      if (array[i + 1] !== y) continue;

      array.splice(i, 3);

      break;

    }

  },

  union(a, b) {

    if (!b) return a;

    for (var i = 0; i < b.length; i += 3) {

      this.delete(a, b[i + 0], b[i + 1]);
      this.set(a, b[i + 0], b[i + 1], b[i + 2]);

    }

    return a;

  }

}