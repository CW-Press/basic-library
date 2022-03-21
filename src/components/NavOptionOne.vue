<script>
import { ref } from "vue";
import vSelect from "vue-select";

import "vue-select/dist/vue-select.css";

export default {
  name: "Component-Navigation",
  components: {
    vSelect,
  },
  setup() {
    const originalVersion = ref("v0.0.1^");
    const selectedVersion = ref("v0.0.1^");
    const darkTheme = ref(true);

    const paths = [
      {
        name: "Guide",
        path: "/",
        options: {
          target: "",
        },
        children: null,
      },
      {
        name: "Examples",
        path: "/examples",
        options: {
          target: "",
        },
        children: null,
      },
      {
        name: "Playground",
        path: "https://playground.cwpress.app",
        options: {
          target: "_blank",
        },
        children: null,
      },
      {
        name: "About",
        path: "",
        options: {
          target: "",
        },
        children: [
          {
            name: "What is Clockwork Press",
            path: "/about/what-is-clockwork-press",
          },
        ],
      },
      {
        name: "Sponsor",
        path: "/sponsor",
        options: {
          target: "",
        },
        children: null,
      },
    ];

    const versions = ["v1.0.0^", "v0.5.0^", "v0.0.1^"];

    const testChange = () => {
      if (originalVersion.value !== selectedVersion.value) {
        console.log("New version detected");
      }
    };
    const toggleDarkTheme = () => {
      darkTheme.value = !darkTheme.value;
    };

    return {
      originalVersion,
      selectedVersion,
      paths,
      versions,
      darkTheme,

      testChange,
      toggleDarkTheme,
    };
  },
};
</script>

<template>
  <nav class="Component-Navigation">
    <div class="branding">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png?20211112075054"
        alt=""
      />
      <h1>Clockwork Press</h1>
    </div>
    <div class="search">
      <span class="material-icons-outlined">search</span>
      <input type="text" name="search" id="search" placeholder="Search cwpress.app" />
    </div>
    <div class="paths">
      <a v-for="path in paths" :key="path.name" :href="path.path">{{ path.name }}</a>
    </div>
    <div class="options">
      <div class="version">
        <vSelect :options="versions" :searchable="false" v-model="selectedVersion" :selected="testChange()" />
      </div>
      <div class="themeToggle" @click="toggleDarkTheme()">
        <div class="shape" :class="{ dark: darkTheme, light: !darkTheme }"></div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav.Component-Navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px 40px;

  .branding {
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      max-width: 60px;
      max-height: 20px;
      object-fit: contain;
      object-position: left;
    }
    h1 {
      font-size: 17px;
      font-weight: 500;
      line-height: 17px;
      color: var(--cta);
      margin-bottom: 0;
    }
  }
  .search {
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: center;

    span {
      font-size: 15px;
      color: var(--text);
      margin-right: 2px;
      transform: translateY(-1px);
    }

    input {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 13px;
      font-weight: 400;
      color: var(--text);
    }
  }
  .paths {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
      font-size: 13px;
      color: var(--text);
      text-decoration: none;
      margin-right: 20px;
    }
    a:last-child {
      margin-right: 0;
    }
  }
  .options {
    width: fit-content;
    height: 20px;
    display: flex;
    align-items: center;
    margin-left: 40px;

    .version {
      .v-select {
        .vs__dropdown-toggle {
          border-color: var(--text);
          padding: 0;

          .vs__selected-options {
            span.vs__selected {
              font-size: 13px;
              font-weight: 400;
              color: var(--text);
              padding: 4px 6px;
              padding-right: 9px;
              margin: 0;
            }
            .vs__search {
              display: none;
            }
          }
          .vs__actions {
            padding: 4px 4px;
            padding-left: 0;

            svg.vs__open-indicator {
              fill: var(--text);
              transform: scale(0.7);
            }
            .vs__clear {
              display: none;
            }
          }
        }
      }
      .v-select.vs--open {
        .vs__dropdown-toggle {
          .vs__selected-options {
            span.vs__selected {
              position: relative;
            }
          }
        }
      }
    }
    .themeToggle {
      position: relative;
      width: 46px;
      height: 22px;
      background-color: var(--background);
      border: solid 1px var(--text);
      border-radius: 20px;
      margin-left: 20px;
      cursor: pointer;

      .shape {
        position: absolute;
        top: 0;
        left: 8px;
        bottom: 0;
        margin: auto;
        width: 8px;
        height: 8px;
        border: solid 1px var(--text);
        box-shadow: -2.1px 2.1px 0 0.7px rgba(255, 255, 255, 0);
        border-radius: 50%;
        transition: 0.5s ease all;
      }
      .shape:after {
        content: "";
        position: absolute;
        top: 0;
        left: -4px;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 14px;
        height: 14px;
        border: dotted 1px var(--text);
        border-radius: 50%;
        transition: 0.5s ease all;
      }
      .shape.dark {
        width: 12px;
        height: 12px;
        top: -5px;
        left: inherit;
        right: 3px;
        box-shadow: -2.1px 2.1px 0 0.7px rgba(255, 255, 255, 1);
        border: 0px;
        border-radius: 50%;
      }
      .shape.dark:after {
        width: 12px;
        height: 12px;
        left: 0;
        border: none;
      }
    }
  }
}
</style>
