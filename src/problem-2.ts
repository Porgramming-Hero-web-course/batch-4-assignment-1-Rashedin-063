// problem 2

function removeDuplicates(numbers: number[]): number[] { 
  return [...new Set(numbers)]
}