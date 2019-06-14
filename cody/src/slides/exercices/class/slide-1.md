## React and Classes

Sometimes we need to use classes in react, mainly becuase it allows to make use of some of the built in methods of react. Such as: 

1. ComponentDidMount
2. ComponentWillUpdate

Methods like these are called life-cycle events in react, you can read about them [here](https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282). These methods are really helpful when loading dyanmic content, such as api data. 

So let's look at the differences between the function based component that we have been using and the new class based that we will be using. 
``` JS
// function
export function App() {
  return (
    ...
  )
}
// Class
export default class App extends React.Component {
  render() {
    return (
      ...
    )
  }
}
```
---
