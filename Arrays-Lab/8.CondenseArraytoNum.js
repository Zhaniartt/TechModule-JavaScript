function condense(nums) {
  let condensed = [];

  while (nums.length > 1){
    for(let i = 0; i < nums.length - 1; i++){
      condensed.push(nums[i] + nums[i + 1])
    }
    nums = condensed.slice();
    condensed = [];
  }
  console.log(condensed)
}
condense([2,10,3])
