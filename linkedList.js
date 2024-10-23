class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  getSize() {
    return `The list have ${this.size} elements`;
  }

  getHead() {
    return this.head ? `First value: ${this.head.value}` : null;
  }

  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return `Last value: ${current.value}`;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.nextNode;
      count++;
    }

    return `Index ${index}: ${current.value}`;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (!this.head.nextNode) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.nextNode && current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }

    this.size--;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return `Value ${value} is at index ${index}`;
      }
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let current = this.head;
    const result = [];

    while (current) {
      result.push(`(${current.value})`);
      current = current.nextNode;
    }

    result.push(`null`);
    return result.join(" -> ");
  }
}

module.exports = LinkedList;
