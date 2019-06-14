## State Part 3

In that last step we went over how to modify the state in react, now we need to use those updated values. One peice of the life cycle is the render, so in order of opperations it will look like this:

1. Render
2. ComponentDidMount
3. API Call
4. Update State
5. Render 

The first time `Render` fires all the values will be blank, but after the state changes React will automatically re-fire. This means that if we were to throw some console.logs in the `render` function like:
``` JS
render() {
  console.log('render', this.state.city);
  return (
    ...
  )
}
```
the output from this will be :
`render undefined`
`render Toronto`
We can tell from this that the render function does indeed fire twice, once when the App loads and then another time when the state is updated.
---
