function fuelMoney(distance,passengets,literprice){
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengets * 0.100;
    let output = neededFuel * literprice;
    console.log(`Needed money for that trip is ${output}lv.`)

}
fuelMoney(260,9,2.49)