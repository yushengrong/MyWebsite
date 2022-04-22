<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="ture" @select="handleSelect">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/information">动画</el-menu-item>
    <el-menu-item index="3">展会</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      menuList:[
        {
          value:"首页",
          id:1,
          path:""
        }
      ]
    }
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