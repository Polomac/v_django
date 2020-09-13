<template>
  <div class="api-wrapper fluid-container">
    <h1 class="title global-title">API</h1>
    <h3 class="subtitle">GET request</h3>
    <p>
      Fetch all articles:<br>
      URL: <em>https://django-v.herokuapp.com/articles/</em><br>
      Method:<em> GET</em>
    </p><br>
    <p>
      Fetch single article:<br>
      URL: <em>https://django-v.herokuapp.com/articles/${id}/</em><br>
      Method: <em>GET</em>
    </p>
    <h3 class="subtitle">POST request</h3>
    <p>
      Post an article:<br>
      URL: <em>https://django-v.herokuapp.com/articles/</em><br>
      Method: <em>POST</em><br>
      Headers: <em>{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }</em><br>
      Payload: <em>JSON.stringify({
        title,
        slug,
        body,
      })</em>
    </p>
    <h3 class="subtitle">PUT request</h3>
    <p>
      Update an article:<br>
      URL: <em>https://django-v.herokuapp.com/articles//${id}/</em><br>
      Method: <em>PUT</em><br>
      Headers: <em>{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }</em><br>
      Payload: <em>JSON.stringify({
        title,
        slug,
        body,
      })</em>
    </p>
    <h3 class="subtitle">DELETE request</h3>
    <p>
      Delete an article:<br>
      URL: <em>https://django-v.herokuapp.com/articles//${id}/</em><br>
      Method: <em>DELETE</em><br>
    </p><br>
  </div>
</template>

<style lang="scss">
.api-wrapper{
  color: $text;
  .subtitle {
    margin: 30px 0 10px 0;
  }

  p {

    em {
      color: darken($gray, 20%);
      font-style: italic;
    }
  }
}
</style>
