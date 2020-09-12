<template>
  <modal name="add-article" class="add-article-wrapper"
    @before-open="beforeOpen"
    @before-close="beforeClose">
    <h3>{{modalTitle}}</h3>
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="true"
    >
      <v-text-field
        v-model="title"
        :counter="25"
        :rules="titleRules"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="slug"
        :counter="10"
        :rules="slugRules"
        label="Slug"
        required
      ></v-text-field>
      <v-textarea
        v-model="body"
        :rules="bodyRules"
        :auto-grow="true"
        label="Body"
        required
        :counter="50"
      ></v-textarea>
      <v-btn class="submit-article" @click="submitArticle" dark>Submit</v-btn>
    </v-form>
  </modal>
</template>

<script>
export default {
  name: 'add-article',
  data() {
    return {
      title: '',
      slug: '',
      body: '',
      id: null,
      valid: true,
      modalTitle: '',
      titleRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'Name must be more than 5 characters',
        v => (v && v.length <= 25) || 'Slug must be less than 25 characters',
      ],
      slugRules: [
        v => !!v || 'Slug is required',
        v => (v && v.length <= 10) || 'Slug must be less than 10 characters',
      ],
      bodyRules: [
        v => !!v || 'Body is required',
        v => (v && v.length >= 50) || 'Body must be more than 50 characters',
      ],
    };
  },
  methods: {
    beforeOpen(event) {
      if (event.params.id && typeof (event.params.id) === 'number') {
        this.id = event.params.id;
        this.modalTitle = 'Edit article';
      } else {
        this.modalTitle = 'Add article';
      }
      if (event.params.title) {
        this.title = event.params.title;
      }
      if (event.params.slug) {
        this.slug = event.params.slug;
      }
      if (event.params.body) {
        this.body = event.params.body;
      }
    },
    beforeClose() {
      this.reset();
      this.resetValidation();
    },
    validate() {
      this.$refs.form.validate();
    },
    submitArticle() {
      if (this.$refs.form.validate()) {
        this.postAricle();
      }
    },
    async postAricle() {
      if (this.id) {
        const myData = {
          title: this.title,
          slug: this.slug,
          body: this.body,
        };

        const options = {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myData),
        };

        try {
          const response = await fetch(`${process.env.VUE_APP_API}/articles/${this.id}/`, options);
          // eslint-disable-next-line
          const data = await response.json();
          this.$emit('refetch');
          this.closeModal();
          // eslint-disable-next-line
        }
        catch (error) {
          console.log(error);
        }
      } else {
        const myData = {
          title: this.title,
          slug: this.slug,
          body: this.body,
        };

        const options = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myData),
        };

        try {
          const response = await fetch(`${process.env.VUE_APP_API}/articles/`, options);
          // eslint-disable-next-line
          const data = await response.json();
          this.closeModal();
          // eslint-disable-next-line
        }
        catch (error) {
          console.log(error);
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    closeModal() {
      this.$emit('refetch');
      setTimeout(() => {
        this.$modal.hide('add-article');
        this.reset();
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.vm--container {
  .vm--modal {
    width: calc(100% - 20px) !important;
    margin: 0 auto;
    left: unset !important;
    padding: 20px;
    height: auto !important;

    @include mqMin(390px) {
      width: 370px !important;
    }
    @include mqMin(768px) {
      width: 600px !important;
    }
  }

  .submit-article {
    float:right;
    clear:both;
    margin-top:30px;
    margin-bottom:10px;
    background-color: $confirm !important;
  }

  .v-messages__message {
    color:crimson !important;
  }
}
</style>
