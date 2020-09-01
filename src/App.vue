<template>
  <div id="app">
    <nav-component></nav-component>
    <router-view/>
  </div>
</template>

<script>
import navComponent from '@/components/common/MenuComponent.vue';

export default {
  components: {
    navComponent,
  },
};
</script>

<style lang="scss">
@import './assets/styles/defaults.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
