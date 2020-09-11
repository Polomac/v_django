<template>
<div class="articles-wrapper fluid-container">
  <h1 class="title global-title" v-if="articles.length > 1">
    Articles
  </h1>
  <div class="vert-spacer" v-else>
    <button @click="back">
      Back
    </button>
  </div>
  <div class="articles" v-if="articles.length > 0">
    <div class="article" v-for="article in articles" :key="article.slug" @click="toArticle(article.id)">
      <h3>{{article.title}}</h3>
      <p>{{article.body}}</p>
      <em>{{new Date(article.date).toLocaleDateString("at")}}</em>
    </div>
  </div>
  <div class="articles" v-else>
    <h3>No articles found</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'articles',
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {
      const url = this.$route.params.id ? `http://127.0.0.1:8000/articles/${this.$route.params.id}/` : 'http://127.0.0.1:8000/articles/';
      const response = await fetch(url);
      const data = await response.json();
      if (data.length) {
        this.articles = data;
      } else {
        this.articles = [data];
      }
    },
    toArticle(id) {
      // this.$router.push({ path: `/article/${id}` });
      if (this.$route.params.id !== id) {
        this.$router.push({ name: 'articles', params: { id } });
        this.fetchArticles();
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.fetchArticles();
  },
  watch: {
    $route: {
      handler() {
        this.fetchArticles();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.articles-wrapper {
  .title {
    color: $theme;
    margin-top: 50px;
  }

  .vert-spacer {
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;

    button {
      background: $text;
      color: $text-inverse;
      border-radius: 4px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      padding: 10px 20px;
      font-size:0.875em;
      cursor: pointer;

      &:hover {
        background: lighten($text, 15%);
      }
    }
  }
  .articles {
    .article {
      margin-bottom:40px;
      padding: 10px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s linear;
      &:hover {
        background: #f0f0f0;
        border-radius: 4px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
      }
      &::after {
        content: "";
        border-bottom: 1px solid #f0f0f0;
        width: 100%;
        left: 0;
        bottom: -20px;
        position: absolute;
      }
    }
    h3, p {
      color: $text;
      font-weight: 400;
    }

    em {
      color: $gray;
      font-size: 0.75em;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
