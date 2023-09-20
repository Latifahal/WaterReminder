

# Homework
 > Practice, research and make notes on the following topics:
 >> 1. JS Data types (String, number, array, objects, booleans)
 >>2. Variable and constants (var, let and const)
 >>3. if and else statements in js 
 >>4. Logiical operators
 >>5. Relational operators
 >>> - Extra: research node list.
 ---

 JavaScript (JS) is a dynamically typed language, which means that variables are not explicitly declared with a data type, and their data type can change during runtime. However, JavaScript has several fundamental data types, which can be categorized into two main groups: primitive data types and reference data types.

**Primitive Data Types:**

1. **Number:** Represents both integer and floating-point numbers. For example:
   ```javascript
   let num = 42;
   let pi = 3.14;
   ```

2. **String:** Represents sequences of characters enclosed in single or double quotes. For example:
   ```javascript
   let name = "John";
   let message = 'Hello, world!';
   ```

3. **Boolean:** Represents a true or false value. For example:
   ```javascript
   let isTrue = true;
   let isFalse = false;
   ```

4. **Undefined:** Represents a variable that has been declared but not assigned a value. For example:
   ```javascript
   let uninitializedVar;
   ```

5. **Null:** Represents the intentional absence of any object value. For example:
   ```javascript
   let emptyValue = null;
   ```

6. **Symbol (ES6 and later):** Represents a unique and immutable value, often used as object property keys. For example:
   ```javascript
   const uniqueKey = Symbol('description');
   ```

7. **BigInt (ES11 and later):** Represents large integers that cannot be represented by the Number type. It is denoted by adding `n` to the end of an integer literal. For example:
   ```javascript
   const bigIntValue = 1234567890123456789012345678901234567890n;
   ```

**Reference Data Types:**

8. **Object:** Represents a collection of key-value pairs (properties and methods). Objects can be created using object literals or constructor functions. For example:
   ```javascript
   const person = {
     name: "Alice",
     age: 30,
   };
   ```

9. **Array:** A special type of object used to store a collection of values, usually indexed by numbers. For example:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   ```

10. **Function:** A callable object that can execute a block of code. Functions are also considered objects in JavaScript. For example:
    ```javascript
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    ```

11. **Date:** Represents dates and times. It is used to work with dates and times. For example:
    ```javascript
    const today = new Date();
    ```

12. **RegExp:** Represents regular expressions, used for pattern matching within strings. For example:
    ```javascript
    const pattern = /abc/;
    ```

These are the core data types in JavaScript. Understanding these data types is essential for working with JavaScript effectively. Additionally, JavaScript allows you to create custom objects and data structures using these fundamental data types.