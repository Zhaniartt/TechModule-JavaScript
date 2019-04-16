function solve(params) {
    let sequence = [params.shift()];
  console.log(sequence)
    for (let number of params) {
        if (number >= sequence[sequence.length - 1]) {
            sequence.push(number);
        }
    }
    console.log(sequence.join(' '))
  }
  solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])