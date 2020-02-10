
const sgMail = require('@sendgrid/mail')




sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'npaudyal01@gmail.com',
        subject: 'Thanks for Joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        
    })

}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'npaudyal01@gmail.com',
        subject: 'Ja khate mar!',
        text: `Bye Bye! Ta ${name} muji ghatera malai k huncha ra!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'npaudyal@go.olemiss.edu',
//     from: 'khakharayo@gmail.com',
//     subject: 'My first creation',
//     text: 'I hope you get this'
// })
