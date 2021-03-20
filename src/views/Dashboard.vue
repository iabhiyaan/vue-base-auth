<script>
import axios from "@/axios";

import BaseLayout from "../components/BaseLayout";
export default {
  components: { BaseLayout },
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const response = await axios.get("todos");
      this.todos = response.data;
      this.loading = false;
    },
  },
};
</script>

<template>
  <BaseLayout>
    <div class="row" v-if="loading">
      <div class="col-md-4 opacity-40">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Test</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 opacity-40">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Test</div>
          </div>
        </div>
      </div>
      <div class="col-md-4 opacity-40">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Test</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-4 mb-4" v-for="todo in todos" :key="todo.id">
        <div class="card">
          <div class="card-header">
            <div class="card-title">{{ todo.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<style>
.opacity-40 {
  opacity: 0.4;
}
</style>