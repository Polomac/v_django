<template>
<div class="articles-wrapper fluid-container">
  <h1 class="title global-title" v-if="articles.length > 1">
    Articles
  </h1>
  <div class="vert-spacer" v-else>
    <v-btn @click="back" class="back-button">
      Back
    </v-btn>
  </div>
  <div class="articles" v-if="articles.length > 0">
    <div class="article"
      v-for="article in articles"
      :key="article.id"
      @click="toArticle(article.id)">
      <h3>{{article.title}}</h3>
      <p>{{article.body}}</p>
      <em>{{new Date(article.date).toLocaleDateString("at")}}</em>
      <div class="controls">
        <v-btn class="update" dark
          @click.stop="addAricleOpen(article.id, article.title, article.slug, article.body)">
            Update
          </v-btn>
        <v-btn class="delete" dark
        @click.stop="deleteArticle(article.id)">
          delete
        </v-btn>
      </div>
    </div>
  </div>
  <div class="articles" v-else>
    <h3>No articles found</h3>
  </div>
  <v-btn class="mx-2 add-article" fab dark large @click="addAricleOpen" title="Add article">
    <v-icon dark>mdi-pencil</v-icon>
  </v-btn>
  <add-article @refetch="fetchArticles"></add-article>
</div>
</template>

<script>
const AddArticle = () => import('../components/common/AddArticle.vue');
export default {
  name: 'articles',
  components: {
    AddArticle,
  },
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
    async deleteArticle(id) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/articles/${id}/`, { method: 'DELETE' });
        console.log(response);
        this.fetchArticles();
      // eslint-disable-next-line
      }
      catch (error) {
        console.log(error);
      // eslint-disable-next-line
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
    addAricleOpen(id, title, slug, body) {
      this.$modal.show('add-article', {
        id,
        title,
        slug,
        body,
      });
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
    margin: 50px 0 30px 0;
  }

  .vert-spacer {
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;

    .back-button {
      background-color: $text !important;
      color: $text-inverse;
      border-radius: 4px;
      border: none;
      padding: 10px 20px;
      font-size:0.875em;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        background-color: lighten($text, 15%) !important;
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

      .controls {
        display:flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        margin: 20px 0 10px 0;

        .update {
          background-color: $confirm !important;
        }
        .delete {
          background-color: $alert !important;
          margin-left:20px;
        }
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

  .add-article {
    background-color: $theme !important;
    position: fixed;
    bottom: 50px;
    left: calc(100% - 90px);
  }
}
</style>
