'use strict'

const fibonacci = (sequence = [0, 1]) => {
    
    const index = sequence.length;
    sequence.push(sequence[index - 1] + sequence[index - 2]);
  
    if (sequence[index] <= 350) {
      fibonacci(sequence);
    }
  
    return sequence;

}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
