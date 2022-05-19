import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class MailController {
  public async contactUsFormMail({ request }: HttpContextContract) {
    const senderEmail: string = request.input('sender_email')
    const senderName: string = request.input('sender_name')
    const body: string = request.input('body')
    await Mail.send((message) => {
      message
        .from('jssr26@gmail.com')
        .to('jssr26@gmail.com')
        .replyTo(senderEmail)
        .subject('Rotary Enquiry from:' + senderName)
        .html(
          'Click link to reply or just click reply to reply to the actual sender: ' +
            senderEmail +
            '. ' +
            body
        )
    })
  }
}
