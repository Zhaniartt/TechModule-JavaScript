function solve(input){
    let pattern = /:[A-Z\W\S]\b/g
    while((emoticons = pattern.exec(input)) !== null){
        console.log(emoticons[0])
    }
}
solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')