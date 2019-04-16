function solve(arr , rot){
    let newarr = [];
     for(let i = 1; i<= rot;i++){
      newarr = arr.shift();
      arr.push(newarr);
     }
     console.log(arr.join(" "))
  }