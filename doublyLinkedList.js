class DoublyLL{
    constructor(data){
        this.size = 0;
        this.head = null;
    }

    // FOR CREATING HEAD NODE
    prepend(data){
        if(!this.head){
            this.head = new Node(data, null, this.head);
            this.size++;
        }else{
            const newNode = new Node(data, null, this.head);
            this.head.prevNode = newNode;
            this.head = newNode;
            this.size++;
        }
    }


    // FOR CREATING TAIL NODE
    append(data){
        if(!this.head){
            this.prepend(data);
            return;
        }
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        
        let newNode = new Node(data , current, null);
        current.nextNode = newNode;
        this.size++;
    }


    // REMOVE A NODE FROM THE HEAD
    removeHead(){
        if(!this.head){
            console.log("LIST IS EMPTY");
            return;
        }
        let secondNode = this.head.nextNode;
        this.head.nextNode = null;
        secondNode.prevNode = null;
        this.head = secondNode;
        this.size--;
    }

    // REMOVE A NODE FROM THE TAIL
    removeTail(){
        if(!this.head){
            console.log("List is empty");
            return;
        }

        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }

        let secondLastNode = current.prevNode;
        current.prevNode = null;
        secondLastNode.nextNode = null;
        this.size--;
    }


    // INSERT AT PROVIDED INDEX
    insertAt(data, index){
        // FIRST CHECK ALL THE EDGE CASES FOR VALIDATING THE INDEX 
        if(!this.head || index == 0){
            this.prepend(data);
            return;
        }
        if(index < 0 || index > this.size){
            console.log("INVALID INDEX.");
            return;
        }
        if(index == this.size){
            this.append(data);
            return;
        }

        let count = 0;
        let current = this.head;

        // LOOP THROUGH THE LIST UNTILl WE REACH TO THE INDEX WE WANT TO INSERT THE NODE AT.
        while(count < index){
            current = current.nextNode;
            count++;
        }

        // SELECT THE PREVIOUS NODE BY ACCESSING THE CURRENT NODE'S PREVIOUS POINTER AND SAVE IT IN A VARIABLE
        let nodeBefore = current.prevNode;

        // CREATE A NEW NODE AND LINK IT'S PREVIOUS POINTER TO THE SELECTED PREVIOUS NODE AND AND THE NEXT POINTER TO CURRENT NODE
        let newNode = new Node(data,nodeBefore,current);

        // PREVIOUS POINTER'S NEXT AND CURRENT POINTER'S PREVIOUS, BOTH WILL BE THE NODE THAT IS NEWLY CREATED.
        nodeBefore.nextNode = newNode;
        current.prevNode = newNode;

        this.size++;
    }


    // REMOVE FROM THE GIVEN INDEX
    removeFrom(index){

        if(!this.head || index == 0){
            this.removeHead();
            return;
        }
        if(index < 0 || index > this.size){
            console.log("INVALID INDEX.");
            return;
        }
        if(index == this.size){
            this.removeTail();
            return;
        }

        let count = 0;
        let current = this.head;
        while(count < index){
            current = current.nextNode;
            count++;
        }

        let nodeBefore = current.prevNode;
        let nodeAfter = current.nextNode;
        current.nextNode = current.prevNode = null;

        nodeBefore.nextNode = nodeAfter;
        nodeAfter.prevNode = nodeBefore;

        this.size--;
    }

    // PRINT THE HEAD OF THE LINKED LIST
    getHead(){
        console.log(this.head);
    }

    // PRINT THE SIZE OF THE DOBLY LINKED LIST
    getSize(){
        console.log(this.size);
    }

    // CLEAR LIST 
    clearList(){
        this.head = null;
        this.size = 0;
        console.log("List Cleared");
    }


    // GET NODE AT INDEX
    getNodeAt(index){
        let count = 0;
        let current = this.head;
        while(count<index){
            current = current.nextNode;
            count++;
        }
        
        console.log(current.data);
    }

    // FOR PRINTING OUT THE LIST
    printList(){
        if(this.size == 0){
            console.log("List is empty");
            return;
        }
        let count = 0;
        while(count < this.size){
            console.log(this.head.data);
            this.head = this.head.nextNode;
            count++;
        }
    }
}

class Node{
    constructor(data, prevNode , nextNode){
        this.data = data;
        this.prevNode = prevNode;
        this.nextNode = nextNode;
    }
}


let dll = new DoublyLL();
dll.prepend("world");
dll.prepend("hello");
dll.append("Its awesome!");

// dll.removeHead();
// dll.removeTail();

dll.append("is beautiful");
// dll.printList();


dll.insertAt("hellow",2);
dll.removeFrom(2);

dll.getNodeAt(2);

