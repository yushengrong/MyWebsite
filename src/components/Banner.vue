<template>
  <div class="container">
  <div class="banner">
  <el-carousel arrow="never" height="400px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  name:"Banner"
}
</script>

<style scoped>
.container{
  width: 620px;
  margin: 20px 0;
}
.banner{
  width: 620px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
  line-height: 400px;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: skyblue;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: orangered;
}
</style>