<template>
  <Navbar />
  <Home />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <footer>{{ $t("footer") }}</footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Contact,
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  @include flex-container(column, start, center, wrap);

  footer {
    width: 100%;
    padding: $content-y-padding $content-x-padding;
    text-align: center;
    background: $primary-light;
    font-size: 0.8rem;
  }
}
</style>
