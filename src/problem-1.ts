// solution to problem 1

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr , 0)
}

// console.log(sumArray([1, 2, 3, 4, 5]))
