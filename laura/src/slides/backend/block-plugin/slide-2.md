## Generate the Block

Go ahead and generate the block. Let’s make it a Welcome block that will display a welcome message. 

Here is an example (feel free to customize it):

```JS
drupal generate:plugin:block
--module="fellowship_core" // The machine name of our custom module
--class="WelcomeBlock" 
--label="Welcome block" // You’ll see this label in the Admin UI.
--plugin-id="welcome_block"  
--theme-region=[] // Just leave this empty for now, we’ll choose the region in the Admin UI.
--inputs=”no”
```

The `generate block` dialogue includes an option to create a form for your block, that lets you enter the content of the block in the Admin UI. But we are going to skip that for now in order to keep it simple.

Let’s take a look at our module!


---
