## Const and Let

Const and Let are how we define variables in JS (or ES6 actually).

``` PHP
$x = "test string";
$x = "redefined test string";
```
This is fine to do in PHP due to `$` being reassignable, however in JS we have multiple ways to define varables. 
``` JS
const x = "test string";
const x = "redefinded string" 
``` 
This will cause an error. That is due to `const` being considered "non-mutable" meaning you are not allowed to re-assign it to a new value. However `Let` works much the same as `$` in PHP. So :
``` JS
let x = "test string";
let x = "redefinded string" 
``` 
is fine to do.
Read more about these opperations [here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

---
