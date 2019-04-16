function solve(sentence,word){
    let input = sentence.split(" ")
    let counter = 0;
    for(let wordS of input){
        if(wordS === word){
            counter++
        }
    }
    console.log(counter)
}
solve("This is a word and it also is a sentence",
"is")