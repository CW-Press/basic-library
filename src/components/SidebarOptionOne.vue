<template>
  <div class="sidebarOneComp">
    <div class="sidebarOneDesktop">
      <div class="sidebar">
        <div class="topSection">
          <h2>Getting Started</h2>
          <p>Introduction</p>
          <p>Quick Start</p>
        </div>
        <div class="bottomSection">
          <h2>Essentials</h2>
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
      .topSection {
        margin-right: 76px;
        color: var(--text-alt);
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
      .bottomSection {
        margin-top: 20px;
        margin-right: 76px;
        color: var(--text-alt);
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
          color: var(--text-dark);
        }
        p:hover {
          cursor: pointer;
          color: var(--cta);
        }
      }
    }
  }
}
</style>
