<template>
<div class="articles fluid-container">
  <h1 class="title global-title">
    Articles
  </h1>
  <div class="articles" v-if="articles.length > 0">
    <div class="article" v-for="article in articles" :key="article.slug" @click="toArticle(article.id)">
      <h3>{{article.title}}</h3>
      <p>{{article.body}}</p>
      <em>{{new Date(article.date)}}</em>
    </div>
  </div>
  <div v-else class="articles">
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
    fetchArticles() {
      fetch('http://127.0.0.1:8000/articles')
        .then(stream => stream.json())
        .then((data) => {
          console.log(data);
          this.articles = data;
        });
    },
    toArticle(id) {
      // this.$router.push({ path: `/article/${id}` });
      this.$router.push({ name: 'articles', params: { id } });
    },
  },
  mounted() {
    this.fetchArticles();
  },
  beforeUpdate() {
    console.log(this.$route);
  },
  watch: {
    $route: {
      handler() {
        console.log('ID:', this.$route.params.id);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.articles {
  .title {
    color: $theme;
    margin-top: 50px;
  }

  .articles {
    .article {
      margin-bottom:40px;
      padding: 10px;
      cursor: pointer;
      position: relative;
      &:hover {
        background: #f0f0f0;
        border-radius: 4px;
      }
      &::after {
        content: "";
        border-bottom: 1px solid #f0f0f0;
        width: 100%;
        left: 0;
        bottom: -30px;
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
    }
  }
}
</style>
