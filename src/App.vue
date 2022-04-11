<script setup lang="ts">
import { computed, ref } from "vue";
import { ElConfigProvider } from "element-plus";
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
import enLocale from "element-plus/lib/locale/lang/en";
import { useStore } from "vuex";
const store = useStore();
const locale = computed(() => {
  const langState = store.state.tab.locale;
  const local = langState === "zh-CN" ? zhLocale : enLocale;
  return local;
});
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style></style>
