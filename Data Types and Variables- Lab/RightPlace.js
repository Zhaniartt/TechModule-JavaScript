function rightPlace(input,word,output){
    let result = input.replace("_",word);
    result=== output ? console.log(`Matched`) : console.log(`Not Matched`);
}
rightPlace("Str_ng","I","Strong")