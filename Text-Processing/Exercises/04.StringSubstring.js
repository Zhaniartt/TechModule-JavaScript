function solve(word,input){
input = input.split(" ").map(x=> x.toLowerCase())
let index = input.indexOf(word)
if(index !== -1){
    console.log(word)
}else{
    console.log(`${word} not found!`)
}


}
solve('python',
'JavaScript is the best programming language')