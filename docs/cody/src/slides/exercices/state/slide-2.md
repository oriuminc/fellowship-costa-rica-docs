## State part 2

Next up is modifing the state, we do this with the `setState` function, which can be explained [here](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/) if you look at line 25 of `app.js` you will see the function that updates the state. The function function that wraps it is called `axios` it is a way of getting information from a service called an API. The basic structure is this: 

``` JS 
axios.get('url') // url == the endpoint of the API
.then((response) => { // this is fired once the data has been loaded
  console.log(response) // this is the response from the endpoint
});
```
Next up is modifing the state, which happens at line 25: 
``` JS 
this.setState({
  temperature: response.data.main.temp,
  city: response.data.name,
  country: response.data.sys.country,
  humidity: response.data.main.humidity,
  description: response.data.weather[0].description,
  error: ""
})
```
This block is relativity easy to go through, basically we are targeting every key that we setup in the default state and changing it. What is happening behind the scenes, is that react is always watching this state and waiting for it the change. When it does react goes through it's life-cycle with updated information. 

---
