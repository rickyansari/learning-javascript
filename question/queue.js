a = [1, 2, 3, 4, 5, 6];

class queue {
  constructor(initialData = []) {
    this.queue = initialData;
  }

  enqueue(x) {
    this.queue[this.queue.length] = x;
    return { success: true };
  }

  dequeue() {
    if (this.queue.length) {
      const [firstElement, ...restOfArray] = this.queue;
      this.queue = restOfArray;
      return firstElement;
    }
  }
}

// let newQueue = new queue(a);
// console.log(newQueue.queue);
// console.log(newQueue.enqueue(11));
// console.log(newQueue.dequeue());

let newQueue2 = new queue();
console.log(newQueue2.queue);
console.log(newQueue2.enqueue(11));
console.log(newQueue2.enqueue(12));

console.log(newQueue2.enqueue(13));
console.log(newQueue2.queue);

console.log(newQueue2.dequeue());
console.log(newQueue2.queue);
