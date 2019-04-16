function solve(input){
    input = input.split(" ")
    let names = []
    for(let i = 0; i< input.length;i++){
        let currentWord = input[i]
        let index = input.indexOf(currentWord)
        if(currentWord.startsWith("*") && currentWord.endsWith("*")){
            let newName = currentWord.slice(1,currentWord.length-1)
            if(newName.match(/[A-Z][a-z]+\b/g)){
                names.push(`*${newName}*`)
                input.splice(index,1)
                i--;
            }
            
        }
    }
  console.log(names.join(", "))
  console.log("*".repeat(20))
  
  console.log(input.join(" "))
}
solve("Oh my *Rudolf* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.")