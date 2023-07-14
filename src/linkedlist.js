import Node from "./node.js";

export default class LinkedList{
    constructor() {
        this.head = null;  
      }

    prepend(value){
        this.head = new Node(value, this.head);
    }


    append(value){
        if (this.head === null) {this.prepend(value)}
        else {
            let tmp=this.head;
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    size(){
        let count = 0;
        let tmp = this.head;
        while(tmp != null) {
            count++
            tmp = tmp.nextNode;
        }

        return count;
    }

    head(){
        return this.head;
    }

    tail(){
        let tmp = this.head;
        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index){
        let count = 0;
        let tmp = this.head;
        while(count < index) {
            count++
            if( tmp = null ){console.log("out of range")}
            else{
            tmp = tmp.nextNode};
        }

        return tmp;

    }

    pop(){

        let curr = this.head;
        let prev = null;
          while (curr.nextNode != null) {
            prev = curr;
            curr = curr.nextNode;
          }

          prev.nextNode = null;
            
    }

    contains(value){
        let tmp = this.head;

        while (tmp != null){
            if(tmp.value = value){return true}
            tmp = tmp.nextNode;
        }

        return false;
    }

    find(value){

        let count = 0;
        let tmp = this.head;

        while (tmp != null){
            if(tmp.value = value){return count}
            count++
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString(){
        let tmp = this.head;
        let stringList = "";

        while(tmp != null){
          stringList += `${tmp.value}->`
          tmp = tmp.nextNode;
        }

        stringList += "null";
        return stringList;
    }

    insertAt(value, index){
        if (this.listHead == null) this.prepend(value);
        let count = 0;
        let curr = this.head;
        let prev = null;

        while (count < index) {
            if( curr == null ){console.log("out of range")}
            else{
            prev = curr;
            curr = curr.nextNode
            count++}
        }

        let newNode = new Node(value);
        prev.nextNode = newNode;
        newNode.nextNode = curr;
    }

    removeAt(index){
        if (this.listHead == null) return null;
        
        let count = 0;
        let curr = this.head;
        let prev = null;

        while (count < index) {
            if( curr == null ){console.log("out of range")}
            else{
            prev = curr;
            curr = curr.nextNode;
            count++}
        }

        prev.nextNode = curr.nextNode;

    }
}

