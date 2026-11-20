// let ar =  [91, 17, 42, 68, 99, 73, 54, 88, 36, 12, 65, 81];


// // function sort(arr){
// //     let len = arr.length;
// //     if(len&&len<=1)return arr;
// //     console.log(len)
// //     let mid = Math.floor(len/2);
// //     let left = sort(arr.slice(0,mid));
// //     let right = sort(arr.slice(mid));

// //     return merge(left,right)

// // }

// //  function merge(left,right){
// //     let m = left.length;
// //     let n = right.length;
// //     let result=[];
// //     let i=0,j=0;
// //     while(i<m&&j<n){
// //         if(left[i]<right[j]){
// //             result.push(left[i]);
// //             i++
// //         }else{
// //             result.push(right[j]);
// //             j++
// //         }
// //     }
// //     return [...result,...left.slice(i),...right.slice(j)]
// //  }

// //  console.log(sort(ar))

// // function quickSort(arr){
// //     if(arr.length<1)return arr;
// //     let pivot = arr[arr.length-1];
// //     let left = [];
// //     let right =[];
// //     for(let i=0;i<arr.length-1;i++){
// //         if(arr[i]<pivot){
// //             left.push(arr[i])
// //         }else{
// //             right.push(arr[i]);
// //         }
// //     }

// //     return [...quickSort(left),pivot,...quickSort(right)];
// // }


// // let a =(quickSort(ar))





// // function BiSearch(arr,target){
// //     let mid
// //     let l = 0;
// //     let r = arr.length-1;
// //     while(l<=r){
// //         console.log('work',arr,target)
// //         mid= Math.floor((l+r)/2);
// //         if(arr[mid]==target){
// //             return mid
// //         }
// //         else if(arr[mid]<target){
// //               l=mid+1;
// //         }else{
// //            r=mid-1;
           
// //         }

// //     }
// //     return l

// // }

// // console.log(BiSearch(a,18))


// // class Node {
// //   constructor(data) {
// //     this.data = data;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }

// // const r1 = new Node(15);

// // r1.left = new Node(8);
// // r1.right = new Node(22);

// // r1.left.left = new Node(13);
// // r1.left.right = new Node(5);

// // r1.right.left = new Node(19);
// // r1.right.right = new Node(30);

// // r1.left.left.right = new Node(2);

// // r1.right.left.left = new Node(27);

// // r1.right.right.left = new Node(11);
// // r1.right.right.right = new Node(40);

// // r1.right.right.left.right = new Node(18);

// // const r2 = new Node(15);

// // r2.left = new Node(8);
// // r2.right = new Node(22);

// // r2.left.left = new Node(13);
// // r2.left.right = new Node(5);

// // r2.right.left = new Node(19);
// // r2.right.right = new Node(30);

// // r2.left.left.right = new Node(2);

// // r2.right.left.left = new Node(27);

// // r2.right.right.left = new Node(11);
// // r2.right.right.right = new Node(40);

// // r2.right.right.left.right = new Node(18);

// // function sameTree(r1,r2){
// // if(!r1&&!r2){
// //     return true
// // }
// // if(!r1||!r2){
// //     return false
// // }

// // if(r1.data!=r2.data){
// //     return false
// // }
// // return sameTree(r1.left,r2.left)&&sameTree(r1.right,r2.right);

// // }

// // console.log(sameTree(r1,r2))




// // class graph{
// //     constructor(){
// //         this.adject={};

// //     }
// //     addEdge(vertex1,vertex2){
// //         if(!this.adject[vertex1]){
// //             this.adject[vertex1]=new Set();
// //         }
// //         if(!this.adject[vertex2]){
// //             this.adject[vertex2]= new Set();
// //         }
// //         this.adject[vertex1].add(vertex2);
// //         this.adject[vertex2].add(vertex1)
// //     }
// //     removeedge(vertex1,vertex2){
// //         this.adject[vertex1].delete(vertex2);
// //         this.adject[vertex2].delete(vertex1);
// //     }
// //     removeVertex(vertex){
// //         for(let x of this.adject[vertex]){
// //             this.removeedge(x,vertex)
// //         }
// // delete this.adject[vertex]
// //     }
    
// // }

// // const g = new graph();

