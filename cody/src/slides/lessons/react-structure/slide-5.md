## React Structure Part 3

### JSX Part 2

Another big rule to follow while creating JSX for react, is that only one parent is allowed in the return, So: 
```
return (
  <div className="wrap">
    <div className="child">
    ...
    </div>
  </div>
)
```
Is allowed, but :
```
return (
  <div className="wrap">
  </div>
  <div className="child">
    ...
  </div>
)
```
Is not
---
