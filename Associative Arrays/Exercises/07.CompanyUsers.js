function solve(params){
  let map = new Map()
  for(let param of params){
      let companyName = param.split(" -> ")[0];
      let companyID = param.split(" -> ")[1];

      if(map.has(companyName)){
        let existingsValues = map.get(companyName)
        if(!existingsValues.includes(companyID)){
          map.get(companyName).push(companyID)

        }
      }else{
          map.set(companyName,[companyID])

      }
  
  }
  let sorted = [...map.entries()].sort((a,b) => a[0].localeCompare(b[0]));
for(let [comp,id] of sorted){
  console.log(comp)
 
 for(let i of id){
     console.log(`-- ${i}`)
 }
}
}
solve(['SoftUni -> AA12345',
'SoftUni -> CC12344',
'Lenovo -> XX23456',
'SoftUni -> AA12345',
'Movement -> DD11111'
])