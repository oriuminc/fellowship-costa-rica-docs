## Add CSS

CSS and JS are organized into `libraries` in Drupal. We can attach libraries globally, or we can attach them only to one page or to a template that affects a subset of pages. By adding CSS and JS to the minimum number of pages, we cut down on page load time and improve the performance of the site.

Now let's add the library:

1. Add this to the top of your twig template file: 

```TWIG
{{ attach_library('fellowship/welcome-block') }}
```

2. Create a file in the root of your theme called `[theme-name].libraries.yml` (in my case it's `fellowship.libraries.yml`).

3. Add a library called `welcome-block`. Your `fellowship.libraries.yml` file should look like this:

```TWIG
welcome-block:
  css:
    base:
      css/block.css: {}
```

Then, create a `/css` directory in the root of your theme and add a CSS file called `block.css`, so that the file is in `/css/block.css`. <em>Now we're ready to add custom CSS!</em>

Try this (or try your own!):

```CSS
.welcome-block {
    border-radius: 40%;
 }

.sidebar .block.welcome-block h2 {
    color: #fff;
    font-size: 36px;
    padding-top: 20px;
}

.sidebar .block.welcome-block {
    background-color: #8BC34A;
    height: 150px;
}
```

Remember when overriding CSS that the most specific CSS declaration for an element will be the one that is used. So if there is CSS for `.sidebar .block`, you could use `.sidebar .block.welcome-block` to override it.

---
