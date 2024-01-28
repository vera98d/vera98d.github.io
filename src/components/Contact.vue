<template>
  <section ref="targetRef" id="contact" class="mainContainer">
    <div class="curve" aria-hidden="true">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
      >
        <path
          d="M600,110.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>

    <div
      v-if="!isEmailSentSuccessfully && !isErrorWhileSendingEmail"
      class="contentContainer"
    >
      <div class="heading">
        <h1 data-aos="fade-right">{{ $t("contact.title") }}</h1>
        <h3 data-aos="fade-right">{{ $t("contact.subtitle") }}</h3>
      </div>
      <div
        class="imgContainer"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src="../assets/contact.svg" :alt="$t('contact.imgAltTxt')" />
      </div>
      <ContactForm
        @emailSentSuccess="handleEmailSentSuccess"
        @emailSentError="handleEmailSentError"
      />
      <div class="icons">
        <a
          v-for="(icon, index) in contactIcons"
          :key="index"
          :href="icon.linkTo"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <IconBubble :icon="icon" :isSmall="true"
        /></a>
      </div>
    </div>

    <div
      v-else-if="isEmailSentSuccessfully"
      :class="['contentContainer emailSentSucces']"
    >
      <div class="heading">
        <h1 data-aos="fade-right">{{ $t("contactMsgSentSuccess.title") }}</h1>
      </div>
      <div class="successMessage" data-aos="fade-left" data-aos-duration="1000">
        <h3>{{ $t("contactMsgSentSuccess.subtitle") }}</h3>
        <p>
          {{ $t("contactMsgSentSuccess.description") }}
        </p>
      </div>
      <div class="imgContainer" data-aos="fade-right" data-aos-duration="1000">
        <img
          src="../assets/email-success.svg"
          :alt="$t('contactMsgSentSuccess.imgAltTxt')"
        />
      </div>
      <div class="icons">
        <a
          v-for="(icon, index) in contactIcons"
          :key="index"
          :href="icon.linkTo"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <IconBubble :icon="icon" :isSmall="true"
        /></a>
      </div>
    </div>

    <div
      v-else-if="isErrorWhileSendingEmail"
      :class="['contentContainer emailSentError']"
    >
      <div class="heading">
        <h1 data-aos="fade-right">
          {{ $t("contactMsgSentError.title") }}
        </h1>
      </div>
      <div class="errorMessage" data-aos="fade-left" data-aos-duration="1000">
        <h3>{{ $t("contactMsgSentError.subtitle") }}</h3>
        <p>
          {{ $t("contactMsgSentError.description01") }}
          <a href="mailto:vera.webdev@gmail.com">vera.webdev@gmail.com</a>
          {{ $t("contactMsgSentError.description02") }}
        </p>
        <button type="button" value="Submit" @click="reset">
          {{ $t("contactMsgSentError.tryAgainBtn") }}
        </button>
      </div>
      <div class="imgContainer" data-aos="fade-right" data-aos-duration="1000">
        <img
          src="../assets/email-error.png"
          :alt="$t('contactMsgSentError.tryAgainBtn')"
        />
      </div>
      <div class="icons">
        <a
          v-for="(icon, index) in contactIcons"
          :key="index"
          :href="icon.linkTo"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <IconBubble :icon="icon" :isSmall="true"
        /></a>
      </div>
    </div>
  </section>
</template>
    
<script>
import { FaBandsLinkedinIn, GlGithub } from "@kalimahapps/vue-icons";
import IconBubble from "./IconBubble.vue";
import ContactForm from "./ContactForm.vue";

export default {
  name: "Contact",
  components: { IconBubble, ContactForm },
  data() {
    return this.initialState();
  },
  methods: {
    initialState() {
      return {
        contactIcons: [
          {
            iconComponent: FaBandsLinkedinIn,
            linkTo: "https://www.linkedin.com/in/weronikalutenko/",
          },
          { iconComponent: GlGithub, linkTo: "https://github.com/vera98d" },
        ],
        isEmailSentSuccessfully: false,
        isErrorWhileSendingEmail: false,
      };
    },

    reset() {
      Object.assign(this.$data, this.initialState());
    },

    handleEmailSentSuccess(value) {
      this.isEmailSentSuccessfully = value;
    },

    handleEmailSentError(value) {
      this.isErrorWhileSendingEmail = value;
    },
  },
};
</script>
    
<style scoped lang="scss">
#contact {
  min-height: 125vh;
  background: $primary-light;

  .contentContainer {
    display: grid;
    grid-template-columns: 2fr 1.8fr;
    grid-auto-rows: minmax(200px auto);
    width: 100%;
    justify-items: center;
    align-items: center;
    align-content: center;
    grid-template-areas:
      "heading heading"
      "imgContainer imgContainer"
      "form form"
      "icons icons";
    grid-gap: 0.5em 0;
    margin-top: 6em;
    padding-bottom: 0.4em;

    @include md {
      grid-template-areas:
        "heading heading"
        "imgContainer form"
        "icons form";
      grid-gap: 0 5.5em;
    }

    .heading {
      grid-area: heading;
      text-align: center;
      margin-bottom: 0.2em;
    }
    .imgContainer {
      grid-area: imgContainer;
      max-width: 70vw;

      @include lg {
        max-width: 800px;
      }

      img {
        width: 100%;
      }
    }

    .icons {
      grid-area: icons;
      align-self: start;
      @include flex-container(row, space-between, center);
      gap: 2em;
    }
  }
  .contentContainer.emailSentSucces {
    grid-template-columns: 1.2fr 2fr;
    grid-template-areas:
      "heading heading"
      "imgContainer imgContainer"
      "successMessage successMessage"
      "icons icons";
    grid-gap: 1em 4.5em;

    .successMessage {
      grid-area: successMessage;

      p {
        margin-top: 1.2em;
      }
    }

    @include md {
      grid-template-areas:
        "heading heading"
        "imgContainer successMessage"
        "icons icons";
    }
  }

  .contentContainer.emailSentError {
    grid-template-columns: 1.8fr 2fr;
    grid-template-areas:
      "heading heading"
      "imgContainer imgContainer"
      "errorMessage errorMessage"
      "icons icons";
    grid-gap: 1.5em 4.5em;

    .errorMessage {
      grid-area: errorMessage;

      p {
        margin: 1.2em 0;
      }

      a {
        color: $secondary-light;
        font-weight: bold;
      }
    }

    @include md {
      grid-template-areas:
        "heading heading"
        "imgContainer errorMessage"
        "icons icons";
    }
  }

  .curve {
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    line-height: 0;
    background: $white;

    svg {
      display: block;
      width: 100%;
      height: 5em;
    }
    .shape-fill {
      fill: $primary-light;
    }
  }
}
</style>
    