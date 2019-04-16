function buildWall(arr){
    let totalUsedConcrete = [];
    let totalPrice = 0;
    let isComplete = false;
  
    while(!isComplete){
          isComplete = true;
          let dailyConcrete = 0;
          for(let i = 0; i < arr.length;i++){
            if(arr[i] < 30){
                arr[i]++;
                dailyConcrete += 195;
                isComplete = false;
            }
          }
          if(!isComplete){
            totalUsedConcrete.push(dailyConcrete)
            totalPrice += dailyConcrete * 1900;
          }
    }
     console.log(`${totalUsedConcrete.join(", ")}\n${totalPrice} pesos`)
  }