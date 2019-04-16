function solve(input,word){
  
  while(input.includes(word)){
      let replacment = "*".repeat(word.length)
      input = input.replace(word , replacment)
  }
  console.log(input)
}
solve("A small sentence with some words ", "small")