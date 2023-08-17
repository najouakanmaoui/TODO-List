import { createStore } from 'vuex';
import axios from '@/axios';

export default createStore({
  state() {
    return {
      user: null,
      tasks: [],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async userSignIn({ commit }, payload) {
      let params = payload;
      let url = `/auth/jwt/create/`;
      try {
        const { data } = await axios.post(url, params);
        if (data.access) {
          commit("setUser", { name: payload.username });
          await localStorage.setItem("user_token", data.access);
        }
      } catch (error) {
        console.error("Error login user:", error);
      }
    },
    async userDetails({ commit }) {
      let url = `/auth/users/me/`;
      try {
        const { data } = await axios.get(url);
        if (data) {
          commit("setUser", { name: data.username});
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
    async fetchUserTasks({ commit }) {
      try {
        const response = await axios.get("/tasks/");
        commit("setTasks", response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },
    async updateTask({ commit, state }, taskData) {
      try {
        await axios.put(`/tasks/${taskData.id}/`, taskData);
        const index = state.tasks.findIndex(task => task.id === taskData.id);
        if (index !== -1) {
          commit("setTasks", [
            ...state.tasks.slice(0, index),
            taskData,
            ...state.tasks.slice(index + 1),
          ]);
        }
      } catch (error) {
        console.error("Error updating tasks:", error);
      }
    },
    async deleteTask({ commit, state }, taskId) {
      try {
        await axios.delete(`/tasks/${taskId}/`);
        commit("setTasks", state.tasks.filter(task => task.id !== taskId));
      } catch (error) {
        console.error("Error deleting tasks:", error);
      }
    },
    async createTask({ commit, state }) {
      const newTask = {
        title: "untitled",
        completed: false,
      };

      try {
        const response = await axios.post("/tasks/", newTask);
        newTask.id = response.data.id;
        commit("setTasks", [...state.tasks, newTask]);
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
  },
  getters: {},
});
