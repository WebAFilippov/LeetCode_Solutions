// https://leetcode.com/problems/circular-sentence

/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const arrString = sentence.split(' ')


  if (!(arrString.at(0).at(0) === arrString.at(-1).at(-1))) return false

  for (let i = 0; i < arrString.length - 1; i++) {
    if (!check(arrString.at(i), arrString.at(i + 1))) return false
  }

  return true
};

const check = (str1, str2) => {
  return str1.at(-1) === str2.at(0)
}

console.log(isCircularSentence('leetcode exercises sound delightful'))