## Creating JSX

For this we are going to be looking at creating a card for our inividual student from your yearbook. You can re-use your HTML and CSS from prevoius work here.

```JS
export default function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="profilePic" />
        <div className="cardBio">
          <div className="name"> <h2 className="text-weight-bold"> ... </h2> </div>
          <div className="degree text-small text-upper text-weight-light"> ... </div>
          <div className="quote"> ... </div>
        </div>
      </div>
    </div>
  )
}
```
---
