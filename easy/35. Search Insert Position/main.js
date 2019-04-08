/**
 * 
 * 二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}