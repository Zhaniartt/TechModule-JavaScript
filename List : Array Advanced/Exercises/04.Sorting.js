function sorting(arr){
    let finalArr = [];
    let currentArr = arr.sort((a,b)=> a-b)
    for(let i = 0; i <= currentArr.length; i++){
        
      finalArr.push(currentArr.pop())
      finalArr.push(currentArr.shift())
    }
    finalArr.push(currentArr.pop());
    finalArr.push(currentArr.shift())
    console.log(finalArr.join(" "))
  }