function addorRemove(arr){
    let newArr = [];
    let n = 0;
  
     for(let i = 0; i < arr.length ; i++){
       let currentCommand = arr[i];
       n++;
       for(n = n; n <= arr.length;){
        if(currentCommand === "add"){
          
           newArr.push(n);
           break;
        }
        else if(currentCommand === "remove"){
          newArr.pop();
          break;
        }
       }
       
     }
     if(newArr.length <= 0){
       console.log(`Empty`);
       
     }else{
       console.log(newArr.join(" "))
     }
     
  }