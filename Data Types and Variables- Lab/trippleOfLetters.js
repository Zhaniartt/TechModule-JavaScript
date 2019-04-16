function solve(arg){
  for(let i = 1;i<=arg;i++){
      for(let s = 1;s<=arg; s++){
          for(let p = 1; p<=arg; p++){
              console.log(`${String.fromCharCode(i + 96)}${String.fromCharCode(96 + s)}${String.fromCharCode(p + 96)}`)
          }
      }
  }
}
solve(3)