// // // Add edges
// // g.addEdge("A", "B");
// // g.addEdge("A", "C");
// // g.addEdge("B", "D");
// // g.addEdge("C", "D");
// // g.addEdge("D", "E");

// // console.log("Initial Graph:");
// // console.log(g.adject);

// // // Display nicely
// // console.log("\nAdjacency List:");
// // for (let vertex in g.adject) {
// //     console.log(vertex, "->", [...g.adject[vertex]]);
// // }

// // // Remove an edge
// // g.removeedge("A", "B");

// // console.log("\nAfter removing edge A-B:");
// // for (let vertex in g.adject) {
// //     console.log(vertex, "->", [...g.adject[vertex]]);
// // }

// // // Remove a vertex
// // g.removeVertex("D");

// // console.log("\nAfter removing vertex D:");
// // for (let vertex in g.adject) {
// //     console.log(vertex, "->", [...g.adject[vertex]]);
// // }

// // class Node {
// //     constructor(data) {
// //         this.data = data;
// //         this.next = null;
// //     }
// // }

// // class LinkedList {
// //     constructor() {
// //         this.head = null;
// //         this.tail = null;
// //     }

// //     append(data) {
// //         const newNode = new Node(data);

// //         if (!this.head) {
// //             this.head = newNode;
// //             this.tail = newNode;
// //             return;
// //         }

// //         this.tail.next = newNode;
// //         this.tail = newNode;
// //     }

// //     print() {
// //         let current = this.head;
// //         let result = "";

// //         while (current) {
// //             result += current.data + " -> ";
// //             current = current.next;
// //         }

// //         console.log(result + "null");
// //     }
// //     findtarget(target){
// //         let cur = this.head;
// //         while(cur.next){
             
// //         if(cur.data==target){
           
// //             return cur;
// //         }
// //             cur=cur.next;
        
// //         }

// //     }
// // }

// // // Create Linked List
// // const list = new LinkedList();

// // list.append(10);
// // list.append(20);
// // list.append(30);
// // list.append(40);
// // list.append(50);

// // list.print();
// // console.log(list.findtarget(30))

// // let num =[1,2,0,4,0,5];
// // let j =0,i=0;

// // while(i<num.length){
// //     if(num[i]!=0){
// //         num[j]=num[i]
// //         j++
    
// //     }
// //     i++
   
// // }
// // while(j<num.length){
// //     num[j]=0
// //     j++
// // }
// // console.log(num)

// // class Node{
// //     constructor(val){
// //         this.data=val;
// //         this.next= null;
// //     }
// // }
// // class Linkedlist {
// //     constructor(){
// //         this.head=null;
        
// //     }
// //     addhead(val){
// //         let cur= this.head;
// //         if(!cur){
// //             this.head=new Node(val);
// //             return;
// //         }
// //         this.head=new Node(val);
// //         this.head.next=cur;

// //     }

// //     revmiddle(){
// //         let cur = this.head;
// //         let fast =this.head;
// //          let pre=null;
// //         while(fast?.next&&fast){
// //             if(!fast.next.next?.next)pre=cur;
// //             cur=cur.next;
// //             fast=fast.next.next
// // //         }
// // //         let temp1=pre.next
// // //         let temp2 = cur.next;
// // //         pre.next=cur.next;
// // //         cur.next=temp2.next 
// // //         temp2.next=temp1
// // //         console.log(pre)
    
// // //     }
// // //     trav(){
// // //         let cur = this.head;
       
// // //         while(cur&&cur.next){

// // //             console.log(cur.data);
// // //             cur=cur.next
// // //         }
// // //         let temp = cur.next;

// // //         console.log(cur.data)
// // //     }
// // // }
// // // let my = new Linkedlist();

// // // my.addhead(3)
// // // my.addhead(2);
// // // my.addhead(9)
// // // my.addhead(7)
// // // my.addhead(6);
// // // my.addhead(4);
// // // my.addhead(0);
// // // my.addhead(8)
// // // my.addhead(1)
// // // my.trav()
// // // my.revmiddle()
// // // my.trav()



// // class Node{
// //     constructor(val){
// //      this.data=val;
// //      this.left=null;
// //      this.right=null;   
// //     }

// // }

