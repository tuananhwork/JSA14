# JSA content

## Lesson 1: Github

### 1. git clone

- create a new repository in github.com
- git clone ...
- coding ...
- git add .
- git commit -m "my commit"
- git push -u origin main / git push -u origin master

### 2. git init

- create a new repository in github.com
- git init
- git add .
- git commit -m "my commit"
- git remote (url)
- git push -u origin main / git push -u origin master

## Lesson 2: Loop, Array, Object

### I. Loop

#### 1. For loop

**Syntax:**

```javascript
for (expression 1; expression 2; expression 3) {
// code block to be executed
}
```

- Expression 1 is executed (one time) before the execution of the code block.
- Expression 2 defines the condition for executing the code block.
- Expression 3 is executed (every time) after the code block has been executed.

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("The number is", i);
}
```

#### 2. While loop

**Syntax:**

```javascript
while (condition) {
  // code block to be executed
}
```

**Example:**

```javascript
while (i < 5) {
  console.log("The number is", i);
  i++;
}
```

#### 3. Do-while loop

**Syntax:**

```javascript
do {
  // code block to be executed
} while (condition);
```

**Example:**

```javascript
do {
  console.log("The number is", i);
  i++;
} while (i < 5);
```

### II. Array

#### 1. Array ?

An array is a special variable, which can hold more than one value

```javascript
const cars = ["BMW", "Audi", "Volvo"];
```

**Syntax:** `const array_name = [item1, item2, ...];`
_It is a common practice to declare arrays with the const keyword._

**Example:**

```javascript
const name = ["A", "B", "C", "D"];

const cars = new Array("Saab", "Volvo", "BMW");

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
```

#### 2. Array methods

##### JavaScript Array length: The length property returns the length (size) of an array:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
```

##### JavaScript Array pop(): The pop() method removes the last element from an array:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
```

_The pop() method returns the value that was "popped out"_

##### JavaScript Array push(): The push() method adds a new element to an array (at the end):

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
```

_The push() method returns the new array length_

##### JavaScript Array shift(): The shift() method removes the first array element and "shifts" all other elements to a lower index.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
```

_The shift() method returns the value that was "shifted out"_

##### Exercise: Research about JS Methods: (https://www.w3schools.com/js/js_array_methods.asp)

- Array length
- Array toString()
- Array pop()
- Array push()
- Array shift()
- Array unshift()
- Array join()

### III. Object

#### 1. Real Life Objects, Properties, and Methods

In real life, a car is an object.
A car has properties like weight and color, and methods like start and stop:

- Object: Car
- Properties:
  - car.name = BMW
  - car.model = 500
  - car.weight = 850kg
  - car.color = white
- Methods:
  - car.start()
  - car.drive()
  - car.brake()
  - car.stop()

#### 2. Javascript Objects

##### Object defination

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

- firstName, lastName, age, eyeColor: `key`
- "John", "Doe", 50, "blue": `value`

**Accessing Object Properties:** `objectName.propertyName` or `objectName["propertyName"]`

##### Object method

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

_In the example above, this refers to the person object._

**Accessing Object Methods:** `objectName.methodName()`

## Lesson 3

## Lesson 4

## Lesson 5

## Lesson 6

## Lesson 7

## Lesson 8
