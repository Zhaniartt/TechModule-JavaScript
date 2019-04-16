function solve(arr , arr2) {
  let newArr = [];

  for (let i = 0; i < arr ; i++){
    newArr.push(arr2[i]);
  }
  let reversedArr = newArr.reverse();
  console.log(reversedArr.join(' '))


}
solve(3,[10,20,30,40,50])
