## Intro to Drupal REST API

Web Services make it possible for other applications to read and update information on your site via the Web. REST is one of a number of different ways of making Web Services available on your site. 

The REST API supports the following HTTP methods to make requests to web services:

* GET (retrieve data)
* POST (create new data)
* PATCH (modify data)
* DELETE (you know)

### Creating REST Web Services

Each rest web service consists of a plugin and a config entity that specifies permissions. 

There are several ways to create and configure REST resources:

`1. Create a REST Export display in a view`

If you only need view output, this is an easy way to create an endpoint.

`2. The REST UI`

You can use this contributed module to activate and configure REST resources easily. The downside to using REST UI is that you don't get a lot of control over what is displayed at your endpoints. So it works well for exposing individual pieces of content or views, but if you want to display a more complex set of data, you will need a custom endpoint.

`3. Create a plugin and add configuration`

If you need a custom solution, you can create a plugin (there is a Drupal Console command for this!). Once you have created a plugin, you can display any combination of blocks, views, and individual content.

The plugin will then be available for use with REST UI where you can configure it, or you can manually code configuration, using the config that is included in the core REST module to get started. 


---
