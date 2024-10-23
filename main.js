const LinkedList = require("./linkedList");

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getAt(2));
console.log(list.contains("dog"));
console.log(list.contains("dragon"));
console.log(list.find("cat"));
console.log(list.pop());
console.log(list.toString());
