# Linked Lists

Linked Lists algorithm of the computer science section from **The Odin Project**.

## Assignment

Small project that uses Javascript classes to do a Linked List.
The project have 2 files:

**`linkedList.js`** -> File with the classes `LinkedList` (which will represent the full list), and `Node` (represents the fundamental unity of the list).

**`main.js`** -> File that imports the `linkedList.js` to test the algorithm.

#### Project Functionalities

The `linkedList.js` should contain the following functions:

- `append(value)` adds a new node containing `value` to the end of the list.
- `prepend(value)` adds a new node containing `value` to the start of the list.
- `getSize` returns the total number of nodes in the list.
- `getHead` returns the first node in the list.
- `getTail` returns the last node in the list.
- `getAt(index)` returns the node at the given `index`.
- `pop` removes the last element from the list.
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- `find(value)` returns the index of the node containing value, or null if not found.
- `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`.

To run this project, use the command: `node file-name.js`.

Link to [project assignment.](https://www.theodinproject.com/lessons/javascript-linked-lists)
