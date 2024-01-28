<template>
  <div class="custom-select" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected.toUpperCase() }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        class="item"
        v-for="(language, i) of languages"
        :key="i"
        @click="selectLanguage(language)"
      >
        {{ language.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script>
import { supportLocales } from "../vue-i18n";

export default {
  name: "LanguageSwitch",
  data() {
    return {
      languages: supportLocales,
      selected: this.$i18n.locale,
      open: false,
    };
  },
  methods: {
    selectLanguage(language) {
      this.selected = language;
      this.$i18n.locale = language;
      this.open = false;
    },
    getSavedLocale() {
      const savedLocale = localStorage.getItem("selectedLocale");
      return savedLocale && supportLocales.includes(savedLocale)
        ? savedLocale
        : "pl";
    },
    setLocale(newLocale) {
      localStorage.setItem("selectedLocale", newLocale);
    },
  },
  watch: {
    selected(val) {
      this.setLocale(val);
      this.$i18n.locale = val;
    },
  },
  beforeMount() {
    this.selected = this.getSavedLocale();
  },
};
</script>


<style scoped lang="scss">
.custom-select {
  position: relative;
  outline: none;
  text-align: left;
  line-height: 1rem;
  min-width: 35px;
}

.selected {
  padding: 0.2em 0.6em 0.2em 0.2em;
  background-color: $primary;
  border: 3px solid $secondary;
  border-radius: 0.4em;
  font-weight: 700;
  font-size: 0.85rem;
  color: $secondary;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
}

.selected.open {
  border: 3px solid $secondary;
  border-radius: 0.4em 0.4em 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 4px;
  width: 0;
  height: 0;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-color: $secondary transparent transparent transparent;
}

.items {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 0.85rem;
  color: $primary;
  background-color: $secondary;
  border-radius: 0px 0px 0.2em 0.2em;
  overflow: hidden;
  max-height: 200%;
  transition: max-height 0.5s;
}

.item {
  padding: 0.2em 0 0.2em 0.2em;
  color: $white;
  cursor: pointer;
  user-select: none;
}

.item:hover {
  background-color: $secondary-light2;
}

.selectHide {
  max-height: 0;
}
</style>