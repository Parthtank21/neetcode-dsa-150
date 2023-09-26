class Stack {
  constructor() {
    this.stack = [];
  }

  push(ele) {
    return this.stack.push(ele);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty, Can't perform pop";
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty, Can't perform peek";
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(51);
stack.push(44);
stack.pop();

console.log(stack.isEmpty());
