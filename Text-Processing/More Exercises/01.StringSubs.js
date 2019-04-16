function solve(word,text){
    let regex = new RegExp(word,'gi')
    
    while((validName = regex.exec(text))){
       text=  text.replace(validName,'')
    }
    let output = text.split(" ")
for(let name in output){
    console.log(`idx[${name}] -> ${output[name]}`)
}

}
solve('wel','Welcome to the Software University!')