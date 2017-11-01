'use strict';

var _tesselIo = require('tessel-io');

var _tesselIo2 = _interopRequireDefault(_tesselIo);

var _johnnyFive = require('johnny-five');

var _johnnyFive2 = _interopRequireDefault(_johnnyFive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = new _johnnyFive2.default.Board({
  io: new _tesselIo2.default()
});

board.on('ready', function () {
  var leds = new _johnnyFive2.default.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7']);
  leds[0].on();
  leds[2].on();
  leds[4].on();

  board.loop(300, function () {
    leds.toggle();
  });
});