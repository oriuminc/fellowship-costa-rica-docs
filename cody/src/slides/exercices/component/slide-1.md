## Creating a component

We are going to be creating a component and importing into our `app.js`. We should already have the JSX needed to make the component. We should start by making a new file called `Card.js` in our main directory. That file should look like:
```JS
import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div className="profilePic"> </div>
      <div className="cardBio">
        <div className="name"> <h2 className="text-weight-bold"> ... </h2> </div>
        <div className="degree text-small text-upper text-weight-light"> ... </div>
        <div className="quote"> ... </div>
      </div>
    </div>
  );
}

export default Card;
```

---
