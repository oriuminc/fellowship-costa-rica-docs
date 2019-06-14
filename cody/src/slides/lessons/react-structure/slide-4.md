## React Structure Part 3

### JSX

Next up is everything inside the `return` of the App function. This is called JSX and is a substitute for HTML. luckly for us it is formated much the same. So Lets's look at some of the differencies. Starting at line 7:
In HTML this line would look like `<div class="App">` however in JSX `class` is a reserved JS term so we substitute `className` (Note the "N" here is capitlized) This refers to camel case, which can be read about [here](https://www.w3schools.com/js/js_conventions.asp)

So nothing too dramatic here, for the most part JSX follows the same type of rules that HTML does. So, why do we use it over HTML? That is becuase JSX allows for JS injection, lets take a look at line 9 `<img src={logo} className="App-logo" alt="logo" />` specfically the `src={logo}` this is using a JS defined varible as an image source. We can read a little more about JSX [here](http://buildwithreact.com/tutorial/jsx) and [here](https://reactjs.org/docs/introducing-jsx.html)

---
