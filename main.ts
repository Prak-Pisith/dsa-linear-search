/* 
  Linear Search Algorithm
  Iterate through a collection one element at a time
  Run time complexity: O(n)
  Disadvantages:
    - Slow for large data
  Advantages:
    - Fast for search small and medium data sets
    - No need to sort
    - Useful for data structures that don't have random access (Linked List)
 */

const linearSearch = (numbers: number[], targetNumber: number): number => {

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === targetNumber) {
      return i; // Return the index where the target is found
    }
  }

  return -1; // Return -1 if the target is not found
}

const numbers: number[] = [3,9,5,1,7,8];
const targetNumber: number = 9;

const index: number = linearSearch(numbers, targetNumber);
index !== -1 
  ? console.log(`Element found at index ${index}`)
  : console.log(`Element not found`);
