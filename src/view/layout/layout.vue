<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="200px">
        <p class="menu-color">你好</p>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.menu-color {
  color: $menuColor;
  font-size: $menuFont;
}
</style>
