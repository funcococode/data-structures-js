/* 
    TO CREATE A LINKED LIST WE NEED TO CREATE TWO SEPARATE CLASSES.
    ONE FOR ALL THE INDIVISUAL NODES.
    SECOND FOR THE LINKED LIST IT SELF.

    CLASSES - 
        1. NODES
        2. LINKED LIST 


    NODES CLASS WILL CONTAIN data AND next ATTRIBUTES. next ATTRIBUTE WILL BE SET EQUALS TO NULL BY DEFAULT.


    THE LINKED LIST CLASS WILL CONTAIN CONSTRUCTOR THAT WILL INITIALIZE THE HEAD AND THE SIZE OF THE LINKED LIST.

    LINKED LIST CLASS WILL CONTAIN METHODS SUCH AS : 
        1. insertAtHead  ----> DONE
        2. insertAtTail  ----> DONE
        3. insertAtIndex ----> DONE
            a. check wether the given index is out of the size of the linked list
            b. check wether the given index is 0. if yes use insertAtHead method.
            c. check wether the given index is last. if yes use insertAtTail method.
            d. if the given index is in between 0 and the last node then,
                
                I. create a new node
                II. traverse till the index to get the node JUST before that index.
                III. make newly created node point towards the nodeBefore.next value.
                IV. make nodeBefore.next = node

        4. removeFromIndex  ----> DONE
        5. printListData  ----> DONE
        6. showListSize  ----> DONE
        7. getAnIndex  ----> DONE
        8. clearList ----> DONE

*/


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    // INSERTING THE FIRST NODE 
    insertAtHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    // INSERTING A NODE AT THE TAIL OF THE LINKED LIST
    insertAtTail(data) {
        const node = new Node(data);
        let current;

        if (!this.head) {
            this.insertAtHead(node);
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

    // INSERT A NODE AT THE GIVEN INDEX 
    insertAt(data, index) {
        if (index > this.size) {
            return;
        } else if (index == 0) {
            this.insertAtHead(data);
            this.size++;
            return;
        } else if (index == this.size) {
            this.insertAtTail(data);
            this.size++;
            return;
        } else {
            const node = new Node(data);
            let nodeBefore = this.head;
            let count = 1;
            while (count < index) {
                nodeBefore = nodeBefore.next;
                count++;
            }

            node.next = nodeBefore.next;
            nodeBefore.next = node;
            this.size++;
        }

    }

    // REMOVE ELEMENT AT INDEX
    removeFrom(index){
        if(!this.head || index < 0 || index > this.size){
            console.log("wrong");
        }else{
            let count = 1;
            let current = this.head;
            let before;
            while(count < index){
                before = current;
                current = current.next;
                count++;
            }
            before.next = current.next;
            current.next = null;
            this.size--;
        }

    }



    // CLEAR WHOLE LIST

    clearList(){
        this.head = null;
        this.size = 0;
    }

    // GET THE VALUE OF NODE AT THE GIVEN INDEX
    getIndexValue(index) {
        if (!this.head || (index > this.size) || (this.size == 0)) {
            console.log("INVALID INDEX");
            return;
        }else {
            let current = this.head;
            let count = 1;
            while (count <= index) {
                if(current.next){
                    current = current.next;
                }
                count++;
            }

            console.log(current.data);
            return current.data;
        }

    }

    // GET THE SIZE OF THE LINKED LIST
    getSize() {
        console.log(this.size);
        return this.size;
    }

    // PRINTING THE LINKED LIST 
    printListData() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let list = new LinkedList();
list.insertAtHead("Hello");  //2
list.insertAtTail("World"); //4
list.insertAtHead("Fuck Yeah!"); //1
list.insertAtTail("It's running!"); //5
list.insertAt("Beautiful", 2); //3

list.removeFrom(4);
list.printListData();

// list.getSize();
// list.getIndexValue(2);

