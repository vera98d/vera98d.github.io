<template>
  <div class="projectCard">
    <img :src="imagePath()" :alt="altText()" data-aos="fade-up" />
    <h3 class="title" data-aos="fade-up">{{ $t(projectInfo.title) }}</h3>
    <p class="description" data-aos="fade-up" data-aos-delay="100">
      {{ $t(projectInfo.description) }}
    </p>
    <ul
      class="technologies"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <li
        class="technology"
        v-for="(technology, index) in projectInfo.technologies"
        :key="index"
      >
        {{ technology }}
      </li>
    </ul>
    <div class="btnContainer">
      <a
        :href="projectInfo.repoLink"
        class="button repoBtn"
        target="_blank"
        data-aos="zoom-in"
        data-aos-duration="1000"
        >{{ $t("projects.repoBtn") }}</a
      >
      <a
        :href="projectInfo.demoLink"
        class="button demoBtn"
        target="_blank"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        >{{ $t("projects.demoBtn") }}</a
      >
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ProjectCard",
  props: {
    projectInfo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imagePath() {
      if (this.projectInfo.imgName === "") {
        return "";
      }
      return require(`../assets/${this.projectInfo.imgName}`);
    },
    altText() {
      if (this.projectInfo.title === "") {
        return `Screenshoot of application view`;
      }
      return `Screenshoot of application ${this.projectInfo.title}`;
    },
  },
};
</script>
  
<style scoped lang="scss">
.projectCard {
  @include flex-container(column, stretch, center, nowrap);
  padding: 1em;
  gap: 0.6em;
  position: relative;
  overflow: visible;
  z-index: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 80%;
    bottom: 0;
    left: 0;
    border-radius: 1em;
    background-color: $purple-light;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::before {
    background-color: $purple-light;
  }

  img {
    width: 80%;
    max-width: 430px;
  }

  .description {
    text-align: center;
    flex-grow: 1;
  }

  .btnContainer {
    justify-self: flex-end;
    @include flex-container(row, center, end, wrap);
    gap: 1em;
    margin-top: 0.8em;
  }

  .technologies {
    @include flex-container(row, center, center, wrap);
    gap: 0.4em;
    flex-grow: 2;
    margin-top: 1em;

    .technology {
      font-size: 0.6rem;
      border: 3px solid $secondary-light;
      border-radius: 1em;
      padding: 0.2em 0.4em;
    }
  }
}
</style>
  