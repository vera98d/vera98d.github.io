<template>
  <div
    :class="[
      'navBarContainer',
      'mainContainer',
      { slideIn: showNavBar },
      { slideOut: !showNavBar },
    ]"
  >
    <div class="navBar contentContainer">
      <a class="logo" @click="scrollToSection('home', false)">
        <img src="../assets/logo.svg" alt="Logo: Frontend Coder" />
      </a>
      <div id="burger" ref="burger" @click="toggleMobileMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <nav ref="nav">
        <LanguageSwitch class="languageSwitch" />
        <a class="navlink" @click="scrollToSection('home')">{{
          $t("nav.home")
        }}</a>
        <a class="navlink" @click="scrollToSection('about')">{{
          $t("nav.aboutme")
        }}</a>
        <a class="navlink" @click="scrollToSection('skills')">{{
          $t("nav.skills")
        }}</a>
        <a class="navlink" @click="scrollToSection('projects')">{{
          $t("nav.projects")
        }}</a>
        <a class="navlink" @click="scrollToSection('contact')">{{
          $t("nav.contact")
        }}</a>
      </nav>
    </div>
  </div>
</template>
  
<script>
import LanguageSwitch from "./LanguageSwitch.vue";

export default {
  name: "Navbar",
  components: { LanguageSwitch },
  data() {
    return {
      showMobileMenu: false,
      showNavBar: true,
      prevScrollPos: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      const nav = this.$refs.nav;
      const burger = this.$refs.burger;

      nav.classList.toggle("is-active");
      burger.classList.toggle("is-active");
      this.showMobileMenu = !this.showMobileMenu;
    },
    handleScroll() {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollPos > this.prevScrollPos) {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }

      this.prevScrollPos = currentScrollPos;
    },
    scrollToSection(sectionId, toggleMenu = true) {
      const sectionPosition = document.getElementById(sectionId).offsetTop;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });

      if (toggleMenu && window.innerWidth <= 720) {
        this.toggleMobileMenu();
      }
    },
  },
};
</script>
  
<style scoped lang="scss">
@mixin navLinkTransitionDelay($index) {
  &:nth-child(#{$index}) {
    transition-delay: 0.3s * ($index - 1);
  }
}
.navBarContainer {
  position: fixed;
  top: -7em;
  z-index: 99;
  background-color: $primary;
  transition: all 0.2s;
  overflow: visible;

  &.slideIn {
    transform: translateY(7em);
  }
  &.slideOut {
    transform: translateY(-7em);
    transition: all 0.2s ease-in-out;
  }

  .navBar {
    @include flex-container(row, space-between, center, nowrap);
    margin: 0 auto;
    min-height: 7vh;
    padding: 0.2em $content-x-padding;

    .logo {
      @include flex-container(row, center, center);
      cursor: pointer;
      margin-right: 1em;
      width: 4.5em;

      img {
        width: 100%;
      }

      h4 {
        font-family: "Philosopher", sans-serif;
        font-size: 1.1rem;

        span {
          font-family: "Philosopher", sans-serif;
          color: $white;
        }
      }
    }

    nav {
      @include flex-container(column, center, center, wrap);
      gap: 1.6em;
      height: 0;
      width: 100%;
      position: fixed;
      top: 7vh;
      left: 0;
      background-color: $primary;
      transition: all 0.5s ease-in-out;
      opacity: 0;
      visibility: hidden;

      @include md {
        @include flex-container(row, space-between, center, nowrap);
        gap: 0.4em;
        height: auto;
        position: static;
        background-color: transparent;
        width: auto;
        opacity: 1;
        visibility: visible;
      }

      &.is-active {
        height: 93vh;
        opacity: 1;
        visibility: visible;

        .navlink,
        .languageSwitch {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
          @include navLinkTransitionDelay(1);
          @include navLinkTransitionDelay(2);
          @include navLinkTransitionDelay(3);
          @include navLinkTransitionDelay(4);
          @include navLinkTransitionDelay(5);
          @include navLinkTransitionDelay(6);
        }
      }

      .languageSwitch {
        margin-bottom: 2em;

        @include md {
          order: 2;
          margin: 0 0 0 1em;
        }
      }
      .navlink {
        display: block;
        padding: 0.2em;
        color: $secondary;
        opacity: 0;
        font-family: "Asap", sans-serif;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;

        @include md {
          opacity: 1;
        }
      }
    }
  }
}
</style>
