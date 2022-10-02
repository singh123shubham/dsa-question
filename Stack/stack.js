class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    getSize(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log("size of stack :",stack.getSize())
console.log(stack.pop())
console.log("top element in a stack is :", stack.peek())