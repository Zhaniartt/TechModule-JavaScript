function solve(arr1,arr2){
    for(let i = 0; i < arr1.length;i++){
      let firstWord = arr1[i];
      for(let n = 0; n < arr2.length;n++){
        let secondWord = arr2[n]
          if(firstWord === secondWord){
            console.log(arr2[n])
          }
      }
    }
}