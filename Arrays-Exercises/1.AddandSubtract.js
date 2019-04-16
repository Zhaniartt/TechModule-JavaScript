function addOrSubstract(arr){
    let newArr = [];
    let originalSum = 0;
    let modifiedSum = 0;
    for(let num of arr){
        originalSum += Number(num)
    }
    for(let i = 0; i < arr.length ; i++){
        if(Number(arr[i]) % 2 == 0){
            newArr.push(Number(arr[i] + i))
        }
        else {
            newArr.push(Number(arr[i] - i))
        }
    }
    for(num of newArr){
        modifiedSum += Number(num)
    }
    console.log(`[ ${newArr.join(", ")} ]`);
    console.log(originalSum);
    console.log(modifiedSum);
 }