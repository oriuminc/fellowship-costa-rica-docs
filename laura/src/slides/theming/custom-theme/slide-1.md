## Create a Custom Theme

Drupal comes with six themes that you can use or extend and modify, or you can build your own from scratch. 

An easy way to create a custom theme is to base it on a core theme. This way, your custom theme inherits almost everything from the base theme, and you can then override the base theme to make it your own. 

We can use Drupal Console to create a new custom theme based on `Bartik`, which is the default theme. Give it a try. 

```JS
drupal generate:theme  
--theme="Fellowship"  
--machine-name="fellowship"  \
--theme-path="themes/custom"  \
--description="My Awesome Fellowship theme"  \
--core="8.x"  \
--package="Custom"  \
--global-library="global-styling"  \
--base-theme="bartik"
```

### Add Regions

An important thing to know about extending themes is that the one thing themes don’t inherit automatically is regions. So if you want to keep the same regions as your base theme, you need to copy the regions from the .info.yml file of your base theme (Bartik) into the .info.yml file of your custom theme. Go ahead and do that now.

---
