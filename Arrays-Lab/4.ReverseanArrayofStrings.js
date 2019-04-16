function solve(arr) {
  let print = '';
  for(let i = arr.length - 1; i >= 0;i--){
    print += arr[i] + " ";
  }
  console.log(print);
}
solve(['a','b','c','d','e'])
