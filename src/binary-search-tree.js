const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

function addNode(node, data) {
  if (!node) return new Node(data);

  if (data < node.data) {
    node.left = addNode(node.left, data);
  } else if (data > node.data) {
    node.right = addNode(node.right, data);
  }

  return node;
}

function findNode(node, data) {
  if (!node) return null;

  if (data === node.data) return node;
  if (data < node.data) return findNode(node.left, data);
  return findNode(node.right, data);
}

function removeNode(node, data) {
  if (!node) return null;

  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else if (data > node.data) {
    node.right = removeNode(node.right, data);
    return node;
  } else {
    if (!node.left && !node.right) return null;
    if (!node.left) return node.right;
    if (!node.right) return node.left;

    let minRight = node.right;
    while (minRight.left) {
      minRight = minRight.left;
    }

    node.data = minRight.data;
    node.right = removeNode(node.right, minRight.data);
    return node;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addNode(this.tree, data);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return findNode(this.tree, data);
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);
  }

  min() {
    if (!this.tree) return null;
    let node = this.tree;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    if (!this.tree) return null;
    let node = this.tree;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};