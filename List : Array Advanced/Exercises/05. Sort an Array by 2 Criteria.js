function sorting(arr){
    let finalList = arr.sort(function(a, b) {
      return a.length - b.length || a.localeCompare(b);
    });  
    console.log(finalList.join("\n"));
    
  }