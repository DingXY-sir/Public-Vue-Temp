<template>
  <div class="logo-container">
    <img src="@/assets/image/logo.png" alt="" />
    <span v-show="!isCollapseShow">Vue3.2 + TS</span>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const isCollapseShow = computed(() => {
  return store.state.tab.isCollapse;
});
</script>
<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: $menuBg;
  img {
    width: 60px;
    height: 45px;
  }
  span {
    color: $menuActiveColor;
  }
}
</style>
