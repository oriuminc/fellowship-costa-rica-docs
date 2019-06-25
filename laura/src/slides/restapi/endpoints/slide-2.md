## Create a custom REST plugin

1. Use Drupal Generate to generate a custom rest resource:

```JS
drupal generate:plugin:rest:resource  \
--module="fellowship_core"  \
--class="FellowshipRestResource"  \
--plugin-id="fellowship_rest_resource"  \
--plugin-label="Fellowship rest resource"  \
--plugin-url="api/v1/fellowship-info"  \
--plugin-states='GET'
```
2. Configure GET for your plugin using the REST UI 

* Install the REST UI module: https://www.drupal.org/project/restui)
* Go to the REST UI admin screen: /admin/config/services/rest
* Find Fellowship Rest Resource in the list of resources and `enable` it
* Enable GET, choose JSON format and choose `cookie` authentication

3. We need to give permission for an anonymous user to access the endpoint (otherwise we need to configure authentication)

* Go to user permissions admin at `/admin/people/permissions`

* Under `RESTful Web Services`, check the permission for 'Access GET on Fellowship rest resource resource' for Anonymous User.

4. Change the get() method in your plugin to:

```PHP
  public function get() {

    $response = ['message' => 'Hello, this is a rest service'];
    return new ResourceResponse($response, 200);
  }
```

---
