function solve(arr1,arr2){
    let mainArr = arr1;
    let commands = arr2;
    for(let i = 0; i < commands.length;i++){
        let currentCommand = commands[i].split(" ").shift();
        if(currentCommand === "add"){
            let index = +commands[i].split(" ")[1];
            let element = +commands[i].split(" ")[2];
            mainArr.splice(index,0,element);
        }else if(currentCommand === "addMany"){
            let index = +commands[i].split(" ")[1];
            let final = commands[i].split(" ");
            for(let n = 2; n< final.length; n++){
                let currentNum = +final[n];
                mainArr.splice(index,0,currentNum);
                index++;
            }
        }else if(currentCommand === "contains"){
            let numToFind = +commands[i].split(" ")[1];
            let index = mainArr.indexOf(numToFind);
            console.log(index);
        }else if(currentCommand === "remove"){
           let index = +commands[i].split(" ")[1];
           mainArr.splice(index,1);
        }else if(currentCommand === "shift"){
            let position = +commands[i].split(" ")[1];
            for(let i = 1; i<= position;i++){
                let firstNum = mainArr.shift();
                mainArr.push(firstNum);
            }
        }else if(currentCommand === "sumPairs"){
            let currentArr = []
            for(let i = 0; i < mainArr.length-1;i++){
               let sum = 0;
               sum = +mainArr[i] + +mainArr[i+1];
                currentArr.push(sum)
                i++;
            }
            if(mainArr.length % 2 !== 0){
              currentArr.push(mainArr[mainArr.length-1])
  
            }
            mainArr = currentArr;
        }
    }
     console.log(mainArr);
  }