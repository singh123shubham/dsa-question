// implement object method


class Queue{
    constructor(){
        this.items = {}
        this.rare = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rare] = element
        this.rare++
    }
    
    dequeue(){
        const items = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return items
    }

    isEmpty(){
        return this.rare - this.front == 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rare - this.front
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.peek())
queue.dequeue()
console.log(queue.size())


