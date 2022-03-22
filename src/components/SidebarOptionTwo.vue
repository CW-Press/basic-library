<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import { propValidtion } from "../Modules/propValidtion";

export default defineComponent({
  name: "SidebarOptionTwo",
  props: {
    content: { type: Array, required: true },
  },
  setup(props) {
    const pageContent = ref(propValidtion(props.content));
    const toggleOpen = ref("");

    const thisFunction = () => {
      for (let i = 0; i < pageContent.value.length; i++) {
        console.log("pageContent.value[i].name", pageContent.value[i]);
      }
    };
    const openMenu = (name: string) => {
      if (toggleOpen.value === name) {
        toggleOpen.value = "";
        return;
      }
      toggleOpen.value = name;
    };
    const toggleMenu = (currentItem: any) => {
      currentItem.open = !currentItem.open;
    };

    onMounted(() => {
      thisFunction();
    });

    return {
      pageContent,
      toggleOpen,

      openMenu,
      toggleMenu,
    };
  },
});
</script>

<template>
  <div class="sidebarOneComp">
    <div class="sidebarOneDesktop">
      <div class="sidebar">
        <div class="loopClass" v-for="item in pageContent" :key="item.name">
          <div class="heading" @click="openMenu(item.name)">
            <h2>{{ item.name }}</h2>
            <i class="fa-solid fa-chevron-down" :class="{ open: toggleOpen === item.name }"></i>
          </div>
          <div class="topSection" :class="{ open: toggleOpen === item.name }">
            <a v-for="page in item.children" :key="page.name" :href="page.path">
              <p v-html="page.name"></p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebarOneDesktop">
      <div class="sidebar">
        <div class="loopClass" v-for="item in pageContent" :key="item.name">
          <div class="heading" @click="toggleMenu(item)">
            <h2>{{ item.name }}</h2>
            <i class="fa-solid fa-chevron-down" :class="{ open: item.open }"></i>
          </div>
          <div class="topSection" :class="{ open: item.open }">
            <a v-for="page in item.children" :key="page.name" :href="page.path">
              <p v-html="page.name"></p>
            </a>
          </div>
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

      .heading {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: baseline;
        justify-content: space-between;
        color: var(--text-alt);
        cursor: pointer;
        i {
          font-size: 10px;
          color: var(--text-alt);
          transition: 0.4s ease all;
        }
        i.open {
          transform: rotate(-180deg);
        }
        h2 {
          font-size: 17px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 10px;
        }
      }

      .topSection {
        margin-bottom: 30px;
        color: var(--text-dark);
        max-height: 0px;
        transition: 0.8s ease all;
        overflow: hidden;

        p,
        a {
          font-size: 13px;
          font-weight: 400;
          margin: 0;
          margin-bottom: 5px;
          text-decoration: none;
          color: var(--text-dark);
        }
        p:hover {
          cursor: pointer;
          color: var(--cta);
        }
      }
      .topSection.open {
        max-height: 25vh;
      }
      .loopClass:last-child {
        .topSection {
          margin-bottom: 0px;
        }
      }
      .bottomSection {
        margin-top: 10px;
        margin-right: 76px;
        color: var(--text-dark);
        margin-bottom: 40px;
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
        }
      }
    }
  }
}
</style>
