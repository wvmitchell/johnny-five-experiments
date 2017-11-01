import twilio from 'twilio'
import { twilioSID, twilioAuthToken } from './keys'

export const sendMessage = (message) => {
  const client = new twilio(twilioSID, twilioAuthToken);
  client.messages.create({
    body: message,
    to: '+13038877697',
    from: '+19704091403'
  }).then(message => console.log(message.sid))
    .catch(err => console.log(err))
}
