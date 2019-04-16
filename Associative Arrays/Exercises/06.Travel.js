function solve(input){
    let list = {}
    for(let inp of input){
        let [country,town,value] = inp.split(' > ')
        town = town.charAt(0).toUpperCase()+ town.substring(1);
        if(!list.hasOwnProperty(country)){
            list[country] = {}
        }if(!list[country][town]){
            list[country][town]=value
        }
        if(list[country][town] > value){
            list[country][town] = value
        }

    }
   let sorted = Object.entries(list).sort((a,b)=>{
        return a[0].localeCompare(b[0])
    })
    for(let [country,towns] of sorted){
        let sortedTowns = Object.entries(towns)
            .sort((a,b) => a[1] - b[1])
            .map(a => `${a[0]} -> ${a[1]}`)
            console.log(`${country} -> ${sortedTowns.join(" ")}`)
    }

}
solve([ 'Bulgaria > Sofia > 500',
'Bulgaria > Sopot > 800',
'France > Paris > 2000',
'Albania > Tirana > 1000',
'Bulgaria > Sofia > 200' ]
)