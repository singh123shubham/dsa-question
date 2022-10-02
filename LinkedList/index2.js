// linkedList implement head and tail

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0 
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty')
        }else{
            let curr = this.head
            let listvalue = ""
            while(curr){
                listvalue += `${curr.value}`
                curr = curr.next
            }
            console.log(listvalue)
        }
    }
}

const list = new linkedlist()
console.log('list is Empty',list.isEmpty())
console.log('list size is :',list.getSize())
list.print()
list.prepend(11)
list.prepend(22)
list.prepend(33)
list.print()
list.append(44)
list.append(55)
list.print()
console.log('list size is :',list.getSize())
list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()