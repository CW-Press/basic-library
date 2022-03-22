<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SidebarOptionOne",
  props: {
    content: { type: Array, required: true },
  },
  setup(props) {
    const pageContent = props.content;

    const thisFunction = () => {
      for (let i = 0; i < pageContent.length; i++) {
        console.log("pageContent[i].name", pageContent[i]);
      }
    };

    onMounted(() => {
      thisFunction();
    });

    return {
      pageContent,
    };
  },
});
</script>

<template>
  <div class="sidebarOneComp">
    <div class="sidebarOneDesktop">
      <div class="sidebar">
        <div class="topSection" v-for="item in pageContent" :key="item.name">
          <h2 v-html="item.name"></h2>
          <p v-for="page in item.children" :key="page.name" v-html="page.name"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebarOneComp {
  .sidebarOneDesktop {
    .sidebar {
      width: 350px;
      background-color: var(--background);
      padding: 20px 40px;
      border: 1px solid #ffffff;

      .topSection {
        color: var(--text-alt);
        margin-bottom: 30px;

        h2 {
          font-size: 17px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 10px;
        }
        p {
          font-size: 13px;
          font-weight: 400;
          margin: 0;
          margin-bottom: 5px;
          color: var(--text-dark);
        }
        p:hover {
          cursor: pointer;
          color: var(--cta);
        }
      }
      .topSection:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
