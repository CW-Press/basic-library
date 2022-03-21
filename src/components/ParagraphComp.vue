<template>
  <div class="contentComp">
    <h1>{{ h1 }}</h1>
    <h2>{{ h2 }}</h2>
    <h3>{{ h3 }}</h3>
    <h4>{{ h4 }}</h4>
    <p>{{ p }}</p>
    <ul>
      <li>List Example</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    h1: String,
    h2: String,
    h3: String,
    h4: String,
    p: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.contentComp {
  h1 {
    font-size: 29px;
    font-weight: 700;
    margin: 0;
  }
  h2 {
    font-size: 25px;
    font-weight: 700;
    margin: 0;
  }
  h3 {
    font-size: 21px;
    font-weight: 600;
    margin: 0;
  }
  h4 {
    font-size: 17px;
    font-weight: 600;
    margin: 0;
  }
}
</style>
