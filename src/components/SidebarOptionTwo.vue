<template>
  <div class="sidebarOneComp">
    <div class="sidebarOneDesktop">
      <div class="sidebar">
        <div class="heading">
          <h2>Getting Started</h2>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="topSection">
          <p>Introduction</p>
          <p>Quick Start</p>
        </div>
        <div class="heading" style="margin-top: 20px">
          <h2>Essentials</h2>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div class="bottomSection">
          <p>Creating an Application</p>
          <p>Template Syntax</p>
          <p>Reactivity Fundaments</p>
          <p>Computed Properties</p>
          <p>Class and Style Bindings</p>
          <p>Conditional Rendering</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebarOneComp {
  .sidebarOneDesktop {
    .sidebar {
      width: fit-content;
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
        i {
          font-size: 10px;
          color: var(--text-alt);
        }
        h2 {
          font-size: 17px;
          font-weight: 600;
          margin: 0;
          margin-bottom: 10px;
        }
      }
      .heading:nth-child(even) {
        margin-top: 10px;
      }
      .topSection {
        margin-right: 76px;
        color: var(--text-dark);
        p {
          font-size: 13px;
          font-weight: 400;
          margin: 0;
          margin-bottom: 5px;
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
    p:hover {
      cursor: pointer;
      color: var(--cta);
    }
  }
}
</style>
