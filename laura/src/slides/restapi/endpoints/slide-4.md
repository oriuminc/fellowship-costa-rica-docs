## Example of how to include Drupal block in a custom REST web service

A block is useful if you only need to display one of something (a single image, or a single piece of content)

1. Create a custom block type in the block admin UI

* Go to Block Types tab at `Structure > Block Layout > Custom Block Library tab > Block Types sub tab (admin/structure/block/block-content/types)`

* Add custom block type with whatever fields you need

2. Add a Custom Block of that Type

* Go to Custom Block Library at `Structure > Block Layout > Custom Block Library tab (admin/structure/block/block-content)`

* Add a Custom Block, choose your Custom Type, fill in the fields

3. Go to the REST UI at `Configuration > Web services > REST (/admin/config/services/rest)` and enable Custom Block

* Granularity: Resource
* Methods: GET
* Formats: json
* Authentication: cookie

Now you can make a request to get the block data with postman by making a GET request to:

`http://[your local url]/block/1?_format=json`

Or if you want to add a custom block to your custom rest resource, you could do it like this:

At the top of your file:

```PHP
use Drupal\block_content\Entity\BlockContent;
```

In your get() function:

```PHP

  public function get() {

    // The number in BlockContent::load(1) is the block ID.
    $hero_block = BlockContent::load(1);

    // The field names need to match the field names in your block.
    $hero_title = $hero_block->get('field_title')->value;
    $hero_description = $hero_block->get('field_description')->value;
    $hero_image_url = $hero_block->get('field_image')->entity->uri->url;

    $response['hero'][] = [
      'hero_title' => $hero_title,
      'hero_description' => $hero_description,
      'hero_image_url' => $hero_image_url,
    ];

    return new ResourceResponse($response, 200);

  }

  ```



---
