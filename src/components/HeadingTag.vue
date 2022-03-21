<template>
  <div class="headingTag">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HeadingTag",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
.headingTag {
  h1 {
    font-size: 20px;
  }
}
</style>
