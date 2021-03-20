<template>
  <BaseAuthLayout>
    <template v-slot:auth-title>Register</template>
    <form id="register-form" method="post" @submit.prevent="handleSubmit">
      <h2 class="login-title">Sign Up</h2>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          name="name"
          placeholder="Name"
          autocomplete="off"
          v-model="name"
        />
      </div>
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
        <input
          class="form-control"
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          v-model="password_confirmation"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-info btn-block" type="submit">Sign up</button>
      </div>
      <div class="text-center">
        Already a member?
        <router-link :to="{ name: 'login' }" class="color-blue">Login here</router-link>
      </div>
    </form>
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
      password_confirmation: "",
      name: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style>
</style>