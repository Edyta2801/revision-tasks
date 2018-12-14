// Napisz funkcję która liczy średnią arytmetyczną przekazanych do niej liczb jako tablicy.

const average = arr => arr.reduce(
    (r, e, i, arr) => r + (e / arr.length),
    0
  )
  
  if (average([]) !== 0) throw Error('Average not works!')
  if (average([1, 2, 3, 4]) !== 2.5) throw Error('Average not works!')
  