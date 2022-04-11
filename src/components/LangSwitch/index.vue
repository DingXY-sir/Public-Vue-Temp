<template>
  <div class="lang-switch-container _flex">
    <el-image
      style="width: 18.28px; height: 12px; margin-right: 5px"
      :src="flag"
    />
    <el-select
      v-model="selectlang"
      class="m-2"
      placeholder="Select"
      size="small"
      style="width: 70px"
      @change="changeHandle"
    >
      <el-option
        v-for="item in languages"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import us from "@/assets/image/us.png";
import chinese from "@/assets/image/chinese.png";
import { ref, reactive, computed, watch } from "vue";
import { useStore } from "vuex";

interface langType {
  value: string;
  label: string;
  img: string;
}
const languages = ref([
  {
    value: "en-US",
    label: "English",
    img: us,
  },
  {
    value: "zh-CN",
    label: "中文",
    img: chinese,
  },
]);
const selectlang = ref("zh-CN");
const flag = computed(() => {
  const selectCountry: langType = languages.value.find(
    (item) => item.value === selectlang.value
  ) as langType;
  return selectCountry.img;
});
const store = useStore();
const changeHandle = (val: string) => {
  store.commit("selectLocale", val);
};
console.log(store.state);
</script>
<style lang="scss" scoped>
.lang-switch-container {
  width: 150px;
  border: none;
}
:deep(.el-input__inner) {
  border-radius: 0;
  border: 0;
  padding-left: 0;
  padding-right: 0;
  box-shadow: none !important;
  border: transparent;
  vertical-align: middle;
}
:deep(.el-tooltip__trigger) focus {
  border: none;
}
</style>
