function solve(arr){
    let map = new Map();

    let listOfNeighb= arr.shift().split(", ");

for(let neighborhood of listOfNeighb){
    map.set(neighborhood,[])
}
for(let ar of arr){
    
    let parts = ar.split(" - ");
    let hood = parts[0]
    let name = parts[1]

    if(listOfNeighb.includes(hood)){
        map.get(hood).push(name)
    }
}
let sorted = [...map].sort((a,b) => b[1].length - a[1].length)
for(let [key,value] of sorted){
    console.log(`${key}: ${value.length}`)
    for(let val of value){
        console.log(`--${val}`)
    }
}

}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])