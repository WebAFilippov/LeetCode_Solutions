// https://leetcode.com/problems/sleep/submissions/1515822029

/**
 * @param {number} millis
 * @return {Promise}
 */

let t = Date.now()

async function sleep(millis) {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res(millis)
      }, millis)
    } catch (error) {
      rej(error)
    }
  })
}

sleep(100).then(() => console.log(Date.now() - t)) // 100

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

    
