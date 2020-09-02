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
#app {
  text-align: center;
}
</style>
