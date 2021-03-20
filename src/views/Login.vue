<template>
  <BaseAuthLayout>
    <template v-slot:auth-title>Login</template>
    <form id="register-form" method="post" @submit.prevent="handleSubmit">
      <div class="form-group">
        <input
          class="form-control"
          type="email"
          name="email"
          placeholder="Email"
          autocomplete="off"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <div class="form-group">
        <button class="btn btn-info btn-block" type="submit">Log in</button>
      </div>
    </form>
    <router-link :to="{ name: 'register' }">Register</router-link>
  </BaseAuthLayout>
</template>

<script>
import BaseAuthLayout from "../components/BaseAuthLayout.vue";
export default {
  components: {
    BaseAuthLayout,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // localStorage.setItem("authToken", "auth");
      this.$store.commit("setAuth", true);
      this.$router.replace({ name: "dashboard" });
    },
  },
};
</script>

<style>
</style>