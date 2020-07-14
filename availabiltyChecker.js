
const checkAvailbilityFromData=(responseArr)=>{
  //  console.log('i am good');
    let availableDomains=[]
    responseArr.forEach(res => {
        console.log(res)
        if(res.available){
           availableDomains.push(res);
        }
    });
    return availableDomains;
}
module.exports=checkAvailbilityFromData
