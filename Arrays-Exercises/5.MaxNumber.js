function solve(arr){
    let topIntegers = [];
    for(let i = 0; i < arr.length;i++){
      let currentElement = arr[i];
      let isTopInteger = true;
      for(let j = i+ 1; j < arr.length;j++){
        if(currentElement <= arr[j]){
           isTopInteger = false;
           break;
        }
        
      }
      if(isTopInteger){
        topIntegers.push(currentElement);
      }
    }
    console.log(topIntegers.join(" "))
}