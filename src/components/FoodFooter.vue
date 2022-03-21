<template>
  <div class="footerComp">
    <div class="footerDesktop">
      <div class="container">
        <img src="images/footerlogo.svg" alt="" />
        <div class="row">
          <div class="col-2">
            <div class="footerItem">
              <a href="">
                <h2>Menu</h2>
              </a>
              <a href="">
                <p>Home</p>
              </a>
              <a href="">
                <p>Menu</p>
              </a>
              <a href="">
                <p>Why Us</p>
              </a>
              <a href="">
                <p>Promo</p>
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="footerItem">
              <a href="">
                <h2>Get a promo</h2>
              </a>
              <a href="">
                <p>Summer sale</p>
              </a>
              <a href="">
                <p>Promo code</p>
              </a>
              <a href="">
                <p>Daily promo</p>
              </a>
            </div>
          </div>
          <div class="col-2">
            <div class="footerItem">
              <a href="">
                <h2>About Us</h2>
              </a>
              <a href="">
                <p>About</p>
              </a>
              <a href="">
                <p>Contact</p>
              </a>
              <a href="">
                <p>Career</p>
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="rightSide">
              <h2>
                Stay up to date with<br />
                our story
              </h2>
              <p>
                Join and be the first to get the latest news<br />
                about trend, promotions, and much more!
              </p>
              <div class="signUp">
                <input type="text" placeholder="Enter your email address" />
                <div class="btn">Join Now</div>
              </div>
              <h3>&#169; 2021 Ibey Design. Allright reserved</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

.
<style lang="scss" scoped>
.footerComp {
  .footerDesktop {
    width: 100%;
    height: 100%;
    background-color: var(--background-dark);
    padding: 90px 120px;
    .footerItem {
      margin-top: 65px;
      text-align: left;
      h2 {
        color: var(--cta);
        margin-bottom: 21px;
      }
      p {
        color: var(--text-alt);
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
      }
    }
    .rightSide {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: nowrap;
      h2 {
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 20px;
        color: var(--text-alt);
        text-align: left;
      }
      p {
        font-size: 20px;
        font-weight: 300;
        margin: 0;
        margin-bottom: 40px;
        color: var(--text-alt);
      }
      h3 {
        margin: 0;
        margin-top: 52px;
        font-size: 20px;
        font-weight: 600;
        color: var(--text-alt);
      }
      .signUp {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        border: 1px solid #f54748;
        width: fit-content;
        padding: 10px;
        input {
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 20px;
          color: var(--text-alt);
        }
        .btn {
          margin-left: 92px;
          background-color: var(--red);
        }
      }
    }
  }
}
</style>
