<script setup>
import Sidebar from "./components/Sidebar.vue";
import User from "./components/User.vue";
</script>

<template>
  <div class="page">
    <header class="header">
      <div class="logo_header">Жилфонд</div>
      <div class="user_header">Пользователь</div>
    </header>
    <main class="main">
      <div class="container">
        <div class="sections">
          <section class="section section-left">
            <Sidebar />
          </section>
          <section class="section section-right">
            <User />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main";
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
    .logo_header {
      color: #e31f24;
      font-size: 32px;
      font-weight: 700;
    }
    .user_header {
      color: $grey;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .main {
    display: flex;
    // height: 70vh;
    height: fit-content;
    // max-height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    background-color: #fdfdfd;

    .container {
      height: 100%;
      width: 100%;

      .sections {
        display: flex;
        // width: 100%;
        height: 100%;

        .section-left {
          height: 100%;
          // height:auto;
          padding: 25px;
          width: 30%;
          border-right: 1px solid #e0e0e0;
        }

        .section-right {
          display: flex;
          height: 70vh;
          // align-items: center;
          justify-content: center;
          width: 100%;
          
          padding: 25px;
        }
      }
    }
  }
}
</style>
