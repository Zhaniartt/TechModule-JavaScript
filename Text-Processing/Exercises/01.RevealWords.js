function solve(input,sentenc){
    
    input.split(", ").forEach((word)=> {
        sentenc = sentenc.replace('*'.repeat(word.length),word)
    })
    console.log(sentenc)
}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')