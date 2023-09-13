<script setup>
import store from '../stores/userData';

const props = defineProps({
    userInfo: {
        type: [Object, null],
        required: true
    }
})
function openDataUser (user) {
  store.dispatch('userCard', user)
}
</script>

<template>
  <div v-for="user in userInfo" key="user.id" class="mini_block">
    <div class="mini_user_img">
      <img src="../assets/img/mini_img.png" alt="user img" />
    </div>
    <div class="user_info" @click="openDataUser(user)">
      <div class="user_title">{{user.name}}</div>
      <div class="user_text">{{user.email}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main";

.mini_block {
  display: flex;
  align-items: center;
  width: 240px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: $white;
  overflow: hidden;

  .mini_user_img {
    display: flex;
    border-right: 1px solid #e0e0e0;
    img {
      width: 70px;
      height: 70px;
      border: none;
    }
  }

  .user_info {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 0 12px;
    flex-direction: column;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
    .user_title {
      font-size: 14px;
      font-weight: 600;
      color: $grey;
    }
    .user_text {
      word-break: break-all;
      font-size: 14px;
      font-weight: 400;
      color: #76787D;
    }
  }
}
</style>
