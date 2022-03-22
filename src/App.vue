<template>
  <div class="Main">
    <!-- <ParagraphComp
      h1="H1 Example"
      h2="H2 Example"
      h3="H3 Example"
      h4="H4 Example"
      p="Paragraph Example with link example."
    /> -->
    <component is="SidebarOptionOne" :content="sidebarContent" />
    <component is="SecondarySidebar" :content="sidebarContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SidebarOptionOne from "./components/SidebarOptionOne.vue";
import SecondarySidebar from "./components/SidebarOptionTwo.vue";

// import SidebarOptionTwo from "./components/SidebarOptionTwo.vue";

// import NavOptionOne from "./components/NavOptionOne.vue";
// import ParagraphComp from "./components/ParagraphComp.vue";

export default defineComponent({
  name: "App",
  components: {
    // ParagraphComp,
    SidebarOptionOne,
    SecondarySidebar,
    // SidebarOptionTwo,
  },
  setup() {
    const sidebarContent = [
      {
        name: "Getting Started",
        children: [
          {
            name: "Introduction",
            path: "/",
          },
          {
            name: "Quick Start",
            path: "/lazy",
          },
        ],
      },
      {
        name: "Essentials",
        children: [
          {
            name: "Creating an Application",
            path: "/herer",
          },
          {
            name: "Template Syntax",
            path: "/lazy",
          },
          {
            name: "Reactivity Fundamentals",
            path: "/lazy",
          },
          {
            name: "Computed Properties",
            path: "/lazy",
          },
          {
            name: "Class and Style Bindings",
            path: "/lazy",
          },
          {
            name: "Conditional Rendering",
            path: "/lazy",
          },
        ],
      },
    ];

    return {
      sidebarContent,
    };
  },
});
</script>

<style>
.Main {
}
</style>
