<template>
  <div id="app">
    <nav-component :scrolled="scrolled"></nav-component>
    <vue-scroll :ops="scrollOps" @handle-scroll="handleScroll">
      <router-view/>
    </vue-scroll>
  </div>
</template>

<script>
import navComponent from '@/components/common/MenuComponent.vue';
import vueScroll from 'vuescroll';

export default {
  components: {
    navComponent,
    vueScroll,
  },
  data() {
    return {
      scrollOps: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          wheelScrollDuration: 200,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 10,
          easing: 'easeInQuad',
          verticalNativeBarPos: 'right',
        },
        rail: {},
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          minSize: 0.3,
          background: '#5499C7',
          size: '6px',
          disable: false,
        },
      },
      scrolled: false,
    };
  },
  methods: {
    handleScroll(vertical) {
      console.log(vertical);
      this.scrolled = vertical.scrollTop > 1;
    },
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  height: 90vh;
  overflow: hidden;
}
</style>
