function centuries(arg){
    let years = arg * 100;
    let days = parseInt(years * 365.2422);
    let hours = parseInt(days * 24);
    let min = parseInt(hours * 60);
    console.log(`${arg} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`)
}
centuries(5)