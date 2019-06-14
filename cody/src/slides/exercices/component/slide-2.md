## Creating a component Part 2

Now that we have our component `card.js` we need to import and run it inside the `app.js`, it shold look like: 

```JS
import React from 'react';
import Card from './Card.js'

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}
```

---
