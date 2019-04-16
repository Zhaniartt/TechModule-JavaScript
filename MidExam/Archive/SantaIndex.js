function solve(arr){
    let numberOfCommands = +arr.shift()
    let theListOfHouses = arr[0].split(" ").map(Number);
    arr.shift()
    let santaPosition = 0;
    for(let i = 0; i < arr.length; i++){
      
       let currentLine = arr[i].split(" ");
       let command = currentLine[0]
       let value = +currentLine[1]
       let swapOrGiftValue = +currentLine[2];
       
       if(command === "Forward" && (santaPosition+value) <= theListOfHouses.length){
          
         santaPosition = santaPosition + value;
         theListOfHouses.splice(santaPosition,1)
          
       }
       else if(command === "Back" && !(santaPosition - value < 0)){
          santaPosition = santaPosition - value;
          theListOfHouses.splice(santaPosition,1)
       }
       else if(command === "Swap"){
        let index1 = theListOfHouses.indexOf(value);
        let index2 = theListOfHouses.indexOf(swapOrGiftValue);
           if(index1 !== -1 && index2 !== -1){
              let temp = theListOfHouses[index1];
              theListOfHouses[index1] = theListOfHouses[index2]
              theListOfHouses[index2] = temp
           }
       }
       else if(command === "Gift"){
          if(value >= 0 && value < theListOfHouses.length){
           theListOfHouses.splice(value,0,swapOrGiftValue)
           santaPosition = value
          }
         
       }
  
    }
    console.log(`Position: ${santaPosition}\n${theListOfHouses.join(", ")}`)
  }
  solve([ '6',
  '50 40 25 63 78 54 66 77 24 87',
  'Forward 4',
  'Back 3',
  'Forward 3',
  'Gift 2 88',
  'Swap 50 87',
  'Forward 1' ])