function solve(arr){
    let map = new Map()
    for(let i = 0; i< arr.length; i++){
        let product = ''
        let quantity =''
        
       
            product = arr[i]
       
            quantity = +arr[i+1]
        
        if(map.has(product)){
            let existing = map.get(product)
            quantity += +existing;
        }
        i++
        map.set(product,quantity)
        
    }
    for(let [product,quant] of map){
        console.log(`${product} -> ${quant}`)
    }
}
solve(['gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
])