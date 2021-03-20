<script>
export default {};
</script>

<template>
  <div class="content">
    <div class="brand">
      <a class="link" href="/">
        <slot name="auth-title"></slot>
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<style>
</style>