<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.replace({ name: "login" });
    },
  },
};
</script>

<template>
  <div>
    <div class="page-wrapper">
      <!-- START HEADER-->
      <header class="header">
        <div class="page-brand">ADMIN PANEL</div>
        <div class="flexbox flex-1">
          <!-- START TOP-LEFT TOOLBAR-->
          <ul class="nav navbar-toolbar">
            <li>
              <a class="nav-link sidebar-toggler js-sidebar-toggler">
                <i class="ti-menu"></i>
              </a>
            </li>
            <li>
              <form class="navbar-search" action="javascript:;">
                <div class="rel">
                  <span class="search-icon">
                    <i class="ti-search"></i>
                  </span>
                  <input class="form-control" placeholder="Search here..." />
                </div>
              </form>
            </li>
          </ul>
          <!-- END TOP-LEFT TOOLBAR-->
          <!-- START TOP-RIGHT TOOLBAR-->
          <button class="btn btn-danger cursor-pointer" @click="logout">
            <i class="fa fa-power-off"></i> Logout
          </button>
          <!-- END TOP-RIGHT TOOLBAR-->
        </div>
      </header>
      <!-- END HEADER-->
      <!-- START SIDEBAR-->
      <nav class="page-sidebar" id="sidebar">
        <div id="sidebar-collapse">
          <div class="admin-block d-flex">
            <div>
              <img src width="45px" />
            </div>
            <div class="admin-info">
              <div class="font-strong">James Brown</div>
              <small>Administrator</small>
            </div>
          </div>
          <ul class="side-menu metismenu">
            <li>
              <a class="active" href="#">
                <i class="sidebar-item-icon fa fa-th-large"></i>
                <span class="nav-label">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="sidebar-item-icon fa fa-bookmark"></i>
                <span class="nav-label">Basic UI</span>
                <i class="fa fa-angle-left arrow"></i>
              </a>
              <ul class="nav-2-level collapse">
                <li>
                  <a href="#">Colors</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <!-- END SIDEBAR-->
      <div class="content-wrapper">
        <!-- START PAGE CONTENT-->
        <div class="page-content fade-in-up">
          <slot></slot>
        </div>
        <!-- END PAGE CONTENT-->
        <footer class="page-footer">
          <div class="font-13">
            2021 ©
            <b>ADMIN TEMPLATE</b> - All rights reserved.
          </div>
          <div class="to-top">
            <i class="fa fa-angle-double-up"></i>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
</style>