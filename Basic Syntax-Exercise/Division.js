function division(arg){
    if(arg % 10 == 0){
       console.log(`The number is divisible by 10`)
    }
    else if(arg % 7 == 0){
        console.log(`The number is divisible by 7`)
    }
    else if (arg % 6 == 0){
        console.log(`The number is divisible by 6`)
    }
    else if (arg % 3 == 0){
        console.log(`The number is divisible by 3`)
    }
    else if(arg % 2 == 0){
        console.log(`The number is divisible by 2`)
    }
    else
    {
        console.log(`Not divisible`)
    }
}