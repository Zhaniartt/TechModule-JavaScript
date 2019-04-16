function solve(arr){
    let middlneNum = 'no';
    for(let i = 0; i < arr.length ; i++){
        let leftSum = 0;
        let rightSum = 0;
        
        for(let n = i - 1; n >= 0 ; n --){
            leftSum += arr[n];
        }
        for(let j = i + 1; j < arr.length; j++){
            rightSum += arr[j];
        }
        if(rightSum === leftSum){
            middlneNum = i;
            break;
        }
    }
    console.log(middlneNum)
}