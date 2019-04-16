function solve(arr){
    let newarr = arr[0].split(' ');
    let lastNum = arr[1];
    let output = ""
 
    for(let i = 0; i < newarr.length ; i++){
        let currentNum = +newarr[i];
       for(let j = i + 1; j < newarr.length;j++){
           let nextNum = +newarr[j]
           if(currentNum + nextNum == lastNum){
             output += currentNum + " ";
             output += nextNum;
             console.log(output);
             output = ""
          }
       }
    }
    
 }