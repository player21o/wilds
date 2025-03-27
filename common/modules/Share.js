NAMESPACE.Sharer = function(descriptors) {

    this.listeners = {};

    this.descriptors = descriptors;
    this.keyToIndex = new Map;
    this.indexToKey = new Map;
    this.keys = [];
    this.keysQueue = [];

    // this.getKeyIndex(this.emptyKey);

    this.symbol_last_update = Symbol.for("last_update");
    this.symbol_last_share = Symbol.for("last_share");

    this.getKeyIndex("snapshot");

};

NAMESPACE.Sharer.prototype = {

    keyIndex: 0,

    emptyKey: "the_key_was_empty",

    DONT_ENCODE: 1,

    setKey: function(index, key) {

        this.keyToIndex.set(key, index);
        this.indexToKey.set(index, key);
        this.keys.push(index, key);
        this.keysQueue.push(index, key);

        this.trigger("addkey", index, key);

    },

    setKeys: function(array) {

        if (!array) return;

        for (var i = 0; i < array.length; i += 2) {

            this.setKey(array[i], array[i + 1]);

        }

    },

    getKey: function(index) {

        return this.indexToKey.get(index);

    },

    getKeyIndex: function(key) {

        if (!this.keyToIndex.has(key)) {

            this.setKey(++this.keyIndex, key);

        }

        return this.keyToIndex.get(key);

    },

    serialize: function(object) {

        var result = [];

        for (var key in object) {

            result.push(this.getKeyIndex(key), object[key]);

        }

        return result;

    },

    unserialize: function(array) {

        var object = {};

        for (var i = 0; i < array.length; i += 2) {

            var key = this.getKey(array[i]);

            object[key] = array[i + 1];

        }

        return object;

    },

    encode: function(code, source, full, partial, ignoreUndefined = false) {

        var symbol_last_update = Symbol.for("last_update");
        var symbol_last_share = Symbol.for("last_share");

        if (!full) full = [];

        var changes = 0;
        var changesCount = 0;

        var desc = this.descriptors[code];

        if (!desc) console.log("No such shared descriptor as", code);

        if (partial) partial.length = desc.length + 1;

        for (var i = 0; i < desc.length; i++) {

            var property = desc[i][0];

            var type = desc[i][1];
            var val = desc[i][2] ? source[desc[i][2]] : source[property];

            var skip = false;
            var force = false;

            if (ignoreUndefined && typeof val === "undefined") skip = true;

            if (!skip) switch (type) {

                case "key":

                    val = this.getKeyIndex(val);

                    // || this.emptyKey

                    break;

                case "queue":

                    if (val.length) {

                        val = [].concat(val);

                        source[property].length = 0;

                    } else {

                        skip = true;

                    }

                    break;

                case "boolean":
                case "bool":

                    val = Boolean(val);

                    break;

                case "int":

                    val = val | 0;

                    break;

                case "float":

                    val = val * 100 | 0;

                    break;

                case "sfloat":

                    val = val * 10 | 0;

                    break;

                case "object":

                    if (!partial || (val[symbol_last_update] | 0) !== val[symbol_last_share]) {

                        val[symbol_last_update] = val[symbol_last_update] | 0;
                        val[symbol_last_share] = val[symbol_last_update];

                        force = true;

                    } else {

                        skip = true;

                    }

                    break;

                default:

                    break;

            }

            if (!skip && (force || (full[i] !== val || type === "always"))) {

                full[i] = val;

                if (partial) partial[changesCount + 1] = val;

                changes = changes | Math.pow(2, i);

                changesCount++;

            }

        }

        if (partial) {

            partial[0] = changes;

            partial.length = changesCount + 1;

        }

        return partial || full;

    },

    decode: function(code, data, partial) {

        var properties = this.descriptors[code];

        var result = {};

        if (partial) {

            var changes = data[0];
            var index = 1;

            for (var i = 0; i < properties.length; i++) {

                if (changes >= 0 && !(changes & Math.pow(2, i))) continue;

                var property = properties[i][0];
                var type = properties[i][1];
                var value = data[index];

                switch (type) {

                    case "key":

                        value = this.getKey(value);

                        break;

                    case "float":

                        value /= 100;

                        break;

                    case "sfloat":

                        value /= 10;

                        break;

                }

                result[property] = value;

                index++;

                if (index >= data.length) break;

            }

        } else {

            for (var i = 0; i < data.length; i++) {

                var property = properties[i][0];
                var type = properties[i][1];
                var value = data[i];

                switch (type) {

                    case "key":

                        value = this.getKey(value);

                        break;

                    case "float":

                        value /= 100;

                        break;

                    case "sfloat":

                        value /= 10;

                        break;

                }

                result[property] = value;

            }

        }

        return result;

    },

    defaultValues: {
        "float": 0,
        "sfloat": 0,
        "int": 0,
        "string": "",
        "key": "",
        "always": 0,
        "bool": false,
        "boolean": false
    },

    defaults: function(key) {

        var result = {};

        var properties = this.descriptors[key];

        for (var i = 0; i < properties.length; i++) {

            var name = properties[i][0];
            var type = properties[i][1];

            result[name] = this.defaultValues[type];

        }

        return result;

    },

    markUpdate(object) {

        object[this.symbol_last_update] = object[this.symbol_last_update] + 1 | 0;

    },

    poke(object) {

        object[this.symbol_last_update] = object[this.symbol_last_update] + 1 | 0;

    },

    getUpdateMark(object) {

        return object[this.symbol_last_update] | 0;

    },

    on: function(event, callback, context) {

        if (typeof event === "object") {

            var result = {};

            for (var key in event) {

                result[key] = this.on(key, event[key], context)

            }

            return result;

        }

        if (!this.listeners[event]) this.listeners[event] = [];

        var listener = {
            once: false,
            callback: callback,
            context: context
        };

        this.listeners[event].push(listener);

        return listener;
    },

    once: function(event, callback, context) {

        if (typeof event === "object") {
            var result = {};
            for (var key in event) {
                result[key] = this.once(key, event[key], context)
            }
            return result;
        }

        if (!this.listeners[event]) this.listeners[event] = [];

        var listener = {
            once: true,
            callback: callback,
            context: context
        };

        this.listeners[event].push(listener);

        return listener;
    },

    off: function(event, callback) {

        for (var i = 0, len = this.listeners[event].length; i < len; i++) {

            if (this.listeners[event][i]._remove) {

                this.listeners[event].splice(i--, 1);
                len--;

            }

        }

    },

    trigger: function(event, a, b, c) {

        if (this.listeners.event) {

            for (var i = 0, len = this.listeners.event.length; i < len; i++) {

                var listener = this.listeners.event[i];

                listener.callback.call(listener.context, event, a, b, c);

            }

        }

        /* or subscribed to  a single event */

        if (this.listeners[event]) {

            for (var i = 0, len = this.listeners[event].length; i < len; i++) {

                var listener = this.listeners[event][i];

                listener.callback.call(listener.context || this, a, b, c);

                if (listener.once) {

                    this.listeners[event].splice(i--, 1);
                    len--;

                }

            }

        }

    }

};