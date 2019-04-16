function searchOfNum(arr1,arr2){
    let numToTake = arr2[0];
    let numToDelete = arr2[1];
    let numToSearch = arr2[2];
    let newArr = arr1.slice(0,numToTake);
    newArr.splice(0,numToDelete);
    let counter = 0;
    for(let i = 0; i< newArr.toString().length;i++){
        if(numToSearch === newArr[i]){
            counter++;
        }
    }
    console.log(`Number ${numToSearch} occurs ${counter} time.`)
    
 }