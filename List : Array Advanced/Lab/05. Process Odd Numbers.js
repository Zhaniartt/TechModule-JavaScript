function solve(arr){
    let oddNumbers = arr.filter(e => arr.indexOf(e) % 2 != 0);
    let doubledNumbers = oddNumbers.map(e => e * 2);    
    doubledNumbers.reverse();
    console.log(doubledNumbers.join(" "));
    
}