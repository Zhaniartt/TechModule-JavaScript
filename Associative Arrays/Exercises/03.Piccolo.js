function piccolo(arr) {
    let cars = [];
 
    for (let carDetails of arr) {
       let [direction, number] = carDetails.split(', ');
       if (direction === 'IN') {
           if(!cars.includes(number)){
            cars.push(number);
           }
           
       } else if (direction === 'OUT') {
           if (cars.includes(number)) {
            let index = cars.indexOf(number);
            cars.splice(index, 1);
           }
       }
    }
 
    if (cars.length > 0) {
        let sorted = cars.sort((a, b) => a.localeCompare(b));
        for (let carNum of sorted) {
            console.log(carNum);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
   
}


function parkingLot(params){
    let parkingData = {};

    for(let param of params){
        let [position,carNumber] = param.split(", ")
        parkingData[carNumber] = position;

    }
    let sorted = Object.entries(parkingData)
        .filter(n=>n[1] === 'IN')
        .map(n=> n[0])
        .sort((a,b) => a.localeCompare(b))
}