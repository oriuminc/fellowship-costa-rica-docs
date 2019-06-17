## State

For the next few exercices first download the weather App from [here](/downloads/weather.zip), this is a small react app that makes a call to an api then renders the information. I will be referncing the app files several times. To install the weather app simply cd into the directory and run `npm i` and then `npm run start`. Once the app is running we should look at the `app.js` in the main directory.

``` JS 
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
```

This is refered to as a local state in react, it is technically just an object with key, value pairs. The cool part is, when ever any value inside your state changes the entire react life-cycle with re-fire automatically. 

---
