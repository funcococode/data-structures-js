class Queue{
    constructor(size){
        this.arr = [];
        this.size = size;
        this.head = 0;
        this.tail = -1;
    }

    add(elem){
        this.arr[++this.tail] = elem; 
    }

    remove(){
        let returnValue = this.arr.shift();
        return returnValue;
    }

    peek(){
        return this.arr[this.head];
    }

    showAll(){
        this.arr.forEach(elem => console.log(elem));
    }
}


let q = new Queue();
q.add(2);
q.add(5);
q.add(15);
q.remove();

q.add(20);
q.add(122);
q.remove();
console.log("The head is : ", q.peek());
console.log(q.showAll());