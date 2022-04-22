<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-sub-menu index="1">
      <template #title>首页</template>
      <el-menu-item index="1-1">首页1</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-menu-item index="2-4">选项4</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">订单管理</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {activeIndex: '1'}
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
}
</script>

<style>
.el-menu{
  border: none;
}
</style>