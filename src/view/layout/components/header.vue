<template>
  <div class="header">
    <div>
      <el-icon :size="16" color="#000" @click="handleMenu" v-if="isMenuShow"
        ><fold
      /></el-icon>
      <el-icon :size="16" color="#000" @click="handleMenu" v-else
        ><expand
      /></el-icon>
    </div>
    <div>
      <i
        @click="toggle"
        class="iconfont full-screen"
        :class="isFullscreen ? 'icon-quxiaoquanping_o' : 'icon-quanping_o'"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, unref, reactive, computed, watch } from "vue";
import { useColorMode, useFullscreen } from "@vueuse/core";
import { Fold, Expand } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const isMenuShow = ref(true);

// 全屏模式
const { isFullscreen, toggle } = useFullscreen();
const store = useStore();
const handleMenu = () => {
  isMenuShow.value = !isMenuShow.value;
  store.commit("collapseMenu");
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 65px;
  padding: 0 10px;
  .full-screen {
    font-size: 20px;
  }
}
</style>
