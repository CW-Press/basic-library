<template>
  <div id="App">
    <HeadingTag msg="Example 1" />
    <FlockBanner />
    <FoodTypes
      headerTag="Enchilados"
      descriptionTag="Food prepared the way you want not how you expect"
      image1="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      image2="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      image3="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      image4="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      image5="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      image6="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      itemDesc1="Housing"
      itemDesc2="Pipe"
      itemDesc3="Clean"
      itemDesc4="Roofing"
      itemDesc5="Pizza"
      itemDesc6="Plumbing"
    />
    <BookingInstructions
      imageOne="https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <FoodFooter />
  </div>
</template>

<script>
import HeadingTag from "./components/HeadingTag.vue";
import FlockBanner from "./components/TopBanner.vue";
import FoodTypes from "./components/FoodTypes.vue";
import FoodFooter from "./components/FoodFooter.vue";
import BookingInstructions from "./components/BookingInstructions.vue";

export default {
  name: "App",
  components: {
    HeadingTag,
    FlockBanner,
    FoodTypes,
    FoodFooter,
    BookingInstructions,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
