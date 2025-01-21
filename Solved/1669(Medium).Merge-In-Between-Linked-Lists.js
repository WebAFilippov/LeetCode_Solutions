// https://leetcode.com/problems/merge-in-between-linked-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let arrList1 = readListNode([], list1)
  let arrList2 = readListNode([], list2)

  let newArray = [...arrList1.slice(0, a), ...arrList2, ...arrList1.slice(b + 1)]

  let newListNode = createListNode(newArray)

  return newListNode
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const readListNode = (arr, list) => {
  arr.push(list.val)
  if (list.next === null) return
  readListNode(arr, list.next)
  return arr
}

const createListNode = (arr) => {
  if (arr.length === 0) return
  return new ListNode(arr.shift(), createListNode(arr))
}

const list1 = createListNode([10, 1, 13, 6, 9, 5])
const list2 = createListNode([1000000, 1000001, 1000002])

mergeInBetween(list1, 3, 4, list2)