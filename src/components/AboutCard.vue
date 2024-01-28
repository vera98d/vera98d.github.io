<template>
  <div class="card">
    <div class="titleContainer">
      <component :is="iconComponent" class="icon"></component>
      <h3>{{ title }}</h3>
    </div>
    <p v-html="description"></p>
  </div>
</template>
  
<script>
export default {
  name: "AboutCard",
  props: {
    iconComponent: {
      type: Function,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
  
<style scoped lang="scss">
.card {
  border-bottom: 3px solid $priary-dark;
  border-right: 3px solid $priary-dark;
  border-radius: 0.8em;
  padding: 0.8em;
  .titleContainer {
    @include flex-container(row, left, center);
    gap: 0.8em;
    margin-bottom: 0.6em;

    h3 {
      color: $priary-dark;
    }
    .icon {
      font-size: 1.4rem;
      fill: $priary-dark;
    }
  }
}
</style>
  