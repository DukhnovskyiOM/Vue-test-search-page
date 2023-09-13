import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      userData: null,
      userDataCard: null,
      isLoading: false,
      isError: '',
    };
  },
  mutations: {
    addUserData(state, data) {
      state.userDataCard = null;
      state.userData = data;
    },
    openUserData(state, user) {
      state.userDataCard = user;
    },
  },
  actions: {
    async getUsers({ commit }, url) {
      this.state.isLoading = true;
      this.state.isError = '';
      try {
        const arrUSers = await axios.get(`${url}`);
        commit("addUserData", arrUSers.data);
        this.state.isLoading = false;
      } catch (error) {
        console.warn(error);
        this.state.isError = error.message;
        this.state.isLoading = false;
      }
    },
    userCard({ commit }, user) {
      commit("openUserData", user);
    },
  },
});

export default store;
