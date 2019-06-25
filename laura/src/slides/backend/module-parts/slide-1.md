## The parts of a module, explained

It is very nice that we have Drupal Console to help us create modules. We used to have to create them from scratch. But as a developer, you will do work on every part of a module, so it is important that you know the module structure inside-out.

### .info.yml

The info file tells Drupal about our module.

- The Name and Description appear on the Extend page
- Package provides grouping on the Extend page
- Core version tells Drupal that it is a Drupal 8 module
- Type allows composer to install the module in the correct location

### .module

This file contains any Drupal hooks that you add. Hooks are triggered by many different Drupal events. Adding a hook means that the code you add in the hook will be triggered when the Drupal event occurs. Common examples would be after a node is saved, or before a view renders on a page.

Drupal generate adds hook_help to the .module file by default. Hook help provides an entry on the Help page. You can customize your entry however you wish. 



---
