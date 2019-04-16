function solve(arr){
    let map = new Map()
    arr = arr.split(" ")
   let list = arr.map(x=> x.toLowerCase())
   for(let ar of list){
       let currentWord = ar;
       let counter =0;
       for(let word of list){
           if(word === currentWord){
               counter++;
           }
       }
       map.set(currentWord,counter)
   }
   let output = ''
   for(let [key,value] of map){
       if(value % 2 ==1){
           output += key + " "
       }
   }
   console.log(output)
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


