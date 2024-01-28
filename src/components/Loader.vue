<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped lang="scss">
.loader {
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: radial-gradient(farthest-side, $secondary-light 95%, #0000) 50% 0/12px
      12px no-repeat,
    radial-gradient(
        farthest-side,
        #0000 calc(100% - 5px),
        $secondary-light calc(100% - 4px)
      )
      content-box;
  animation: loadingAnimation 2s infinite;
}
@keyframes loadingAnimation {
  to {
    transform: rotate(1turn);
  }
}
</style>


