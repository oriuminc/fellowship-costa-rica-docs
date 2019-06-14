## Maps and Objects Part 2

Objects in JS operate like arrays, the big difference is objects have keys that repersent each values. Consider this difference: 

``` JS
  const exampleArray = ["john", 44, "Canada"]; // this defines an array
  const exampleObject = {name: "John", age: 44, location: "Canada"}; //This defines an Object
```
The big difference here is how we extract these values, so with an array we have to use a number to reference individual values. Where objects we can use the keys. So it ends up looks like: 
``` JS
  const name = exampleArray[0] // John
  const name = exampleObject.name
```
This is great becuase we don't always know what position our value will be in. You can read more about objects [here](https://www.w3schools.com/js/js_object_definition.asp)
---
