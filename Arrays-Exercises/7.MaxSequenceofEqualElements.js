function solve(arr){
   
    let nums = arr[0].split(' ');
    let bestsequence = []
    for(let i = 0; i < nums.length; i++){
      let topsequence = [];
        for(let j = i; j < nums.length ; j++){
            if(nums[i] === nums[j])  {
                topsequence.push(nums[i]);
            }else{
                break;
            }   
        }
        if(bestsequence.length < topsequence.length){
            bestsequence = topsequence;
        }
    }
    console.log(bestsequence.join(" "))

}