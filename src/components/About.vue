<template>
  <section id="about" class="mainContainer">
    <div class="wave" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="contentContainer">
      <h1 data-aos="flip-left">{{ $t("about.title") }}</h1>
      <div class="cardsContainer">
        <AboutCard
          v-for="(card, index) in cardsContent"
          :key="index"
          :iconComponent="card.icon"
          :title="$t(card.title)"
          :description="$t(card.description)"
          data-aos="fade-up"
          data-aos-delay="100"
        />
      </div>
    </div>
  </section>
</template>
  
<script>
import AboutCard from "./AboutCard.vue";
import {
  CaEducation,
  AnOutlinedRead,
  GlWork,
  AnOutlinedFundProjectionScreen,
  PhLightGameController,
  BsPeople,
} from "@kalimahapps/vue-icons";

export default {
  name: "About",
  components: {
    AboutCard,
  },
  data() {
    return {
      iconMappings: {
        experience: GlWork,
        education: CaEducation,
        growth: AnOutlinedRead,
        interests: PhLightGameController,
        approach: AnOutlinedFundProjectionScreen,
        softSkills: BsPeople,
      },
      cardsContent: [],
    };
  },
  methods: {
    generateCardsContent() {
      const locale = this.$i18n.locale;
      return Object.keys(this.$i18n.messages[locale].about.cardsContent).map(
        (key) => {
          return {
            key,
            icon: this.iconMappings[key],
            title: `about.cardsContent.${key}.title`,
            description: `about.cardsContent.${key}.description`,
          };
        }
      );
    },
  },
  mounted() {
    this.cardsContent = this.generateCardsContent();
  },
};
</script>
  
<style scoped lang='scss'>
#about {
  padding-bottom: 3.5em;

  .contentContainer {
    margin-top: 4.5em;

    h1 {
      text-align: center;
      margin-bottom: 1.2em;
    }

    .cardsContainer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: minmax(200px auto);
      grid-gap: 1.4em 1.2em;

      @include lg {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2.6em 2.4em;
      }
    }
  }

  .wave {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 4.5em;
    }
    .shape-fill {
      fill: $primary;
    }
  }
}
</style>