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
var linearSearch = function (numbers, targetNumber) {
    for (var i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === targetNumber) {
            return i;
        }
    }
    return -1;
};
var numbers = [3, 9, 5, 1, 7, 8];
var targetNumber = 9;
var index = linearSearch(numbers, targetNumber);
index !== -1
    ? console.log("Element found at index ".concat(index))
    : console.log("Element not found");
