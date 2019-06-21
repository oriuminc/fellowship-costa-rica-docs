## Maps and Objects 

Next let's look at the `map` method in ES6, in basic terms the map is a loop that goes through an array and returns per iteration. In JSX we can leverage this to render HTML inside the return function. This looks something like:
``` JS
  const test = ["value", "value2", "value3"]; // this defines an array
  test.map((value, index) => { // the map will run 3 times, the value and index will change every iteration
    return `<h1>${value} || ${index}</h1>` // This will return the current iteration
  });
```
Let's break down everything we see here, we have an array defined called array, it contains 3 elements ("value", "value2", "value3"). This means the map will loop three times with a unique iteration each time. Next up is the `test.map` this is a method chained to a variable. Where `test` is a variable we defined and `map` is a JS global method. The `.` is the chain. You can read more about this [here](https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f) and [here](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)

Lets take a look at the output from something like this:

## value 0
## value2 1
## value3 2

We can see here that the index actually starts at 0
---
