<template>
  <div class="home">
    <div class="fluid-container">
      <h1 class="title global-title">Why</h1>
      <p class="global-par">
        This is the test of architecture with back-end provided by Django REST
        framework and consumed by Vue app on the front-end.
      </p><br>
      <p>
        It's intended for speed and usability check and includes
        basic CRUD operations.
      </p>
      <div class="content-footer">
        <v-btn class="to-articles" @click="toArticles">
          check it out
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    toArticles() {
      this.$router.push({ path: '/articles' });
    },
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;

  .title {
    margin: 50px 0 30px 0;
  }
  .to-articles {
    background-color: $text !important;
    color: $text-inverse;
    border-radius: 4px;
    border: none;
    padding: 10px 20px;
    font-size: 0.875em;
    cursor: pointer;
    transition: all 0.2s linear;
    margin-top: 30px;

    &:hover {
      background-color: lighten($text, 15%) !important;
    }
  }

  .content-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
