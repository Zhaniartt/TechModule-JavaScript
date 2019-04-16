function solve(n,k){
    let result = [1];

    for(let i = 1; i < n; i++){
       let index = i - k;
       if(index < 0){
          index = 0;
           
       }
       let subArr = result.slice(index);

         let sum = subArr.reduce((a,b) => a+b);
         
         result.push(sum);

    }
    console.log(result.join(" "));
    
}