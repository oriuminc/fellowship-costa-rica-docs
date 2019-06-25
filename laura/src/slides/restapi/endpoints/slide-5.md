## Examples of how to include a Drupal view in a custom REST web service

A view is useful if you need to display more than one of something (for example a list of news items).

1. Create the content type (like News), create some news nodes, create a news view.

* Choose Content display instead of Fields display
* Under `Use Pager`, select `Display a specified number of items` and choose the exact number of items you need (for example, 3 news items)

If you want to add your view to your custom rest resource, you could do it like this:

At the top of your file:

```PHP
use Drupal\views\Views;
```

In your get() function:

```PHP

  public function get() {

    // Replace 'teensmart_news' with the name of your view.
    $news_view = Views::getView('teensmart_news');
    $news_view->execute();
    
    // The foreach function loops through each row of the view and adds the field values to the array.
    foreach ($news_view->result as $row) {
      $news = Node::load($row->_entity->id());
      $response['news_items'][] = [

        // The names of the fields need to match the field names in your content type.
        'title' => $news->getTitle(),
        'description' => $news->get('field_description')->value,
        'image_url' => $news->get('field_image')->entity->uri->url,
        'link' => [
          'uri' => $news->get('field_link')->uri,
          'text' => $news->get('field_link')->title,
        ],
      ];
    }

    return new ResourceResponse($response, 200);

  }

  ```



---
