require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);





const sendMail=async (res,fromMail,toMail)=>{
    const msg = {
        to: `${toMail}`,
        from: `${fromMail}`,
        subject: `${res.domain} is available for purchase`,
        text: 'One of the domains you mentioned is available',
        html: `<h1>${JSON.stringify(res)}</h1>`,
      };
      console.log('mail sent')
    try {
        await sgMail.send(msg)
        return 1;
    } catch (error) {
        console.log('this is from mail handler ');
        console.log(error.response.body.errors);
        return 0;
    }
    
}

module.exports=sendMail;