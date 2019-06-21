## React and Classes part 2

Next up is understanding one of the react life-cycle methods : `componentDidMount`. The react life cycle is a circle of events that fire in order. 

<img src="/img/lesson/lifeCycle.png" />

``` JS
export default class App extends React.Component {
  componentDidMount() {
    console.log("did mount");
  }
  render() {
    console.log("render");
    return (
      ...
    )
  }
}
```

The output here would be `render` then `did mount`.
---
