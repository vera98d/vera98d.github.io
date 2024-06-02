<template>
  <div v-if="loading" class="loading">
    <h4>{{ $t("contact.msgMsgSending") }}</h4>
    <Loader />
  </div>
  <form
    v-else
    id="contactForm"
    @submit.prevent="sendEmail()"
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    <label for="name">{{ $t("contact.labelName") }}</label>
    <input
      type="text"
      id="name"
      name="name"
      :placeholder="$t('contact.labelName')"
      v-model="formData.name"
      @input="validateName"
    />
    <p class="error">
      {{ fieldErrors.nameError || "" }}
    </p>

    <label for="email">{{ $t("contact.labelEmail") }}</label>
    <input
      type="email"
      id="email"
      name="email"
      :placeholder="$t('contact.placeholderEmail')"
      v-model="formData.email"
      @input="validateEmail"
    />
    <p class="error">
      {{ fieldErrors.emailError || "" }}
    </p>

    <label for="message">{{ $t("contact.labelMessage") }}</label>
    <textarea
      id="message"
      name="message"
      :placeholder="$t('contact.placeholderMessage')"
      rows="4"
      v-model="formData.message"
      @input="validateMessage"
    ></textarea>
    <p class="error">
      {{ fieldErrors.messageError || "" }}
    </p>

    <button type="submit" value="Submit" :disabled="!isFormValid">
      {{ $t("contact.submitBtn") }}
    </button>
  </form>
</template>
        
<script>
import * as emailjs from "@emailjs/browser";
import Loader from "./Loader.vue";

export default {
  name: "ContactForm",
  components: { Loader },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      fieldErrors: {
        nameError: "",
        emailError: "",
        messageError: "",
      },
      loading: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.fieldErrors.nameError === "" &&
        this.fieldErrors.emailError === "" &&
        this.fieldErrors.messageError === "" &&
        this.formData.name.length > 0 &&
        this.formData.email.length > 0 &&
        this.formData.message.length > 0
      );
    },
  },
  methods: {
    sendEmail() {
      this.loading = true;

      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_SERVICEID,
          process.env.VUE_APP_EMAIL_TEMPLATEID,
          "#contactForm",
          process.env.VUE_APP_EMAIL_PUBLICKEY
        )
        .then(
          (response) => {
            this.loading = false;
            this.$emit("emailSentSuccess", true);
          },
          (error) => {
            this.loading = false;
            this.$emit("emailSentError", true);
          }
        );
    },

    validateName() {
      if (this.formData.name.length <= 0) {
        this.fieldErrors.nameError = this.$t("contact.nameErrorBlank");
      } else {
        this.fieldErrors.nameError = "";
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.formData.email.length <= 0) {
        this.fieldErrors.emailError = this.$t("contact.emailErrorBlank");
      } else if (!emailRegex.test(this.formData.email)) {
        this.fieldErrors.emailError = this.$t("contact.emailErrorInvalid");
      } else {
        this.fieldErrors.emailError = "";
      }
    },
    validateMessage() {
      if (this.formData.message.length <= 0) {
        this.fieldErrors.messageError = this.$t("contact.messageErrorBlank");
      } else if (this.formData.message.length < 20) {
        this.fieldErrors.messageError = this.$t("contact.messageErrorInvalid");
      } else {
        this.fieldErrors.messageError = "";
      }
    },
  },
  watch: {
    "$i18n.locale": function () {
      if (this.formData.name) {
        this.validateName();
      }
      if (this.formData.email) {
        console.log("validating");
        this.validateEmail();
      }
      if (this.formData.message) {
        this.validateMessage();
      }
    },
  },
};
</script>
    
<style scoped lang="scss">
form {
  grid-area: form;
  width: 100%;
  max-width: 650px;
  margin-top: 1em;

  label {
    margin-top: 1em;
    font-weight: bold;
    font-size: 1rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin: 0.3em 0 0;
    padding: 0.5em 0.7em;
    border: 2px solid transparent;
    border-radius: 0.8em;
    color: $secondary;
    font-size: 0.8rem;
    transition: 0.5s;

    &::placeholder,
    &::placeholder {
      color: $placeholder-text;
    }

    &:focus {
      outline: none;
      border: 2px solid $secondary;
    }
  }

  textarea {
    resize: none;
  }

  button {
    margin-top: 0.2em;
  }

  .error {
    display: block;
    min-height: 1.4rem;
    padding: 0.2em 0.4em;
    margin-bottom: 0.2em;
    font-size: 0.7rem;
    color: $error-message;
  }
}

.loading {
  grid-area: form;
  @include flex-container(column, center, center, nowrap);
  gap: 2em;
  height: 100%;
  text-align: center;
}
</style>
    