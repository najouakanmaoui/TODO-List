<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="username" class="form-input" placeholder="Username" />

      <input v-model="password" type="password" class="form-input" placeholder="Password" />

      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("userSignIn", {
          username: this.username,
          password: this.password,
        });
        this.$router.push("/tasks");
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
};
</script>

<style>
.login {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-label {
  font-size: 16px;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
}

.login-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
