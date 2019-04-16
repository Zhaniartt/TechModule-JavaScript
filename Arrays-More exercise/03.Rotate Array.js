function rotateArray(arr){
    let rotation = arr[arr.length - 1];
     arr.pop();
    for(let i = 0;i < rotation ;i ++){
      let lastElement = arr.pop();
      arr.splice(0,0,lastElement);
    }
    console.log(arr.join(" "));
    
  }