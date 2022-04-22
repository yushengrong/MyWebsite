<template>
  <div class="container">
    <div class="big-home">
      <Banner></Banner>
      <NewsShow></NewsShow>
    </div>

    <div class="content">
      <div class="content-left">
        <List></List>
      </div>
      <div class="content-right">
        <RightPart></RightPart>
      </div>
    </div>
    <div class="foot-box">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import NewsShow from '@/components/NewsShow.vue';
import List from '@/components/List.vue'
import RightPart from "@/components/RightPart.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components:{
    Banner,
    NewsShow,
    List,
    RightPart,
    Footer
  }
}
</script>

<style lang="less" scoped>
.big-home{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #fff;
}
.content{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  .container-left{
    width: 835px;
    float: left;
  }
  .container-right{
    float: right;
  }
}

</style>