## React Props

React has a way of passing props to and from components, these are called props. Let's first have a look at our `Card.js` component. Right now it is just being called and displayed via our return in the `App.js`. But let's say we wanted this card to be used for multiple people, right now we would have to make a different card component for each person. This is where props come in handy 
``` JS
<Card />
```
To
``` JS
<Card name="John Smith">
```
and in our `Card.js` we will change :
``` JS
export default function Card() {
```
To 
``` JS
export default function Card(props) {
```
and finally we will change 
``` JS
<div className="card">
  ...
  <h4> Mary Sue </h4>
  ...
</div>
```
To 
``` JS
<div className="card">
  ...
  <h4> {props.name} </h4>
  ...
</div>
```
You can read all about props [here](https://www.robinwieruch.de/react-pass-props-to-component/) and [here](https://www.agiliq.com/blog/2018/05/understanding-react-state-and-props/)
---
