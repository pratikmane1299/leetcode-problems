/**
 * @title Min Stack
 * @description Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * @tags Stack, Design
 * @difficulty Medium
 */

class MinStack {
  stack = [];

  push(val) {
    this.stack.push(val);
    console.log("stack - ", stack);
  }

  pop() {
    this.stack.pop();
    console.log("stack - ", stack);
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return Math.min(...this.stack);
  }
}

const stack = new MinStack();

stack.push(1);
stack.push(2);
console.log(stack.top());
stack.push(-10);
console.log(stack.top());
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop();
stack.pop();
console.log(stack.top());
