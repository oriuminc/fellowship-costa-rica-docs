## When to use Decoupled Drupal

### Why use a JavaScript framework like React?

* Using a JS framework allows developers to take full control over the rendered markup and user experience (Drupal front end is somewhat pre-defined, so you are operating with some constraints)

* JS frameworks help developers create highly interactive websites which enable users to interact with parts of content while a page is not yet fully loaded

### Why else is decoupling a good idea?

* Front end and back end teams can work independently of each other which can improve velocity

* It is future proof because you can completely swap out the front end if you want to in a redesign, and the data will remain in tact

### What are the drawbacks of decoupling?

* Layout control by editors is not as easy

* The design is completely tailored rather than allowing for flexibility

* Requires React developers in addition to Drupal developers

* There are some complexities in maximizing performance to ensure there are as few requests as possible and to cache the API

* A decoupled architecture is more complex to debug

* Drupal modules like Google Analytics and Localization that work on the front end would have to be written from scratch for a custom decoupled architecture

* More costly to maintain

### Use it when:

* You need more freedom in structuring and displaying content

* You need to publish on multiple platforms

* You extract data from multiple resources including social media, CMS, video management systems, etc


---
