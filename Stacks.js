class Stack{
    constructor(arr,size){
        this.arr = arr;
        this.size = size;
        this.top = -1;
    }

    // BASIC STACK METHODS 

    push(elem){
        if(this.isFull()){
            throw "Stack is full cant push anymore";
        }
        this.arr[++this.top] = elem;
    }
    
    pop(){
        if(this.isEmpty()){
            throw "Stack is empty nothing to pop out";
        }
        return this.arr[this.top--];
    }

    peek(){
        return this.arr[this.top]
    }
    
    
    
    // UTILITY METHODS 
    isFull(){
        if(this.top == this.size - 1){
            return true;
        }

        return false
    }

    isEmpty(){
        if(this.top == -1){
            return true;
        }
        return false
    }

    contains(elem){
        for(let i=0;i<this.arr.length; i++){
            if(elem == this.arr[i]){
                return true;
            }
        }

        return false;
    }

}


let s = new Stack([],4);
s.push(2);
s.push(12);
s.push(22);
s.push(32);
s.pop();
s.push(41);
console.log(s.peek())

console.log(s.contains(22))