//2. Napisz funkcję która liczy medianę przekazanych do niej liczb jako tablicy.

const median = arr => {
    const length = arr.length
    const sorted = arr.sort()
  
    if (length === 0) return 0
  
    if (length % 2 !== 0) {
      return sorted[Math.floor(length / 2)]
    } else {
      return (sorted[length / 2 - 1] + sorted[length / 2]) / 2
    }
  }
  
  if (median([1, 2, 3, 4]) !== 2.5) throw Error('Median not works!')
  if (median([1, 2, 4, 3]) !== 2.5) throw Error('Median not works!')
  if (median([1, 2, 3]) !== 2) throw Error('Median not works!')
  if (median([]) !== 0) throw Error('Median not works!')
  