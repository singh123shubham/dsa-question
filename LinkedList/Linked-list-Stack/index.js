const Linked_List = require('./Linked-list -class') 

class Linked_List_Stack{
    constructor(){
        this.list = new Linked_List
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
         return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const stack = new Linked_List_Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.getSize())
console.log(stack.pop())
stack.print()
console.log(stack.peek())
