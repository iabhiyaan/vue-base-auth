<template>
  <nav class="page-sidebar" id="sidebar">
    <div id="sidebar-collapse">
      <div class="admin-block d-flex">
        <div>
          <img src width="45px" />
        </div>
        <div class="admin-info">
          <div class="font-strong">Abhiyan Shrestha</div>
          <small>Co-ordinator</small>
        </div>
      </div>
      <ul class="side-menu metismenu">
        <li>
          <router-link class="active" :to="{name: 'admin__dashboard'}">
            <i class="sidebar-item-icon fa fa-th-large"></i>
            <span class="nav-label">Dashboard</span>
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="sidebar-item-icon fa fa-bookmark"></i>
            <span class="nav-label">Demo</span>
            <i class="fa fa-angle-left arrow"></i>
          </a>
          <ul class="nav-2-level collapse">
            <li>
              <router-link :to="{name: 'about'}">Add demo</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>