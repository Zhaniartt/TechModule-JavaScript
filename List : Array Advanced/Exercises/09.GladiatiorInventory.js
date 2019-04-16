function solve(arr){
    let peshoInventory = arr.shift().split(' ');
      for(let param of arr){
        let currentElement = param.split(" ");
       let command = currentElement[0];
       let equipment = currentElement[1];
       if(command == "Upgrade"){
        equipment = currentElement[1].split("-")[0];

       }

        let index = peshoInventory.indexOf(equipment);

       if(command === "Buy" && index === -1){
          peshoInventory.push(equipment);
       }else if(command === "Trash" && index !== -1){
          peshoInventory.splice(index,1)
       }else if(command === "Repair" && index !== -1){
           let forRepair = peshoInventory.splice(index,1);
           peshoInventory.push(forRepair);
       }else if(command === "Upgrade" && index !== -1){
           let expansion = currentElement[1].replace('-',':');
           peshoInventory.splice(index + 1,0,expansion)
       }
    }
console.log(peshoInventory.join(" "))
} 