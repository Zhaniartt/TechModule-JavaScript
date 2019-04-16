function solve(input){
    let palindromesArr = []
  input.forEach((element)=>{
      let textArr = element.split(" ").join('');
      let reversedText = textArr.split('').reverse().join('');

      if(textArr === reversedText){
          palindromesArr.push(textArr);
      }
  });
  if(palindromesArr.length <= 0){
      console.log(`No palindromes found`)
  }else{
      console.log(palindromesArr.join(", "))
  }

}
solve([' stella won no wallets',
'not a palindrome'])