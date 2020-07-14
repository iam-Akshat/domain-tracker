const callGoDaddy= require('./callGoDaddy');
// const list  = require('domainList.json');
require('dotenv').config();
const list={
    "main":"google.com"
}
const testUrl = "https://api.ote-godaddy.com/v1/domains/available";

const checker=async (data,context)=>{
    try {
        await callGoDaddy(process.env.GO_TEST_KEY,process.env.GO_TEST_SECRET,list,testUrl);
    
    } catch (error) {
        console.log(error)
    }
}
checker(1,2).then(a=>{
    console.log('pls workd')
})
// console.log(res);
exports.checker=checker;