function solve(arr){
    let products = new Map()

  for(let string of arr){
      let parts = string.split(" ");
      let product = parts[0]
      let quantity = +parts[1];

        if(products.has(product)){
            quantity += products.get(product);
        }
     products.set(product , quantity)
        
  }
  for(let [product , quantity] of products.entries()){
        console.log(`${product} -> ${quantity}`)
  }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])