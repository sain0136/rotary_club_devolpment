export default {

async contactMailer(name,senderEmail,theBody){
    const email = {
        sender_email: senderEmail,
        sender_name:name,
        body:theBody
      }
      const res = await fetch(
        'http://74.208.135.85/mail/contactUs',
        {
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body: JSON.stringify(
              email,
            ),
          },
        )
        const response = await res.json()
        return await response
}

}
