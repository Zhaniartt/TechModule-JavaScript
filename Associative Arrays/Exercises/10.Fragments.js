function solve(input){
    let arr = input.split(" ").map(x=> x.toLowerCase())
     
    let junkMatirials = new Map()
    let mainMatirials = new Map()
    mainMatirials.set('shards',0)
    mainMatirials.set('fragments',0)
    mainMatirials.set('motes',0)
    let lastElement = ''
    for(let inp = 0; inp < arr.length; inp += 2){
            let value = +arr[inp]
            let matirial = arr[inp+1]      
        if (matirial === "shards" || matirial === "fragments" || matirial === "motes"){
            if(mainMatirials.has(matirial)){
                let existing = mainMatirials.get(matirial)
                value += existing
            }
            mainMatirials.set(matirial,value)
            if(matirial ==="shards" && mainMatirials.get(matirial) >= 250){
               let existing =  mainMatirials.get(matirial) 
               existing -= 250
                mainMatirials.set(matirial,existing)
                lastElement = "Shadowmourne"
                break;
            }
            if(matirial === "fragments" && mainMatirials.get(matirial) >= 250){
                let existing =  mainMatirials.get(matirial);
                existing -=250
                mainMatirials.set(matirial,existing)
                lastElement = "Valanyr"
                break;
            }
            if(matirial === "motes" && mainMatirials.get(matirial) >= 250){
                let existing =  mainMatirials.get(matirial) 
                existing -= 250
                mainMatirials.set(matirial,existing)
                lastElement = "Dragonwrath"
                break;
            }
        }else{
            if(junkMatirials.has(matirial)){
                let existing = junkMatirials.get(matirial)
                value += existing
            }
            junkMatirials.set(matirial,value)
        }

    }
    console.log(`${lastElement} obtained!`)
    let sorted = [...mainMatirials.entries()].sort((a,b) =>{
      return  b[1] - a[1] || a[0].localeCompare(b[0])
    })
    for(let [key,value] of sorted){
        console.log(`${key}: ${value}`)
    }
    let sorted2 = [...junkMatirials.entries()].sort((a,b) => a[0].localeCompare(b[0]))
    for(let [key,value] of sorted2){
         console.log(`${key}: ${value}`)   
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')