// // class bst{
// //     constructor(){
// //         this.head=null
// //         this.length= 0;
// //     }
// //     insert(val){
// //         this.length++
// //         if(!this.head){
// //             this.head=new Node(val)
// //             return;
// //         }
// //         let cur = this.head;
// //         while(true){
// //               if(cur.data>val){
// //             if(!cur.left){
// //                 cur.left=new Node(val)
// //                 return;
// //             }
// //             cur=cur.left

// //         }else if(cur.data<val){
// //             if(!cur.right){
// //                 cur.right=new Node(val)
// //                 return;
// //             }
// //             cur=cur.right;
// //         }else{
// //             return;
// //         }
// //         }
      
// //     }
// //     inorder(cur= this.head){
// //         cur.left&&this.inorder(cur.left);
// //         console.log(cur.data);
// //         cur.right&&this.inorder(cur.right);
// //     }

// //     // search(target){
// //     //     let cur  = this.head;
// //     //     function find(cur){
// //     //         if(!cur)return false;
// //     //         if(cur.data==target)return true;
// //     //         else if(cur.data>target){
// //     //          return  cur.left&& find(cur.left);
// //     //         }else if(cur.data<target){
               
// //     //          return   cur.right&& find(cur.right);
                
// //     //         }else{
// //     //           console.log('work')
// //     //             return false;
// //     //         }
// //     //     }
// //     //     console.log(find(cur))
// //     //    return find(cur)
// //     // }
// //     del(target) {

// //        function deleteNode(cur,target){
// //         if(!cur){
// //             return null;
// //         }
        
// //         if(cur.data>target){
// //             cur.left=deleteNode(cur.left,target)
// //         }else if(cur.data<target){
// //             cur.right=deleteNode(cur.right,target);
// //         }else{
// //             if(!cur.left&&!cur.right){
// //                 return null
// //             }
// //             if(!cur.left){
// //                 return cur.right
// //             }
// //             if(!cur.right){
// //                 return cur.left
// //             }
// //             let successor = cur.right;
// //             while(successor.left){
// //                 successor=successor.left
// //             }
// //             cur.data=successor.data;
// //             cur.right=deleteNode(cur.right,successor.data)

// //         }
// //             return cur;
// //         }






// //       return  this.head=deleteNode(this.head,target)

// // }
// // }

// // let myt = new bst();
// // myt.insert(10)
// // myt.insert(1)
// // myt.insert(12)
// // myt.insert(3)
// // myt.insert(6)
// // myt.insert(17)
// // myt.insert(15)
// // myt.insert(5)
// // myt.insert(9)
// // myt.insert(20)
// // myt.insert(4)
// // console.log(myt.del(10))
// // // console.log(myt)
// // myt.inorder()
// // // console.log(myt.search(90))

// class graph{
//     constructor(){
//         this.adjecny={}
//     }
//     addedges(vertex1,vertex2){
//         if(!this.adjecny[vertex1]){
//             this.adjecny[vertex1]=new Set();
//         }if(!this.adjecny[vertex2]){
//             this.adjecny[vertex2]=new Set();
//         }
//         if(!this.adjecny[vertex1].has(vertex2)){
//             this.adjecny[vertex1].add(vertex2)
//         }
//         if(!this.adjecny[vertex2].has(vertex1)){
//             this.adjecny[vertex2].add(vertex1);
//         }

//     }
//     bfs(start){
//         let visited = new Set();
//         let queue=[start];
//         while(queue.length){
//             let cur= queue.shift()
//             if(visited.has(cur)){
//                 continue
//             }
//             console.log(cur);
//             visited.add(cur)
//             for(let i of this.adjecny[cur]){
//                 if(!visited.has(i)){
//                     queue.push(i);

//                 }
//             }
//         }

//     }

//     dfs(start){
//         let stack = [start];
//         let visited= new Set();
//             while(stack.length){
//                 let cur = stack.pop();
//                 if(visited.has(cur)){
//                     continue;
//                 }
//                 console.log(cur);
//                 visited.add(cur)
            
//                 for(let i of this.adjecny[cur]){
//                     if(!visited.has(i)){
//                         stack.push(i)
//                     }
//                 }
//             }
//     }
// }




// let my = new graph();

// my.addedges("A", "B");
// my.addedges("A", "C");
// my.addedges("B", "D");
// my.addedges("C", "D");
// my.addedges("D", "E");
// my.addedges("E", "F");

// console.log(my.adjecny);
// // my.bfs("A")
// my.dfs("A")