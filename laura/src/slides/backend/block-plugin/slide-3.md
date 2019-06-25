## Customize the Block

You'll see a new directory in our module, the `/src` directory. It contains the block plugin in `/src/Plugin/Block/WelcomeBlock.php`

Open the `WelcomeBlock.php` file. It contains just one function, which is `build()`. To customize this block to display our own custom message, we need to modify the build array in the `build()` function. Try this (feel free to customize with your own message):

```PHP
  public function build() {
    $build = [];
    $build['welcome_block']['#markup'] = 'Welcome to Fellowship, yo!';

    return $build;
  }
```
### Place the block

In the Admin UI, go to `Structure > Block layout`.

Choose a region and place your block in it. Take a look at your front page. You should feel very welcomed now. That feels good.

<em>Congrats on completing your first backend Drupal task. Now, let's theme the block!</em>

---
