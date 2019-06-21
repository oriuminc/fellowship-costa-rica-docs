## Passing Props

Next we are going to look at passing props to the `<Card />` component. Right now this component should be used to render all the different students, however we have hard-coded all the values in the card to be the same. We can fix this by passing props to the card. So we need to change our code a bit. In `App.js` we need to change:

```JS
import React from 'react';
import Card from './Card.js'

export default function App() {
  return (
    <div className="App">
      <Card name="" degree="" quote="" />
    </div>
  );
}
```
---
