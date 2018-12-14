5. Zmień poprzednie funkcję tak aby przyjmowały dowolną ilość argumentów a nie tablicę

const max = function() {
    if (arguments.length === 0) return 0
  
    return Math.max(...arguments)
  }
  
  if(max(1, 2, 3, 4) !== 4 ) throw Error('Max not works!')
  if(max(-1 , 1, -3) !== 1 ) throw Error('Max not works!')
  if(max() !== 0 ) throw Error('Max not works!')
  