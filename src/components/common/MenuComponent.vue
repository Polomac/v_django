<template>
  <div class="menu-wrapper" :class="{ 'fixed' : scrolled}">
    <div class="menu-wrapper_desktop nav">
      <router-link to="/">Home</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="material-icons mobile-icon" @click="toggleMobileMenu">
      menu_open
    </div>
    <div class="mobile-menu nav" :class="{ 'opened' : mobileMenuOpened}" @click="toggleMobileMenu">
      <router-link to="/">Home</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-component',
  data() {
    return {
      scrolled: false,
      mobileMenuOpened: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 5;
    },
    toggleMobileMenu() {
      this.mobileMenuOpened = !this.mobileMenuOpened;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/defaults.scss';

.menu-wrapper {
  background: $theme;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  height: 79px;
  width: 100%;

  &.fixed {
    position: fixed;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
    width: 100%;
    top: 0;
    left: 0;
    height: 50px;
    z-index: 10;

    .mobile-menu {
      top: 50px;
    }
  }

  &_desktop {
    display: none;
    @include mqMin(768px) {
      display: flex;
      justify-content: flex-end;
    }
  }

  .nav {
    padding: 30px;

    a {
      font-weight: 500;
      color: $text-inverse;
      position: relative;
      margin-left: 30px;
      font-size: 1.1em;

      &.router-link-exact-active {
        color: $text;
        &::after {
          border-bottom: solid $accent 4px;
          content: " ";
          width: 100%;
          position: absolute;
          top: 100%;
          left: 0;
        }
      }
    }
  }

  .mobile-icon {
    color: $text-inverse;
    font-size: 44px;
    margin-right: 20px;
    cursor: pointer;
    @include mqMin(768px) {
      display: none;
    }
  }

  .mobile-menu {
    width: 0;
    position: absolute;
    display: flex;
    flex-flow: column;
    background: lighten($theme, 10%);
    top: 79px;
    right: 0;
    align-items: flex-start;
    justify-content: space-around;
    height: 300px;
    z-index: 0;
    transition: all 0.3s linear;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;

    &.opened {
      width: 260px;
      right: 0;
    }

    @include mqMin(768px) {
      display: none;
    }
  }
}
</style>
