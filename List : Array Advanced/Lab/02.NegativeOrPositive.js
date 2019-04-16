function solve(arr){
    let result = [];

    for(let element of arr){
       if(element < 0){
          result.unshift(element);
       }else{
          result.push(element);
       }
    }

    for(let i = 0; i< result.length;i++){
       console.log(result[i])
    }

}