import Tessel from 'tessel-io'
import five from 'johnny-five'

const board = new five.Board({
  io: new Tessel()
})

board.on('ready', () => {
  const blueButton = new five.Button("a2")
  const redButton = new five.Button("a3")
  const leds = new five.Leds(["a5", "a6", "a7"])

  let state = {
    blue: { light: leds[0], on: false },
    red: { light: leds[1], on: false },
    purple: { light: leds[2], on: false }
  }

  blueButton.on("press", () => handlePress('blue', state))
  redButton.on("press", () => handlePress('red', state))
})

const handlePress = (button, state) => {
  let btn = state[button]
  btn.on = !btn.on

  if(state.blue.on && state.red.on) {
    state.blue.on = false
    state.red.on = false
    state.purple.on = true
  } else {
    state.purple.on = false
  }

  Object.keys(state).forEach((key) => {
    let color = state[key]
    if(color.on) {
      color.light.on()
    } else {
      color.light.off()
    }
  })
}
