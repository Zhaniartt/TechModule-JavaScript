function solve(arr) {
  let dayOfWeek = ['Monday','Tuesday','Wednesday',
  ,'Thursday','Friday','Saturday','Sunday']

  if(arr >= 1 && arr <= 7){
     console.log(dayOfWeek[arr-1])
  }
  else{
    console.log(`Invalid day`)
  }
}
solve(5)
