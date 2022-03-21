<template>
  <div class="titleComp">
    <div class="titleDesktop">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.titleComp {
  .titleDesktop {
    h2 {
      font-size: 29px;
      font-weight: bold;
      color: var(--text-alt);
    }
  }
}
</style>
