function solve(arr){
    let map = new Map()

    for(let word of arr){
        let counter = 0;
        let currentWord = word;

        for(let current of arr){
            if(currentWord === current){
                counter++;
            }
        }
        map.set(word,counter)
    }
    let sorted = [...map].sort((a,b) => b[1] - a[1])
    for(let [word,count] of sorted){
        console.log(`${word} -> ${count} times`)
    }

}
solve(["Here", "is", "the",
 "first", "sentence", "Here", "is", "another",
  "sentence", "And", "finally", "the",
   "third", "sentence"])