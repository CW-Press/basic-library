import { createApp } from "vue";

const app = createApp({});

const Components = {};

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export default Components;
