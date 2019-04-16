function questJournal(arr){
    let theList = arr[0].split(", ")
    arr.shift()
    arr.pop();
    for(let ar of arr){
      let currentCommand = ar.split(" - ");
      let nameOfCommand = currentCommand[0];
      let quest = currentCommand[1]
       let index = theList.indexOf(quest);
      if(nameOfCommand === "Start" && index === -1){
         theList.push(quest)
      }else if(nameOfCommand === "Complete" && index !== -1 ){
         theList.splice(index,1)
      }else if(nameOfCommand === "Side Quest"){
        let temp = quest.split(":");
        let currentQuest = temp[0];
        let sideQuest = temp[1];
        let spliceIndex = theList.indexOf(currentQuest);
        let tempindex = theList.indexOf(sideQuest);
        if(tempindex === -1){
            theList.splice(spliceIndex+1,0,sideQuest)
        }
      }else if(nameOfCommand === "Renew" && index !== -1){
         let temporary = theList.splice(index,1);
         theList.push(temporary);
      }
    }
   console.log(theList.join(", "));
   
 }
 questJournal(["Hello World, If else",
   "Complete - Homework",
   "Side Quest - If else:Switch",
   "Renew - Hello World",
   "Retire!"])