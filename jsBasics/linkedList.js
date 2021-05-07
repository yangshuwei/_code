class Node{
  constructor(element){
    this.element = element;
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
  }
  append(element){
    let node = new Node(element);
    if(this.head == null){
      this.head = node;
    }else{
      let current = this.head;
      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
  find(item){
    let currNode = this.head;
    while (currNode.element!=item) {
      currNode = currNode.next
    }
    return currNode;
  }
  insert(element,item){
    let newNode = new Node(element);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  findPrevious(item){
    let currNode = this.head;
    while (!(currNode.next==null)&&currNode.next.element!=item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  remove(item){
    let preNode = this.findPrevious(item);
    let currNode = preNode.next;
    preNode.next = currNode.next;
    currNode.next = null

  }
  display(){
    let currNode = this.head;
    while (!(currNode.next==null)) {
      console.log(currNode.next.element)
      currNode = currNode.next
     
    }
    
  }
}
let list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
// list.remove(5)
list.display()

// {
//   "head": {
//     "element": 1,
//       "next": {
//       "element": 2,
//         "next": {
//         "element": 3,
//           "next": {
//           "element": 4,
//             "next": {
//             "element": 5,
//               "next": null
//           }
//         }
//       }
//     }
//   }
// }

function reverseList(p=list.head){
  console.log(JSON.stringify(list, null, 2))
 if(p.next){
   reverseList(p.next)
   p.next.next = p;
   p.next = null
 }else{
   list.head = p
 }
 return list
}
console.log(reverseList(list),null,2)