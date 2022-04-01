<template>
  <div class="layout-container">
    <div class="layout-header"><p>你好，vue3+TS！</p></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
</script>
<style lang="scss" scoped>
.layout-header {
  p {
    font-size: 40px;
    color: red;
  }
}
</style>
