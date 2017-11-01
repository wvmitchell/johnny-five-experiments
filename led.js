var Tessel = require('tessel-io')
var five = require('johnny-five')

var board = new five.Board({
  io: new Tessel()
})

board.on('ready', () => {
  var leds = new five.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7'])
  var index = 0
  var step = 1

  //board.loop(200, () => {
  //  leds.off()
  //  leds[index].on()
  //  index += step
  //  if (index === 0 || index === leds.length - 1) {
  //    step *= -1
  //  }
  //})
  
  leds[0].on()
  leds[2].on()
  leds[4].on()

  board.loop(300, () => {
    leds.toggle()
  })
})
