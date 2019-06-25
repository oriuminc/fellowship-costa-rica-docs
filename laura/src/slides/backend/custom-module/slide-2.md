## Using Drupal Console

Follow the steps to generate your module. You can call it anything you like. A typical naming convention is to use the name of the larger project followed by the main function of the module. For a module for this project that contains various functionality, you might call it `Fellowship Core`.

Here is an example:

```JS
drupal generate:module 
--module="Fellowship Core" // Displays on Extend page
--machine-name="fellowship_core" // Only letters and underscores. You will use the machine name later to specify the module for the block
--module-path="/modules/custom" 
--description="Core functionality for Fellowship" // Displays on Extend page
--core="8.x"  
--package="Custom" // Groups similar modules on Extend page
--module-file=”yes” // Provides hook_help by default
--composer=”no” // You can use a composer file to download dependencies, but we don’t need to do that for this exercise
--twigtemplate=”no”
```

Now take a look in your project files. You should see a folder under `/modules/custom` with your custom module in it.

Navigate to `Extend` in the Admin UI and type the name of your module in the search field. You should see your custom module in the list of modules. Enable it.

Your custom module now exists, but it doesn’t do anything yet. We need to add some functionality to it. 

<em>Let’s add a custom block.</em>


---
