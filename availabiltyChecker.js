const sendMail = require('./mailHandler');
const checkAvailbilityFromData=(responseArr)=>{
    console.log('i am good');
    responseArr.forEach(res => {
        if(res.available){
            sendMail(res);
        }
    });
}
module.exports=checkAvailbilityFromData
