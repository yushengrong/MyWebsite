<template>
<div class="right-box">
  <div class="get-piont">
    <div class="get-piont-title">
      <span>获得积分</span>
    </div>
    <div class="get-piont-con">
      <el-button size="20" type="danger" >登入查看</el-button>
    </div>
  </div>
  <div class="rank">
    <div class="rank-title">
      <span>排行榜</span>
    </div>
    <ul class="rank-list">
      <li v-for="(item,id) in rankList">
        <span>{{item.rankCount}}</span>
        <img src="" alt="">
        <span>{{item.userName}}</span>
        <p><span>{{item.point}}</span>积分</p>
      </li>
    </ul>
  </div>
  <div class="hot-click">
    <div class="hot-click-title">
      <span>热门点击</span>
    </div>
    <ul class="hot-click-list">
      <li v-for="(item,id) in clickList">
        <div class="hot-click-item-img">
        </div>
        <div class="hot-click-item-con">
          <p>{{item.title}}</p>
          <div class="hot-click-item-msg">
            <p>
              <el-icon size="8"><food/></el-icon>
              <span>{{item.viewCount}}</span>
            </p>
            <p>
              <el-icon size="8"><credit-card/></el-icon>
              <span>{{item.date}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>

  </div>
  <div class="label-cloud">
    <div class="label-cloud-title">
      <span>标签云</span>
    </div>
    <div class="label-box">
      <span v-for="(item,index) in labelList">{{item}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "rightPart",
  data(){
    return{
      rankList:[
        {
          rankCount:1,userName:"我是你爹",point:1000
        },
        {
          rankCount:2,userName:"我是你爸爸",point:999
        },
        {
          rankCount:3,userName:"楼上是傻逼",point:998
        }
      ],
      clickList:[
          {title:'FATE/ZERO 骑姬 阿尔托莉雅×爱丽丝菲尔cosplay',viewCount:0,date:"2012-02-22"},
          {title:'F倒计时1天，《书灵记》同名漫画即将全平台上线',viewCount:0,date:"2012-02-22"},
          {title:'F倒计时1天，《书灵记》同名漫画即将全平台上线',viewCount:0,date:"2012-02-22"}
      ],
      labelList:['漫画','游戏','漫展','acg','古剑奇谭','国风','cosplay','火影忍者','coser','漫画','游戏','漫展','acg','古剑奇谭','国风','cosplay','火影忍者','coser']

    }
  }
}
</script>

<style lang="less" scoped>
.right-box{
  float: right;
  margin: 20px 0 0 10px;
  .get-piont{
    padding: 15px;
    box-sizing: border-box;
    background: white;
    .get-piont-title{
      padding-bottom: 20px;
      span{
        font-size: 16px;
        display: inline-block;
        padding: 5px 0;
        border-bottom: 2px solid #fe718d;
      }
    }
    .get-piont-con{
      text-align: center;
      margin-bottom: 40px;
    }
  }
  .rank{
    margin-top: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
    .rank-title{
      padding-bottom: 20px;
      span{
        font-size: 16px;
        padding: 5px 0;
        border-bottom: 2px solid #fe718d;
      }
    }
    .rank-list{
      li{
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-bottom: 20px;
        span{
          padding: 0 10px;
        }
      }
    }
  }
  .hot-click{
    margin-top: 20px;
    padding: 15px;
    box-sizing: border-box;
    background: #fff;
    .hot-click-title{
      padding-bottom: 20px;
      span{
        font-size: 16px;
        padding:5px  0;
        border-bottom: 2px solid #fe718d;
      }
    }
    .hot-click-list{
      li{
        list-style: none;
        display: flex;
        .hot-click-item-img{
          min-width: 100px;
          height: 75px;
          background: yellow;
        }
        .hot-click-item-con{
          padding-left: 10px;
          p{
            font-size: 16px;
            color: #1f2d3d;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
.hot-click-item-msg{
  display: flex;
  justify-content: space-between;
  color: #9baab6;
}
.hot-click-item-msg p {
    font-size: 8px;
}
.hot-click-item-msg p span{
  margin-left: 10px;
}
.label-cloud{
  margin-top: 20px;
  padding: 15px;
  box-sizing: border-box;
  background: white;
  .label-cloud-title{
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    span{
      font-size: 16px;
      display: inline-block;
      padding: 5px 0;
      border-bottom: 2px solid #fe718d;
    }
  }
  .label-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span{
      margin-right: 20px;
      font-size: 14px;
      padding: 5px;
      box-sizing: border-box;
      color: #fff;
      margin-bottom: 10px;
    }
    span:nth-child(6n+1){
    background: #ff5e5c;
    }
    span:nth-child(6n+2){
      background: #ffbb50;
    }
    span:nth-child(6n+3){
      background: #1ac756;
    }
    span:nth-child(6n+4){
      background: #19b5fe;
    }
    span:nth-child(6n+5){
      background: #fb7da9;
    }
    span:nth-child(6n){
     background: #666;
    }
  }
}

</style>