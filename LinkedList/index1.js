// Create a Node
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinledList {
    constructor (){
        this.head = null
        this.size= 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    // Adding the new Node in the Front of list
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Adding the new Node in the Last Node of the List
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    // Adding new Node in a spacefic position
    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // Delete a node a give index
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
               prev = prev.next 
            }
            removeNode = prev.next
             prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    // Delete the Node a given Value
    remoceValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    // Searching a value in a given list
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    // Reverse of linkedlist 
    reverselinkedlist(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('list is Empty')
        }else{
            let curr = this.head
            let listvalue= " "
            while(curr){
                
                listvalue += `${curr.value}`
                curr = curr.next
            }
            console.log(listvalue)
        }
    }


}
     
    const list = new LinledList()
    console.log("list is Empty", list.isEmpty())
    console.log("Size of List is : ", list.getSize())
    list.print()
    list.prepend(10)
    list.prepend(20)
    list.prepend(30)
    list.print()
    list.prepend(40)
    list.print()
    list.append(50)
    list.print()
    list.append(60)
    console.log("Size of list is : ", list.getSize())
    list.print()
    list.insert(70,4)
    list.print()
    list.insert(11,1)
    list.print()
    list.removeFrom(1)
    list.print()
    list.remoceValue(10)
    list.print()
    console.log("Size of list is : ", list.getSize())
    list.print()
    console.log(list.search(70))
    console.log(list.search(7))
    list.reverselinkedlist()
    list.print()    
