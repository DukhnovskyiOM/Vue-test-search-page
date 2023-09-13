<script setup>
import store from '../stores/userData';
</script>

<template>
  <div v-if="store.state.userDataCard !== null" class="user_card">
    <div class="user_img">
      <img src="../assets/img/img.png" alt="user img" />
    </div>
    <div class="user_info">
      <div class="user_title">{{store.state.userDataCard.name}}</div>
      <div class="user_text"><strong style="color: #333333;">email: </strong>{{store.state.userDataCard.email}}</div>
      <div class="user_text"><strong style="color: #333333;">phone: </strong>{{store.state.userDataCard.phone}}</div>
      <div class="user_title">О себе:</div>
      <div class="user_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quo dicta
        nulla, totam repudiandae excepturi! Maiores eaque sunt, ab animi tempore
        at eos dolor. Alias neque repellat corrupti sed consequatur!
      </div>
    </div>
  </div>
  <div  v-if="store.state.userDataCard === null" class="user_none">Выберите сотрудника, чтобы посмотреть его профиль</div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main";
.user_none {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #76787d;
}

.user_card {
  display: flex;
  flex-direction: row;
  gap: 50px;

  .user_img {
    display: flex;
        img{
        width: 424px;
        height: 286px;
        border: none;
    }
  }

  .user_info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .user_title {
      font-size: 16px;
      font-weight: 600;
      color: $grey;
    }
    .user_text {
      font-size: 14px;
      font-weight: 400;
      color: #76787D;
    }
  }
}
</style>
