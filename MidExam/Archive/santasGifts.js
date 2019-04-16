function solve(arr){
    let numberOfCommands = arr.shift();
    let santaList = arr.shift().split(" ").map(Number);
    let santaIndex = 0;
    for(let i = 0; i < arr.length; i++){
       let currentLine = arr[i].split(" ");
       let command = currentLine[0];
       let value = +currentLine[1];
 
       if(command === "Forward"){
          if(santaIndex + value < santaList.length){
             santaIndex += value;
             santaList.splice(santaIndex,1)
          }
       }else if(command === "Back"){
          if(santaIndex - value >= 0){
             santaIndex -= value;
            santaList.splice(santaIndex,1)
          }
       }else if(command === "Gift"){
          let newHouse = +currentLine[2];
          if(value >= 0 && value < santaList.length){
             
            santaList.splice(value,0,newHouse)
            santaIndex = value;
          }
       }else if (command === "Swap"){
          let swapPosition = +currentLine[2];
          let index1 = santaList.indexOf(value);
          let index2 = santaList.indexOf(swapPosition);
          if(index1 !== -1 && index2 !== -1){
             let temp = santaList[index1];
             santaList[index1] = santaList[index2];
             santaList[index2] = temp;
          }
       }
 
 
    }
    console.log(`Position: ${santaIndex}`)
    console.log(santaList.join(", "))
 
 }
 solve(["6",
    "50 40 25 63 78 54 66 77 24 87",
    "Forward 4",
    "Back 3",
    "Forward 3",
    "Gift 2 88",
    "Swap 50 87",
    "Forward 1"])