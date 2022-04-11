<template>
  <div class="setting-container">
    <el-icon :size="18" color="#000" @click="handleSetting"
      ><setting
    /></el-icon>
    <el-drawer
      size="25%"
      v-model="drawer"
      title="I am the title"
      :with-header="false"
    >
      <span>导航设置</span>
      <div>
        <ul class="select">
          <li @click="selectHandle">1</li>
          <li>2</li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { Setting } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const drawer = ref(false);
const handleSetting = () => {
  drawer.value = true;
};

const store = useStore();
const selectHandle = () => {
  store.commit("selectMode", "horizontal");
};
</script>
<style lang="scss" scoped>
.setting-container {
  display: flex;
  align-items: center;
  .select {
    display: flex;
    li {
      padding: 20px;
      border: 1px solid #ccc;
    }
  }
}
</style>
