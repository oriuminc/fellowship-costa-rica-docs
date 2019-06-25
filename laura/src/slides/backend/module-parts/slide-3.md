## Module Standards

### Organizing your Classes

The structure follows a convention for organizing class files in Drupal. 

- All class files go in the /src folder
- Within the /src folder, there is an organizational convention that you should follow, that all Drupal modules follow so that you can easily find classes in them
- Plugins should go in a /src/Plugin directory
- Blocks are a type of Plugin that can go in its own subdirectory, /src/Plugin/Block

The advantages of this type of organization become clear if you look at a module that has many classes in it.

### Naming Conventions and Cases

Note that in Drupal, there are several different types of case that you can use to name files, functions, and classes. Follow the example provided by Drupal Console. You can always also look at Drupal core files for code examples. 

The cases are as follows:

- camelCase (first word is not capitalized, often used for function names)
- PascalCase (first word is capitalized, used often for class names)
- snake_case (all lowercase, words separated by underscore, often used for module names and plugin IDs)

It is important to have clean, well-organized and well-documented code! Your teammates and your future self will thank you.

When you have time, it is worthwhile to take a read through the [Drupal Coding Standards] (https://www.drupal.org/docs/develop/standards/coding-standards).

---
