import Tessel from 'tessel-io'
import five from 'johnny-five'

const board = new five.Board({
  io: new Tessel()
})

board.on('ready', () => {
  let leds = new five.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7'])
  leds[0].on()
  leds[2].on()
  leds[4].on()

  board.loop(300, () => {
    leds.toggle()
  })
})
