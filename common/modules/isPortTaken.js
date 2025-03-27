var isPortTaken = function(port, fn) {
  var net = require('net')
  var tester = net.createServer()
    .once('error', function(err) {

      return fn(err);

    })
    .once('listening', function() {
      tester.once('close', function() {
          fn(false)
        })
        .close()
    })
    .listen(port)
}

module.exports = isPortTaken;