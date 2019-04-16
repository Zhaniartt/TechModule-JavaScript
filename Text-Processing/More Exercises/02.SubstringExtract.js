function solve(word,sent){
    let sentence = sent.split(" ");
    for(let i = 0; i< sentence.length;i++){
        let currentWord = sentence[i]
        if(currentWord.toLowerCase().includes(word.toLowerCase())){
            let index = sentence.indexOf(currentWord)
            sentence.splice(index,1)
            i--;
        }
        
    }
    sentence.forEach((a,i)=> console.log(`idx[${i}] -> ${a}`))

}
solve('wel','Welcome to the Software University!')