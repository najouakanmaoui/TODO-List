<template>
  <div id="app">
    <header>
      <h1>Welcome to the Todo List App</h1>
      <p>A simple application to manage your tasks</p>
    </header>
    <main>
     <router-link to="/login">
        <button>Login</button>
      </router-link>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  margin-bottom: 20px;
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
</style>
