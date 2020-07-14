const axios = require('axios');
const check =require('./availabiltyChecker');
const jsonToArr = obj => {
    let tempArr = []
    for (t in obj) {
        tempArr.push(obj[t])
    }
    return tempArr;
}


const callGoDaddy = async (key, secret,list,url) => {
   
    let config = {
        headers: {
            'Authorization': ` sso-key ${key}:${secret}`,
        },
    }
    let success=0;
    try {
        response=await axios.post(url, jsonToArr(list), config);
        success=1;
        console.log('and was successfull')
        return [success,response.data.domains];
    } catch (error) {
        return [success,Null];
    }

}


module.exports = callGoDaddy;
// // let res=JSON.parse(data);