function solve(arr){
    let map = new Map()
   let wordsToTrack = arr.shift().split(" ");

   for(let word of wordsToTrack){
       let currentWord = word;
       let counter = 0;

       for(let ar of arr){
           if(currentWord === ar){
               counter++;
           }
       }
       map.set(currentWord,counter)
   }
let sorted = [...map].sort((a,b) => b[1] - a[1])

   for(let [name,count] of sorted){
        console.log(`${name} - ${count}`)
   }
}