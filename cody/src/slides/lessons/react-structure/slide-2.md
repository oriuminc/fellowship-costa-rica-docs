## React Structure

So we should see some familar things in this file, mainly within the render method. Let's break down everything we see: 

### Import
Imports in react can be used two ways, one is two import a libary package (like we see on line 1) and the second is to import a local file (like on line 2 & 3).

Let's add a new import to App.js

```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
```

So What is this import doing? It will look for the file specfied in the path `'./Button.js'` inside that file it will look for either a named export or a default export. You can see an example of a default export on line 26 of App.js you can read a little more [here](https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac)

Obvisoulsy this file does not exsist yet, but we will make it in the next step.
---
