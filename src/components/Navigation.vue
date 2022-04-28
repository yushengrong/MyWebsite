<template>
<!--  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="ture" @select="handleSelect">-->
<!--    <el-menu-item v-for="(item,id) in menuList">-->
<!--      <router-link to="item.path" @click="skip(id)">{{item.value}}</router-link>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="/information">动画</el-menu-item>-->
<!--    <el-menu-item index="3">游戏</el-menu-item>-->
<!--    <el-menu-item index="4">cosplay</el-menu-item>-->
<!--    <el-menu-item index="5">展会</el-menu-item>-->
<!--  </el-menu>-->
  <ul class="menu-list">
    <li v-for="(item,index) in menuList">
        <router-link @click="skip(index)" :to="{path:item.path}" :route="{params:{id:item.id}}">{{item.value}}</router-link>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '1',
      menuList:[
        {
          value:"首页",
          path:"/home",
          id:1
        },
        {
          value: "资讯",
          path: "/information",
          id:2
        }
      ]
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key, keyPath)
    },
    skip(index) {
      this.$store.state.currentIndex = index
      console.log(index);
      this.$store.state.menuList = this.menuList
    }
  },
}
</script>

<style scoped lang="less">
.el-menu{
  border: none;
}
.menu-list{
  display: flex;
  li{
    list-style: none;
    a{
      padding: 20px;
      display: inline-block;
      text-decoration: none;
      color: #6b778c;
    }
    .router-link-active{
      color: plum;
      border-bottom: 2px solid plum;
    }
  }
}
</style>