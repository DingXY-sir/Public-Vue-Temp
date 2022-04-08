<template>
  <div class="layout-container">
    <el-container>
      <el-aside class="aside-container">
        <menu-nav />
      </el-aside>
      <el-container>
        <el-header class="header-container">
          <header-nav key="" />
        </el-header>
        <el-main class="main-container">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuNav from "./components/menu.vue";
import HeaderNav from "./components/header.vue";
import { ref, reactive, computed, watch } from "vue";
import { useRoute } from "vue-router";
// 获取路由元信息
const route = useRoute();
console.log(route.name);
</script>
<style lang="scss" scoped>
.aside-container {
  width: auto;
  height: 100vh;
  background-color: #0f0303;
}
.header-container {
  width: 100%;
  height: 65px;
  padding: 0;
  background-color: $header;
}
</style>
