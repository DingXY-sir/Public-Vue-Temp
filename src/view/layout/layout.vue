<template>
  <div class="layout-container">
    <el-container>
      <el-aside class="aside-container">
        <logo />
        <menu-nav />
      </el-aside>
      <el-container>
        <el-header class="header-container">Header</el-header>
        <el-main class="main-container">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Logo from "./components/logo.vue";
import MenuNav from "./components/menu.vue";
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.aside-container {
  width: 200px;
  height: 100vh;
  background-color: $menuBg;
}
</style>
