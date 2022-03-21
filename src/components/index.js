import { createApp } from "vue";
import FlockButton from "./SimpleButton.vue";
import FlockBanner from "./TopBanner.vue";
import HeadingTag from "./HeadingTag.vue";
import FoodTypes from "./FoodTypes.vue";

const app = createApp({});

const Components = {
  FlockButton,
  FlockBanner,
  HeadingTag,
  FoodTypes,
};

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export default Components;
