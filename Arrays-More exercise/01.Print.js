function print(arr){
    let nthStep  = Number(arr[arr.length-1]);
    let newArr = []
    arr.pop();
    for(let i = 0; i < arr.length ; i += nthStep){
       newArr.push(arr[i])
    }
    console.log(newArr.join(" "));
    
 }