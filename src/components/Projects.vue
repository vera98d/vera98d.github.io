<template>
  <section id="projects" class="mainContainer">
    <div class="curve" aria-hidden="true">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="contentContainer">
      <h1 data-aos="flip-left">{{ $t("projects.title") }}</h1>
      <div class="cardsContainer">
        <ProjectCard
          v-for="(project, index) in projectsInfo"
          :key="index"
          :projectInfo="project"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projectCardDetails: {
        movieDbNext: {
          demoLink: "https://movie-app-nextjs-three.vercel.app/",
          repoLink: "https://github.com/vera98d/movie-app-nextjs",
          imgName: "projects-the-movie-db-next.png",
          technologies: [
            "Create Next App",
            "Next.js",
            "JavaScript",
            "styled-components",
            "react-spinners-kit",
            "react-responsive-carousel",
            "react-icons",
            "testing-library",
            "jest",
          ],
        },
        movieDbReact: {
          demoLink: "https://vera98d.github.io/movie-app-react/",
          repoLink: "https://github.com/vera98d/movie-app-react",
          imgName: "projects-the-movie-db-react.png",
          technologies: [
            "Create React App",
            "React",
            "JavaScript",
            "styled-components",
            "React Router",
            "react-spinners-kit",
            "react-responsive-carousel",
            "react-icons",
          ],
        },
        millionaires: {
          demoLink: "https://vera98d.github.io/Millionaries/",
          repoLink: "https://github.com/vera98d/Millionaries",
          imgName: "projects-milionaires.png",
          technologies: ["HTML", "CSS", "JavaScript", "opentdb"],
        },
        travelApp: {
          demoLink: "https://vera98d.github.io/provinces",
          repoLink: "https://github.com/vera98d/TravelApp",
          imgName: "projects-travel-app.png",
          technologies: [
            "Create React App",
            "React",
            "JavaScript",
            "styled-components",
            "React Testing Library",
            "Firebase",
            "Cloudinary",
            "jest",
          ],
        },
        moveUs: {
          demoLink: "https://vera98d.github.io/MoveUs/",
          repoLink: "https://github.com/vera98d/MoveUs",
          imgName: "projects-move-us.png",
          technologies: [
            "Create React App",
            "React",
            "TypeScript",
            "styled-components",
            "ESLint",
            "React Router",
            "React Context",
            "React Hook Form",
          ],
        },
        recipesApp: {
          demoLink: "https://vera98d.github.io/Recipes-app/",
          repoLink: "https://github.com/vera98d/Recipes-app",
          imgName: "projects-recipes-app.png",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "spoonacular API",
            "jest",
          ],
        },
      },
      projectsInfo: [],
    };
  },
  methods: {
    generateProjectInfoContent() {
      const locale = this.$i18n.locale;
      return Object.keys(this.$i18n.messages[locale].projects.projectsInfo).map(
        (key) => {
          return {
            key,
            title: `projects.projectsInfo.${key}.title`,
            description: `projects.projectsInfo.${key}.description`,
            ...this.projectCardDetails[key],
          };
        }
      );
    },
  },
  mounted() {
    this.projectsInfo = this.generateProjectInfoContent();
  },
};
</script>

<style scoped lang='scss'>
#projects {
  .contentContainer {
    margin-top: 3em;

    h1 {
      text-align: center;
      margin-bottom: 1em;
    }
    .cardsContainer {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: minmax(200px auto);
      grid-gap: 2.5em 1.6em;

      @include lg {
        grid-template-columns: repeat(2, 1fr);
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

    svg {
      position: relative;
      display: block;
      width: 100%;
      height: 3em;
    }

    .shape-fill {
      fill: $primary-light;
    }
  }
}
</style>
