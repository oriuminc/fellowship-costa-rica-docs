## React Structure Part 2

### Export function

The next thing we see is the export function, is this case it's called App. As you can see on line 5 (where it is defined) and line 26 where it is exported.

`export default App;`

Inside the function is really just the return and then the JSX, we will get into both a little later. Most importanly we have to remeber that every react component must be exported in order to be used.

So every export can broken into two parts, one is the define of the function or class that you want to export. So What we see on line 5 could be written a few different ways: 

```
function App() {
  ...
}
export default function App() {
  ...
}
```
you can read a little more [here](https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac)
---
