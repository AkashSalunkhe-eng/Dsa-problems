//Source -- Leetcode

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// *******************************************************************************************************

//Two sum problem using hashing
//T-C O(n);
//S-C O(n);

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// The bruteforce approach to this problem is
// using two loops to find the matching pair

// The better approach than bruteforce is
// We need to sort the array
// And use two pointer approach to get the matching result pair

// Both the approach above can be of T-C of O(n^2) and S-C of O(1);

// The most convinent approach is this
// We can use hashing and store the differnce of two variables in hash map
// by using one loop only we can check if difference exists in hash map or not.

var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var value = nums[i];
    var ansPair = target - value;
    if (map[ansPair] !== undefined) {
      return [map[ansPair], i];
    } else {
      map[value] = i;
    }
  }
};
