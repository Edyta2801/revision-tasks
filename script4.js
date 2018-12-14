Napisz funkcję która zwraca największą z przekazanych do niej liczb jako tablicy.

if(min([]) !== 0 ) throw Error('Min not works!')
 const max = arr => {
  if (arr.length === 0) return 0
   return Math.max(...arr)
}
 if(max([1, 2, 3, 4]) !== 4 ) throw Error('Max not works!')
if(max([-1 , 1, -3]) !== 1 ) throw Error('Max not works!')
if(max([]) !== 0 ) throw Error('Max not works!')