## Import and render JSON

Next we will be importing and rendering JSON data. First up we need to download and import a .json file. You can get it [here](https://google.com) 

Once we have the json file in our directory we will need to import it into our application, so in our `app.js` we need to have something like: 

```JS
import students from './students.json';
```

This should give us access to the info in students as an array, we can loop over this and render the `<Card />` component for each iteration 

---
