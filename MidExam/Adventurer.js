function adventurer(params){
    let account = [params].toString();
    let steps = account.split('|');
    let health = 100;
    let coins = 0;
     let roomCount = 0;
    for(let i = 0; i < steps.length;i++){
      let currentStep = steps[i].split(" ");
      let command = currentStep[0];
      let value = currentStep[1];
      if(command === "potion"){
           health +=  +value;
           if(health >= 100){
             let temp = health - 100;
             console.log(`You healed for ${value-temp} hp.`);
             health = 100;
 
             console.log(`Current health : ${health} hp.`);
 
             continue;
           }
           console.log(`You healed for ${value} hp.`);
           console.log(`Current health : ${health} hp.`)
           roomCount++;
 
           
      }
      if(command === "chest"){
           coins += +value;
           console.log(`You found ${value} coins.`)
           roomCount++
      }else if(command !== "potion" && command !== "chest"){
        health -= +value;
        roomCount++;
 
        if(health  >0){
          console.log(`You slayed ${command}.`)
        }else{
          console.log(`You died! Killed by ${command}.`)
          console.log(`Best room: ${roomCount}`)
          return;
        }
      }
 
 
    }
    
     console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
 
 }