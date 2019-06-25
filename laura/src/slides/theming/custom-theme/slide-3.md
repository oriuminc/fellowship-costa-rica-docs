## The Twig Template

Once we know what we need to name our twig file, we need to create a `/templates` directory in our theme. We can place twig files anywhere in this directory and they will be detected. 

There is already a default block template that we need to override. We want to maintain the structure of the original file. So we want to copy the html from the file that it is overriding, which in this case is `web/core/themes/bartik/templates/block.html.twig`. Copy that file and paste it into the fellowship theme under `/templates`. Now rename it to override the welcome block. If you haven’t guessed by now, you need to rename it to either `block—welcome-block.html.twig` or `block—welcomeblock.html.twig` (either will work).

Try adding some words or extra html inside the block to see if the override worked. You will need to clear the cache before you refresh your page to see the change.

Now, add a custom class (such as `welcome-block`) to the array of classes at the top of the html. We will use this class in our CSS to target the block.

<img src="/img/welcome-block.png" style="width: 60%" />

---
