/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 *
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (57.14%)
 * Total Accepted:    311K
 * Total Submissions: 540.6K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * Invert a binary tree.
 *
 * Example:
 *
 * Input:
 *
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 *
 * Output:
 *
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 *
 * Trivia:
 * This problem was inspired by this original tweet by Max Howell:
 *
 * Google: 90% of our engineers use the software you wrote (Homebrew), but you
 * can’t invert a binary tree on a whiteboard so f*** off.
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  // 递归
  //   const left = root.left;
  //   const right = root.right;
  //   root.right = invertTree(left);
  //   root.left = invertTree(right);
  // 我们用stack来模拟递归
  // 本质上递归是利用了执行栈，执行栈也是一种栈
  // 其实这里使用队列也是一样的，因为这里顺序不重要

  const stack = [root];
  let current = null;
  while ((current = stack.shift())) {
    const left = current.left;
    const right = current.right;
    current.right = left;
    current.left = right;
    if (left) {
      stack.push(left);
    }
    if (right) {
      stack.push(right);
    }
  }
  return root;
};
