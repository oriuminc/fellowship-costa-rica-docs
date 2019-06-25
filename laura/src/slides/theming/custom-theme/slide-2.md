## Create a Custom Template for your Block

### It's all about the file name

(Twig Naming Conventions) https://www.drupal.org/docs/8/theming/twig/twig-template-naming-conventions

Take a look at the block template `naming conventions`. Can you figure out what to name your twig file in order to override the custom block? Take a look now and see if you can figure it out!

Another way to find out what to name your twig file to override any element is to turn on the Kint module, which is part of the Devel module. Then, enable Kint debugging by doing the following:

In `/sites/default`, copy the `default.services.yml` file and rename it to `services.yml`. Then under Kint debugging, change `enable debugging: FALSE` to `enable debugging: TRUE`. Clear your cache. Now when you inspect your code, you will see twig naming suggestions above the element you are inspecting. 

Inspect the custom block to find out what to name your template file!

<img src="/img/twig.png" style="width: 60%" />
---
