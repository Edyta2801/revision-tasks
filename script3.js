//3. Napisz funkcję która zwraca najmniejszą z przekazanych do niej liczb jako tablicy.

const min = arr => {
    if (arr.length === 0) return 0
     return Math.min(...arr)
  }
   if(min([1, 2, 3, 4]) !== 1 ) throw Error('Min not works!')
  if(min([-1 , 1, -3]) !== -3 ) throw Error('Min not works!')
  if(min([]) !== 0 ) throw Error('Min not works!') 


  IIsposób
  const min = arr => {
    if (arr.length === 0) return 0
  
    return Math.min.apply(null, arr)
  }
  
  if(min([1, 2, 3, 4]) !== 1 ) throw Error('Min not works!')
  if(min([-1 , 1, -3]) !== -3 ) throw Error('Min not works!')
  if(min([]) !== 0 ) throw Error('Min not works!')
  