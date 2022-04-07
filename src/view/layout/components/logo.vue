<template>
  <div class="logo-container">
    <img src="@/assets/image/logo.png" alt="" />
    <span>Vue3.2 + TS</span>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  padding: 10px 0;
  img {
    width: 60px;
    height: 45px;
  }
  span {
    color: $menuActiveColor;
  }
}
</style>
