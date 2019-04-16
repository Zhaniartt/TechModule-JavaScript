function printTseamAccount(params) {
    let account = params.shift().split(' ');
    params.pop();
    for (let param of params) {
        let tokens = param.split(' ');
        let command = tokens[0];
        let game = tokens[1].split('-')[0];
        let index = account.indexOf(game);
  
        if (command === 'Install' && index === -1) {
            account.push(game);
        } else if (command === 'Uninstall' && index !== -1) {
            account.splice(index, 1);
        } else if (command === 'Update' && index !== -1) {
            account.push(account.splice(index, 1));
        } else if (command === 'Expansion' && index !== -1) {
            let expansion = tokens[1].replace('-', ':');
            account.splice(index + 1, 0, expansion);
        }
    }
    console.log(account.join(' '));
  }




  function teamaccount(arr){
    let peshoSgame= arr[0].split(" ");
    let counter = 1;

    while(true){

      let command = arr[counter].split(" ");
      let currentCommand = command[0];
      let searchingItem = command[1];
      if(currentCommand == "Play!"){
        break;
      }
      if(currentCommand == "Install" && !peshoSgame.includes(searchingItem)){
        peshoSgame.push(String(searchingItem));
       
      }

      if(currentCommand == "Uninstall"){
        for(let i = peshoSgame.length-1; i >= 0 ; i--){
          if(peshoSgame[i] === searchingItem){
            peshoSgame.splice(i,1);
          }
      }
      

    }
    if(currentCommand == "Update"){
      for(let i = peshoSgame.length-1; i >= 0; i--){
        if(peshoSgame[i]=== searchingItem){
          let findItem = peshoSgame.splice(i,1);
          peshoSgame.push(String(findItem));
        }
      }
    }
    if(currentCommand == "Expansion"){
      let onlyForExpansion = "-";
      let currentGame = ""
      let currentExtantion = ""
      let limit = 0;
      for(let i = 0 ; i < searchingItem.length-1 ; i++){
        if(searchingItem[i] === onlyForExpansion){
           limit = i;
          break;
        }
        currentGame+=String(searchingItem[i]);
}

    for(let n = limit+1; n < searchingItem.length ;n++){
        if(searchingItem[n] === onlyForExpansion){
            break;
        }
        currentExtantion+=String(searchingItem[n]);

    }
    let output = String(currentGame)+":"+String(currentExtantion);
    for(let i = peshoSgame.length-1; i >= 0; i--){
      if(peshoSgame[i]=== currentGame){
        let findItem = peshoSgame.splice(i+1,0,output);
      }
    }
  
    
}
counter++;

}
console.log(peshoSgame.join(" "));

}