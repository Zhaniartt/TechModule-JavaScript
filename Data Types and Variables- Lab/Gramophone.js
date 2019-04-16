function gramophone(bandName,albumName,songName){
   let sum = ((albumName.length * bandName.length) * songName.length )/ 2;
   let output = sum / 2.5;
   console.log(`The plate was rotated ${Math.ceil(output)} times.`)
}
gramophone("Black Sabbath","Paranoid","War Pigs")