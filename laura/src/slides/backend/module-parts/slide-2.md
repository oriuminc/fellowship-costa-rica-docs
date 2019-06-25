## Classes and Object-oriented Programming in Drupal

Let's take another look at your Welcome Block plugin. There are several important things to learn about this file.

A `plugin` is a `class` that acts in a specific way.

In `object-oriented programming (OOP)`:
- classes are a template for an object
- In the case of a block plugin, the object will be a block
- In this class, we are defining how our block is constructed.

### Extending Drupal base classes

In Drupal, there are generic classes for common elements like blocks, forms, and widgets. When we create custom versions of these elements, we `extend` base classes and create a custom version of them. Our custom version inherits all of the functionality of the base class and we can override and add more functionality as needed.

Take a look at line 15 in your WelcomeBlock.php file: 
- `WelcomeBlock` is the name of your class
- It extends `BlockBase`
- `BlockBase` is the generic class for a Drupal block and contains functionality that we can override and extend. 

In our case, all we want to do is override the build() method.

Plugin classes are discovered by Drupal using their `annotation`. Look above your class name. The area from line 7 – 14 is `annotation`. You define the ID of your plugin here. The admin label will be displayed in the Admin UI. Once Drupal has discovered your class using this annotation, it will be available in the Admin UI. 

### Namespacing

All classes in Drupal need a namespace. The namespace is part of the identity of the class, and is the way you can use the class in other areas of the code. Look at the namespace of our class on line 3. It starts with Drupal, then uses the name of our module, then the path within the /src file. Notice that /src is not included in the path. This is because all class files are assumed to be located in the /src directory.


---
