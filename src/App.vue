<template>
  <div class="Main">
    <!-- <ParagraphComp
      h1="H1 Example"
      h2="H2 Example"
      h3="H3 Example"
      h4="H4 Example"
      p="Paragraph Example with link example."
    /> -->
    <SidebarOptionOne />
  </div>
</template>

<script>
// import NavOptionOne from "./components/NavOptionOne.vue";
// import ParagraphComp from "./components/ParagraphComp.vue";
import SidebarOptionOne from "./components/SidebarOptionOne.vue";
export default {
  name: "App",
  components: {
    // ParagraphComp,
    SidebarOptionOne,
  },
};
</script>

<style>
.Main {
}
</style>
