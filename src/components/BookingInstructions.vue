<template>
  <div class="bookOnlineComp">
    <div class="bookOnlineDesktop">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="title">
              <h2>
                {{ headingTag }}
              </h2>
              <p>
                {{ descriptionTag }}
              </p>
              <div class="btn">Get it now</div>
            </div>
          </div>
          <div class="col-3">
            <div class="instruction">
              <div class="step">
                <p>01</p>
                <img :src="$props.imageOne" alt="" />
              </div>
              <p>
                {{ stepOne }}
              </p>
            </div>
            <div class="instruction">
              <div class="step">
                <p>03</p>
                <img :src="$props.imageTwo" alt="" />
              </div>
              <p>
                {{ stepTwo }}
              </p>
            </div>
          </div>
          <div class="col-3">
            <div class="instruction">
              <div class="step">
                <p>02</p>
                <img :src="$props.imageThree" alt="" />
              </div>
              <p>
                {{ stepThree }}
              </p>
            </div>
            <div class="instruction">
              <div class="step">
                <p>03</p>
                <img :src="$props.imageFour" alt="" />
              </div>
              <p>
                {{ stepFour }}
              </p>
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
    headingTag: String,
    descriptionTag: String,
    stepOne: String,
    imageOne: String,

    stepTwo: String,
    imageTwo: String,

    stepThree: String,
    imageThree: String,

    stepFour: String,
    imageFour: String,
  },

  setup() {},
};
</script>

<style lang="scss" scoped>
.bookOnlineComp {
  .bookOnlineDesktop {
    margin-top: 165px;
    margin-bottom: 103px;
    .title {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      h2 {
        font-size: 50px;
        font-weight: 700;
        color: var(--text);
        margin: 0;
        margin-bottom: 30px;
      }
      p {
        font-size: 20px;
        font-weight: 600;
        color: var(--text-dark);
        margin: 0;
        margin-bottom: 38px;
      }
      .btn {
        background-color: var(--red);
      }
    }
    .instruction {
      .step {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        align-items: flex-end;
        p {
          font-size: 36px;
          font-weight: 700;
          margin: 0;
          margin-right: 40px;
        }
        img {
          height: 50px;
          width: 50px;
        }
      }
      p {
        color: var(--text);
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        margin-left: 80px;
        margin-top: 20px;
      }
    }
    .instruction:nth-child(odd) {
      margin-bottom: 80px;
    }
  }
}
</style>
