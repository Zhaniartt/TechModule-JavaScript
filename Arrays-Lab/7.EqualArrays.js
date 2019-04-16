function solve(arr1,arr2) {
  let sum = 0;
  let isEqual = true;
  for(let i = 0; i < arr1.length ; i++){

    if(Number(arr1[i]) === Number(arr2[i])){
       sum += Number(arr1[i]);
    }
    else{
        isEqual = false;
        console.log(`Arrays are not identical. Found difference at ${i} index`)
        break;
    }

  }
  if(isEqual){
    console.log(`Arrays are identical. Sum: ${sum}`)
  }


}
solve(['1'],['10'])
