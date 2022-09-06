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
                    if(!currentNode.link) currentNode.link = Node(value); 
                    else currentNode = currentNode.link;
                }
            }
        },

        //Print Linked List
        printList() {
            let currentNode = this.head;

            while(currentNode !== null) {
                console.log(currentNode);
                currentNode = currentNode.link;
            }
        }

        /*Ideia sobre como fazer as funções que usam o index para retirar e adicionar nodes:
            Usar algo como o for loop para andar pelos nodes e parar quando encontrar o node correspondente ao
            index desejado. Por exemplo, desejo excluir o node 2 em uma linked list com length = 5,
            para isso eu uso um for loop que vai adicionando 1 ao i (i++) até que ele seja igual o index, 
            já que o index vai passar como parâmetro da função, eu quero que a função seja executada apenas quando i == index + 1 
            (o +1 é porque o index é sempre 1 menor do que o length)
        
        */

    }

}

    

        

const ll = LinkedList();
ll.append(200);
ll.append(100);
ll.prepend(300);
ll.printList()