<template>
  <div class="todo-app">
    <header>
      <h1 v-if="user">Welcome, {{ user.name }}!</h1>
      <button v-if="user" @click="logout">Logout</button>
    </header>
    <main>
      <h2>Your Tasks</h2>
      <div class="task-list">
        <div v-for="(task, index) in tasks" :key="task.id" class="task">
          <div class="task-checkbox">
            <label>
            <input type="checkbox" v-model="task.is_completed" @change="updateTask(index)" />
            {{ task.is_completed ? 'Completed' : 'Not Completed' }}
            </label>
          </div>
          <div class="task-details">
            <input v-model="task.title" @blur="updateTask(index)" />
            <!--button class="update-button" @click="updateTask(index)">Update</!--button-->
            <button class="delete-button" @click="deleteTask(index)">Delete</button>
          </div>
        </div>
      </div>
      <button class="add-task-button" @click="createTask">Add New Task</button>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    tasks() {
      return this.$store.state.tasks;
    },
  },
  created() {
    this.$store.dispatch('userDetails');
    this.$store.dispatch('fetchUserTasks');
  },
  methods: {
    async logout() {
      localStorage.removeItem("user");
      this.$router.push('/login');
    },
    async updateTask(index) {
      const updatedTask = this.tasks[index];
      await this.$store.dispatch('updateTask', updatedTask);
    },
    async deleteTask(index) {
      const taskId = this.tasks[index].id;
      await this.$store.dispatch('deleteTask', taskId);
    },
    async createTask() {
      await this.$store.dispatch('createTask');
    },
  },
};
</script>

<style>
.todo-app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

main {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.task-list {
  display: flex;
  flex-direction: column;
}

.task {
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.task-checkbox {
  margin-right: 10px;
}

.task-details {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

input[type="checkbox"] {
  margin-right: 10px;
}

input[type="text"] {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  font-size: 16px;
}

button.add-task-button {
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

button.add-task-button:hover {
  background-color: #449d44;
}

.update-button,
.delete-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}

.update-button {
  color: #3498db;
}

.delete-button {
  color: #e74c3c;
}
</style>
