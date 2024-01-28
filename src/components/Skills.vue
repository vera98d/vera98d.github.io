<template>
  <section id="skills" class="mainContainer">
    <div class="curve" aria-hidden="true">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 130"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>

    <div class="contentContainer">
      <h1 class="title" data-aos="fade-right">{{ $t("skills.title") }}</h1>
      <div class="imgContainer" data-aos="fade-right" data-aos-delay="200">
        <img src="../assets/programming.svg" alt="Picture of web developer" />
      </div>
      <div class="icons">
        <IconBubble
          v-for="(icon, index) in icons"
          :key="index"
          :icon="icon"
          data-aos="zoom-in"
          data-aos-delay="500"
        />
      </div>
    </div>
  </section>
</template>
  
<script>
import {
  AnFilledHtml5,
  AkJavascriptFill,
  AkTypescriptFill,
  BxCss3,
  CoBrandSass,
  SiTestinglibrary,
  AkVueFill,
  CaSql,
  SiAdobephotoshop,
  AkNextjsFill,
  AkGithubFill,
  BsGit,
  AkReactFill,
  AkBootstrapFill,
  CoBrandJest,
} from "@kalimahapps/vue-icons";
import IconBubble from "./IconBubble.vue";

export default {
  name: "Skills",
  components: {
    IconBubble,
  },
  data() {
    return {
      icons: [
        { name: "React", iconComponent: AkReactFill },
        { name: "Next.js", iconComponent: AkNextjsFill },
        { name: "Vue.js", iconComponent: AkVueFill },
        { name: "JavaScript", iconComponent: AkJavascriptFill },
        { name: "TypeScript", iconComponent: AkTypescriptFill },
        { name: "HTML", iconComponent: AnFilledHtml5 },
        { name: "CSS", iconComponent: BxCss3 },
        { name: "SASS", iconComponent: CoBrandSass },
        { name: "Bootstrap", iconComponent: AkBootstrapFill },
        { name: "Testing library", iconComponent: SiTestinglibrary },
        { name: "Jest", iconComponent: CoBrandJest },
        { name: "SQL", iconComponent: CaSql },
        { name: "GitHub", iconComponent: AkGithubFill },
        { name: "GIT", iconComponent: BsGit },
        { name: "Photoshop", iconComponent: SiAdobephotoshop },
      ],
    };
  },
};
</script>
  
<style lang="scss" scoped>
#skills {
  background: $primary-light;
  .contentContainer {
    display: grid;
    grid-template-columns: c;
    grid-auto-rows: minmax(200px auto);
    grid-template-areas:
      "title title title title"
      "imgContainer imgContainer imgContainer imgContainer"
      "icons icons icons icons";
    justify-items: center;
    align-items: center;
    grid-gap: 3em 0;
    width: 100%;
    padding: 2em $content-x-padding 3em;
    margin-top: 4em;

    @include lg {
      grid-template-columns: 3.5fr repeat(2, 1.5fr);
      grid-template-areas:
        "title icons icons"
        "imgContainer icons icons ";
      grid-gap: 2em 2.5em;
    }

    .title {
      grid-area: title;
      margin-right: 2em;
    }

    .imgContainer {
      grid-area: imgContainer;
      min-width: 30%;
      max-width: 85%;

      @include md-landscape {
        max-width: 70%;
      }

      img {
        width: 100%;
      }
    }
    .icons {
      min-width: 100%;
      grid-area: icons;
      display: grid;
      grid-template-columns: auto auto auto auto;
      justify-items: center;
      grid-gap: 1em;

      @include sm {
        grid-template-columns: auto auto auto auto auto;
      }
      @include lg {
        grid-template-columns: auto auto auto auto;
      }

      .iconContainer {
        @include flex-container(column, center, center);
        gap: 0.2em;
        padding: 0.2em;
        width: 4em;
        height: 4em;
        border-radius: 50%;
        background-color: $background-light;
        text-align: center;

        p {
          font-size: 0.6rem;
        }

        .icon {
          display: block;
          font-size: 1.3rem;
        }
      }
    }
  }
}

.curve {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  background: $white;
  height: fit-content;

  svg {
    display: block;
    width: 100%;
    height: 4em;
  }

  .shape-fill {
    fill: $primary-light;
  }
}
</style>