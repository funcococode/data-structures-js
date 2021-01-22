let classes = require("./LinkedList")

class Stack extends classes.LinkedList{
     add(data){
        this.insertAtHead(data);
    }

    remove(){
        this.removeFrom(0);
    }

    showStack(){
       this.printListData();
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.showStack();

console.log("after removing");
stack.remove();
stack.showStack();