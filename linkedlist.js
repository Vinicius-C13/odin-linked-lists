const Node = (value, link = null) => {
    return {
        value,
        link,
        changeValue(newValue) {
            this.value = newValue;
        }
    }
}

const LinkedList = () => {
    return {
        head: null,
        length: 0,
        
        //Add as first node 
        prepend(value) {
            this.head = Node(value, this.head);
            this.length++
        },

        //Add as last node
        append(value) {
            let currentNode = this.head;

            if(!currentNode) this.prepend(value)
            else {
                for(let i=0; i<this.length; i++) {
                    if(!currentNode.link) {
                        currentNode.link = Node(value)
                        this.length++
                    } 
                    else currentNode = currentNode.link;
                }
            }
        },

        //Prints the list length
        size() {return this.length},

        //Prints first node of the list
        returnHead() {return this.head},

        //Prints the last node of the list
        returnTail() {
            currentNode = this.head;

            if(currentNode === null) return this.head;

            while(currentNode) {
                if(!currentNode.link) return currentNode.value;
                else currentNode = currentNode.link
            }
        },

        //at - return a node by index
        at(index) {
            let currentNode = this.head;

            for(let i=0; i<this.length; i++) {
                if(index === i) return currentNode;
                else currentNode = currentNode.link;
            }
            return "this node doesn't exist"
        },

        //pop - remove the last node
        pop() {
            let currentNode = this.head;

            if(!currentNode || currentNode.link === null) return this.head = null;

            for(let i=0; i<this.length; i++) {
                if(!currentNode.link.link) {
                    currentNode.link = null
                    this.length--
                    return
                }
                else currentNode = currentNode.link
            }
        },

        //contains - return true if some value exists in the list and false if not
        contains(value) {
            currentNode = this.head;

            while(currentNode) {
                if(currentNode.value === value) return true;
                else currentNode = currentNode.link;
            }
            return false
        },

        //find - return the index of the node containing the value, or null if not found
        find(value) {
            currentNode = this.head;

            for(let i=0; i<this.length; i++) {
                if(currentNode.value === value) return i;
                else currentNode = currentNode.link;
            }
            return null
        },

        //to String - print the linked list as a string
        printList() {
            let currentNode = this.head;

            if(currentNode === null) console.log(this.head)

            while(currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.link;
            }
        },

        //Insert at a specific index
        insertAt(value, index) {
            if(index === 0) this.prepend(value);
            else if(index >= this.length) this.append(value);
            else {
                currentNode = this.head;
                for(let i=0; i<this.length; i++) {
                    if(i === index -1) {
                        currentNode.link = Node(value, this.at(index));
                        this.length++;
                        return
                    }
                    else currentNode = currentNode.link
                }
            }
        },

        //Delete at a specific index
        removeAt(index) {
            if(index === 0) {
                this.head = this.head.link;
                this.length--;
            }
            else if(index === this.length-1) return this.pop(index);
            else {
                this.at(index-1).link = this.at(index).link;
                this.length--
            }
        }
    }
}

const ll = LinkedList();

ll.append(200);
ll.append(300);
ll.prepend(100);
ll.printList();


