function solve(arr){
        let theList = arr.shift().split(" ").map(Number)
arr.pop()
for(let i = 0; i < arr.length; i++){
    let currentLine = arr[i].split(" ");
    let command = currentLine[0];
    let value = +currentLine[1];
    let index = theList.indexOf(value);
    if(command === "Change" && index !== -1){
        let changingNum = +currentLine[2];
        theList[index] = changingNum;

    }
    else if(command === "Hide" && index !== -1){
        theList.splice(index,1)
    }else if(command === "Insert" && value >=0 && value < theList.length){
        let thePaintingNum = +currentLine[2]
        theList.splice(value+1,0,thePaintingNum);
    }else if(command === "Switch"){
        let switchingNum = +currentLine[2]
        let index2 = theList.indexOf(switchingNum);
        if(index !== -1 && index2 !== -1){
            let temp = theList[index];
            theList[index] = theList[index2];
            theList[index2] = temp;

        }
    }else if(command === "Reverse"){
        theList = theList.reverse();
    }
}
 console.log(theList.join(" "))
        
}
solve(["77 120 115 101 101 97 78 88 112 111 108 101 111 110",
    "Insert 5 32",
    "Switch 97 78",
    "Hide 88",
    "Change 120 117",
    "END"])