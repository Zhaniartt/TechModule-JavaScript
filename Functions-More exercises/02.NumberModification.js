function numberModification(arr){
    let numbers = [arr];
    let numByNum = numbers.toString();

    for(let i = 0; i < numByNum.length;i++){
      let sum = 0;
      for(let n = 0; n < numByNum.length;n++){
        sum += +numByNum[n];
      }
      let length = numByNum.length;
        if(sum / length >= 5){
          console.log(numByNum)
          break;
        }else{
          numByNum += '9'
        }
    }

}