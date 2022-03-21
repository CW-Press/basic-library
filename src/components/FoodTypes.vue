<template>
  <div class="foodTypesComp">
    <div class="foodTypesDesktop">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title">
              <h2>
                {{ headerTag }}
              </h2>
              <p>
                {{ descriptionTag }}
              </p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image1" alt="" />
              <p>{{ itemDesc1 }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image2" alt="" />
              <p>{{ itemDesc2 }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image3" alt="" />
              <p>{{ itemDesc3 }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image4" alt="" />
              <p>{{ itemDesc4 }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image5" alt="" />
              <p>{{ itemDesc5 }}</p>
            </div>
          </div>
          <div class="col-2">
            <div class="foodType">
              <img :src="$props.image6" alt="" />
              <p>{{ itemDesc6 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerTag: String,
    descriptionTag: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    itemDesc1: String,
    itemDesc2: String,
    itemDesc3: String,
    itemDesc4: String,
    itemDesc5: String,
    itemDesc6: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.foodTypesComp {
  .foodTypesDesktop {
    .title {
      margin-top: 160px;
      text-align: center;
      h2 {
        font-size: 48px;
        color: var(--text);
        font-weight: 700;
        margin: 0;
        margin-bottom: 20px;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        color: var(--text);
        margin: 0;
        color: var(--text-dark);
      }
    }
    .foodType {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: center;
      margin-top: 90px;
      margin-bottom: 80px;
      img {
        margin-bottom: 46px;
        max-height: 260px;
        border-radius: 20px;
      }
      p {
        font-size: 18px;
        font-weight: 700;
        margin: 0;
        color: var(--text);
      }
    }
  }
}
</style>
