function solve(arr){
    arr = arr.map(Number);
   let daysOfadventure = arr.shift();
   let countOfPlayers = arr.shift();
   let groupEnergy = arr.shift();
   let waterperPerson = arr.shift();
   let foodperPerson = arr.shift();
 
   let water = daysOfadventure * countOfPlayers * waterperPerson;
   let food = daysOfadventure * countOfPlayers * foodperPerson;
   for(let i = 1; i < arr.length +1;i++){
      
      let currentWood = arr[i-1]
      groupEnergy -= currentWood;
      
       if(groupEnergy <= 0){
          break;
       }
       if(i % 2 === 0){
          groupEnergy += groupEnergy * 0.05;
          water -= water * 0.3;
       }
        if(i % 3 === 0){
          groupEnergy += groupEnergy * 0.1;
          food -= food/countOfPlayers;
  
       }
      
   }
 
 if(groupEnergy > 0){
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)

 }else{
     console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`)
 }
   
 
 }
 solve(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])