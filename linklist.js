class Node{
    constructor(data){
        this.data=data;//store the value
        this.next=null;//reference to next node

    }
}
//creating node
const node1=new Node(10);
const node2=new Node(20);
const node3=new Node(30);
//linking nodes
node1.next=node2;
node2.next=node3;
console.log(node1.data);
console.log(node1.next.data);
