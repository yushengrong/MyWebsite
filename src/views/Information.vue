<template>
  <div class="type-box">
    <div class="type-title">
      <div class="type-title-mid">
       <h1>{{this.title}}</h1>
      </div>
    </div>
    <ul class="type-list">
      <li v-for="(item,id) in typeList">
        <div class="type-img">
          <span>{{item.type}}</span>
          <img src="" alt="">
        </div>
        <div class="type-msg">
          <p>{{item.title}}</p>
          <div class="type-msg-bot">
            <p>2019-01-19</p>
            <p>
              <el-icon><moon /></el-icon>
              <span class="logo-mid">{{item.moonCount}}</span>
              <el-icon><mostly-cloudy /></el-icon>
              <span>{{item.cloudCount}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <Footer></Footer>
    <BackWebTop></BackWebTop>
  </div>

</template>

<script>
import Footer from "@/components/Footer.vue";
import BackWebTop from "@/components/BackWebTop.vue";
import { mapState } from 'vuex'
export default {
  name: "Information",
  components: {
    Footer,
    BackWebTop
  },
  mounted(){
    this.navTypeCode = this.$store.state.currentIndex
  },
  data(){
    return{
      title:null,
      titleList:[''],
      navTypeCode:null,
      navList:[],
      typeList:[
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"资讯",typeCode:"1",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"动画",typeCode:"2",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"展会",typeCode:"3",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
        {type:"cosplay",typeCode:"4",title:"Live/Concert Repo! 洛天依&郎朗2019跨次元演唱会声音视觉双重盛宴",moonCount:0,cloudCount:0},
      ]
    }
  },
}
</script>

<style scoped lang="less">
.type-box{
  margin: 20px auto;
  box-sizing: border-box;
  background: #f5f6f9;
}
.type-list li{
  background: #fff;
}
.type-title{
  width: 100%;
  background: #16171e;
  font-size: 16px;
  color: #fff;
}
.type-title-mid{
  width: 1200px;
  height: 250px;
  margin: 0 auto;
  h1{
    text-align: center;
    align-items: center;
    line-height: 250px;
  }
}
.type-list{
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  li{
    width: 270px;
    list-style: none;
    margin: 0 20px 20px 0;
    .type-img{
      width: 100%;
      height: 180px;
      background: #19b5fe;
      span{
        display: inline-block;
        margin: 10px 0 0 10px;
        padding: 5px;
        font-size: 12px;
        background: #16171e;
        color: white;
      }
    }
    .type-msg{
      padding: 10px;
      box-sizing: border-box;
      p:nth-child(1){
        font-size: 16px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -moz-box;
        -moz-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
        white-space: normal;
      }
      .type-msg-bot{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        p{
          color: #7f8c8d;
          font-size: 16px;
          span{
            margin-left: 5px;
            display: inline-block;
          }
        }
      }
    }
  }
}
.logo-mid{
  margin-right: 10px;
}
</style>
