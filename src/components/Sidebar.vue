<script setup>
import { ref } from 'vue';
import UserSearch from "./User-search.vue";
import { BASE_URL } from '../constants'

import store from '../stores/userData';

const userName = ref('');

async function getUser () {
  if(userName.value.length === 0){
    alert("Поле не может быть пустым")
  } else {
    const url = `${BASE_URL}?q=${userName.value}`;
    await store.dispatch('getUsers', url);
    userName.value = '';
  }
}

</script>

<template>
  <div class="info">
    <div class="title">Поиск сотрудников</div>
    <input v-model="userName" required="true" type="text" class="search" @keyup.enter="getUser" />
    <div class="title">Результаты</div>
    <div v-if="userName?.length <= 0 && store.state.userData === null" class="results_search_none">начните поиск</div>
    <div v-if="store.state.userData?.length > 0" class="results_search">
      <UserSearch :userInfo="store.state.userData"/>
    </div>
    <div v-if="store.state.userData?.length === 0" class="results_search_none">ничего не найдено</div>
    <div v-if="store.state.isLoading" class="results_search_none"><strong>Loading...</strong></div>
    <div v-if="store.state.isError?.length > 0 && userName?.length <= 0" class="results_search_none"><strong>{{store.state.isError}}</strong></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main";

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  .title{
    font-size: 16px;
    font-weight: 600;
  }
  .search {
    width: 240px;
    height: 49px;
    padding: 16px;
    color: #76787D;
    background-color: $white;
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
    border: 1.5px solid #E9ECEF;
    outline: none;
    cursor: pointer;
  }

  .results_search{
    display: flex;
    flex-direction: column;
    gap: 15px;


  }
  .results_search_none{
    font-size: 14px;
    font-weight: 400;

    strong{
      color: red;
    }
  }
}
</style>
