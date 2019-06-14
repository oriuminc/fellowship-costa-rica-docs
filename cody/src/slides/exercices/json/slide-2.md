## Import and render JSON Part 2

Next we will be creating a map method to loop through the students info, your code inside your `app.js` will look like this: 

```JS
function App() {
  return (
    <div className="App bg">
      <div className="wrap">
        <div className="flex cardWrap jus-between wrap">
          {students && students.map(student => (
            <Card 
              name={student.name}
              degree={student.degree}
              quote={student.quote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
```
The `students &&` part before the map is a check to make sure students is defined. The `students.map(student => (` is what starts our loop, where `student` is a variable defined containing the current iteration.

---
