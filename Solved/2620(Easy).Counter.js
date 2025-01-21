// https://leetcode.com/problems/counter/submissions/1515808887

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n

  return function () {
    console.log(count++)
    // return ++this.counter
  };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
