function solve(arr){
  let newArr = []
  for(let ar of arr){
      let parts = ar.split(" ");
      let name = parts[0]
      let phoneNum = parts[1];

      newArr[name] = phoneNum
  }
  
  for(let name in newArr){
      console.log(`${name} -> ${newArr[name]}`)
  }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])