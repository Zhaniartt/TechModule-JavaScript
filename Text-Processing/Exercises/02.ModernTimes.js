function solve(input){
   
    let words = input.split(" ").forEach((word)=> {
        let pattern = /(?<=#)[a-z|A-Z]+/g;
        if(pattern.test(word)){
            console.log(word.slice(1))
        }
    })
     
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')