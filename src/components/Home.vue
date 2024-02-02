<template>
  <section id="home" class="mainContainer">
    <div class="container contentContainer">
      <div class="text">
        <h3 class="test-res" data-aos="fade-up">{{ $t("home.h3") }}</h3>
        <h1 data-aos="fade-up">{{ $t("home.h1") }}</h1>
        <p data-aos="fade-up" data-aos-delay="400">
          {{ $t("home.p") }}
        </p>
        <button
          type="button"
          @click="scrollToAboutSection"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {{ $t("home.button") }}
        </button>
      </div>
      <div class="imgContainer" data-aos="fade-up" data-aos-duration="1000">
        <img src="../assets/developerImg.svg" :alt="$t('home.imgAltTxt')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollToAboutSection() {
      const sectionPosition = document.getElementById("about").offsetTop;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    },
  },
};
</script>

<style scoped lang="scss">
#home {
  background: $primary;
  position: relative;

  .container {
    @include flex-container(column, space-around, center, nowrap);
    min-height: 75vh;
    margin-top: 7vh;
    padding: 2em 0.6em;

    @include md {
      @include flex-container(row, space-between, center, nowrap);
      padding: 2em $content-x-padding 1.2em;
    }

    @include md-landscape {
      min-height: auto;
    }

    .text {
      @include flex-container(column, center, center, nowrap);
      order: 2;
      min-width: 20%;
      min-height: 25vh;

      button {
        margin-top: 1em;
      }

      p {
        display: none;
      }

      @include md {
        @include flex-container(column, space-around, start, nowrap);
        order: 0;
        max-width: 550px;

        p {
          display: block;
          margin: 1.5em 0;
        }
      }
    }

    .imgContainer {
      max-width: 95%;

      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
