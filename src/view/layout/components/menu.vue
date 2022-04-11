<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#0f0303"
    text-color="#fff"
    active-text-color="#4091f7"
    router
    :mode="modeStyle === 'horizontal' ? 'horizontal' : 'vertical'"
    collapse-transition
    @open="handleOpen"
    @close="handleClose"
  >
    <logo />
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>设置</span>
      </template>
      <!-- <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group> -->
      <el-sub-menu index="1-4">
        <template #title><span>菜单</span></template>
        <el-menu-item index="1-4-1">路由</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>功能</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>关于</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import Logo from "./logo.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const store = useStore();
// const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
//计算属性
const isCollapse = computed(() => {
  return store.state.tab.isCollapse;
});

const modeStyle = computed(() => {
  return store.state.tab.modeStyle;
});
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  border: none;
}

.el-menu--collapse {
  height: 100vh;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #409eff !important;
  // background-color:   !important;
}
</style>
