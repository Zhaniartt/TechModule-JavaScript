function specialNums(num){
    let sum = 0;
    for(let i = 1;i <= num;i++){
        let currentNum = i;
        
       while(currentNum != 0){
           let lastDigit = parseInt(currentNum % 10);
           sum += lastDigit;
           currentNum = parseInt(currentNum/ 10);
        }
        if(sum == 5 || sum == 7 || sum == 11){
            console.log(`${i} -> True`)
        }
        else{
            console.log(`${i} -> False`)
        }
        sum = 0;
    }
}
specialNums(15)