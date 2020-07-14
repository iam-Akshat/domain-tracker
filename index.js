const callGoDaddy   = require('./callGoDaddy');
const checkFromResponse = require('./availabiltyChecker');
const sendMail = require('./mailHandler');
// const list  = require('domainList.json');
require('dotenv').config();
const list={
    "main":"www.google.com"
}
const testUrl = "https://api.godaddy.com/v1/domains/available"

const fromMail="masterakshata@gmail.com"
const toMail=fromMail 

const checker=async (data,context)=>{
    try {
       const [success,response]= await callGoDaddy(process.env.GO_DADDY_KEY,process.env.GO_DADDY_SECRET,list,testUrl);
       //console.log(response)
       if(success){
        let mailsToBeSent=[]
        const availableDomains= checkFromResponse(response);
        availableDomains.forEach(domain=>{
             mailsToBeSent.push(sendMail(domain,fromMail,toMail))   
        })
        Promise.allSettled(mailsToBeSent).then().catch(e=>{
            console.log(e)
        })
       }
    
    } catch (error) {
        console.log(error)
    }
}
//for development debugging
// checker(1,2).then(a=>{
//     console.log('pls work')
// })



// console.log(res);
exports.checker=checker;