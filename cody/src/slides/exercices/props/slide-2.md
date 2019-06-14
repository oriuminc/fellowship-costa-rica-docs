## Passing Props part 2

Now that we have defined and passed props from the parent component we need to recive and parse those props in the `Card.js` component. So our new code will look like:

```JS
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="profilePic"> </div>
      <div className="cardBio">
        <div className="name"> <h2 className="text-weight-bold">{props.name}</h2> </div>
        <div className="degree text-small text-upper text-weight-light"> {props.degree} </div>
        <div className="quote"> {props.quote} </div>
      </div>
    </div>
  );
}

export default Card;

```
As you can see we are defing a new argument in the paramenters of `function Card(props)` if we were to console.log this value we would see something like: 
```JS
{
  name: "...",
  degree: "...",
  quote: ".."
}
```
React automatically wraps all props in an object
---
