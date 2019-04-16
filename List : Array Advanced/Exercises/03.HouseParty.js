function houseParty(arr){
    let finalList = [];
    for(let i = 0; i < arr.length;i++){
        let guestName = arr[i].split(' ')[0]
        let command = arr[i].includes("not");
        let index = finalList.indexOf(guestName);
        if(command === false && index === -1){
           finalList.push(guestName)
        }else if(command === true && index !== -1){
            finalList.splice(index,1)
        }else if(command === true && index == -1){
            console.log(`${guestName} is not in the list!`)
        }else if(command === false && index !== -1){
         console.log(`${guestName} is already in the list!`)
 
        }
    }
    console.log(`${finalList.join("\n")}`)
 }