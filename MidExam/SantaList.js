function santaList(santalist){
    let list = santalist[0].toString().split("&");
     santalist.shift();
     let counter = 0;
   while(true){
     let currentParam = santalist[counter].split(" ").filter(x=>x!=='');;
     let command = currentParam[0];
     if(command === "Finished!"){
       break;
     }
     let nameOfKid = currentParam[1];
     let index = list.indexOf(nameOfKid);
       
     if(command === "Bad" && index === -1){
        list.splice(0,0,nameOfKid)
     }
     else if(command === "Good" && index !== -1){
        list.splice(index,1) 
     }
     else if(command === "Rename" && index !== -1){
        let newName = currentParam[2];
        list.splice(index,1,newName)
     }
     else if(command === "Rearrange" && index !== -1){
       let temp = list.splice(index,1);
       list.push(temp);
     }
     counter++;
   }
   console.log(list.join(" "))
}
santaList(["Joshua&Aaron&Walt&Dustin&William",
 "Good Walt",
 "Bad Jon ",
 "Rename Aaron Paul",
 "Rearrange Jon",
" Rename Peter George",
" Finished!"])