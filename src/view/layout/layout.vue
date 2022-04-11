<template>
  <div :class="stateMode == 'vertical' ? 'layout-container' : 'aside-content'">
    <el-container>
      <el-aside class="aside-container">
        <menu-nav />
      </el-aside>
      <el-container>
        <el-header class="header-container">
          <header-nav key="" />
        </el-header>
        <el-main class="main-container"> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuNav from "./components/menu.vue";
import HeaderNav from "./components/header.vue";
import { ref, reactive, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// 获取路由元信息
const route = useRoute();
console.log(route.name);

const store = useStore();
const stateMode = computed(() => {
  return store.state.tab.modeStyle;
});
console.log();
</script>
<style lang="scss" scoped>
.aside-container {
  width: auto;
  height: 100vh;
  background-color: #0f0303;
}
.aside-content {
  width: auto;
  height: 65px;
  background-color: #0f0303;
}
.header-container {
  width: 100%;
  height: 65px;
  padding: 0;
  border-bottom: 1px solid #ccc;
  // background-color: $header;
}
</style>
