<template>
  <div :class="['iconContainer', { small: isSmall }]">
    <component :is="icon.iconComponent" class="icon" />
    <p>{{ icon.name }}</p>
  </div>
</template>
      
<script>
export default {
  name: "IconBubble",
  props: {
    icon: {
      type: Object,
      required: true,
    },
    isSmall: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
      
<style scoped lang="scss">
.iconContainer {
  @include flex-container(column, center, center);
  gap: 0.2em;
  padding: 0.2em;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  background-color: $background-light;
  text-align: center;

  .icon {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.6rem;
  }
  &.small {
    width: 2.5em;
    height: 2.5em;
    cursor: pointer;

    .icon {
      display: block;
      font-size: 1.2rem;
      fill: $secondary-light;
      transition: 0.6s;
    }

    &:hover .icon {
      fill: $secondary-light2;
    }
  }
}
</style>
      