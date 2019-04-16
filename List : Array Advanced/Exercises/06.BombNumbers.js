function bomb(arr,bombArr){
    let mainArr = arr.map(String);
    let bombNum = bombArr[0].toString()
    let bombValue = bombArr[1]; 

    for(let i = 0; i < mainArr.length;i++ ){
         if(mainArr[i] === bombNum){
             //let index = mainArr.indexOf(mainArr[i]);
             mainArr.splice(Math.max(0, i - bombValue), bombValue * 2 + 1);
             i--;
         }
    }
    let sum = 0;
    for(let num of mainArr){
            sum += +num
    }
    console.log(sum)
}