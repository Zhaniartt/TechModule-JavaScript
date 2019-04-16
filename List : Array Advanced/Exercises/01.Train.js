function train(arr){
    let maxPassengers = +arr[1];
    let mainList = arr[0].split(" ").map(Number).filter(x=> x <= maxPassengers);
     for(let i = 2; i<arr.length;i++){
         let command = arr[i].split(" ")[0];
         let value = +arr[i].split(" ")[1];
         if(command === "Add"){
             mainList.push(value)
         }else{
            for(let n = 0; n < mainList.length;n++){
                let currentWagon = mainList[n];
                if(currentWagon + +command <= maxPassengers){
                    mainList[n] += +command;
                    break;
                }
            }
         }
     }    
     console.log(mainList.join(" "));
     
 }
 train()
