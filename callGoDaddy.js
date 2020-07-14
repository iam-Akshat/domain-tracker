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

    axios.post(url, jsonToArr(list), config).then(dat => {
        check(dat.data.domains);
    }).catch(e => {
        console.log(e);
    })

}


module.exports = callGoDaddy;
// // let res=JSON.parse(data);