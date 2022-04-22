<template>
<div class="list-container">
  <div class="selected">
    <div class="selected-top">
      <p>精选导读</p>
    </div>
    <ul>
      <li v-for="(item,id) in selectList">
        <div class="img">
          <img src="" alt="">
        </div>
        <h3>{{item.msg}}</h3>
      </li>
    </ul>
  </div>
  <div class="tab">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" @lazy="true">
      <el-tab-pane label="User" name="first">
          <div class="newest">
            <ul class="newest-list">
              <li class="newest-list-item" v-for="(item,userId) in newsMsg.slice(0,this.showMsgCount)">
                <div class="newest-img">
                </div>
                <div class="newest-msg">
                  <h3>{{item.title}}</h3>
                  <div class="newest-list-mid">
                    <div class="newest-list-item-left">
                      <span class="logo-small"></span>
                      <p>{{item.user}} <span class="upset-time">{{ item.date }}</span></p>

                    </div>
                    <div class="newest-list-item-right">
                      <p style="font-size: 16px;color: #ccc">
                        <el-icon><edit /></el-icon>
                        <span class="view-count">{{item.viewCount}}</span>
                        <el-icon><food /></el-icon>
                       <span class="comment-count">{{item.commentCount}}</span>
                      </p>
                    </div>
                  </div>
                  <p class="newest-details">{{item.details}}</p>
                </div>
              </li>
            </ul>
            <div class="list-button">
              <el-button size="20" type="danger" @click="showMore">加载更多</el-button>
            </div>
          </div>
      </el-tab-pane>
      <el-tab-pane label="Config" name="second"></el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
// import type { TabsPaneContext } from 'element-plus'
export default {
  name: "List",
  data(){
    return{
      showMsgCount:3,
      selectList:[
        {msg:'重磅消息：ChinaJoy数字藏品邀你一起评选',id:1},
        {msg:'【CP28】明天下午（6月1日）一点 ！第一波门票预约开启！CPP独家VIP票，限量上架~',id:2}
      ],
      newsMsg:[
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",
        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",
        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",

        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",
        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",
        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",

        },
        {
          title:"玩家“参股”做动画！约战第四季热播的故事",user:"动漫资讯网小编cc",userId:1,date:"04-19",viewCount:0,commentCount:0,details:"今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播今年的四月新番里，有一部作品比较“传奇”，那就是《约会大作战》，其第4季动画已经于4月8日在哔哩哔哩独家同步播",

        }
      ],
      activeName : ref('first')
    }

  },
  methods:{
    showMore(){
      console.log(this.showMsgCount)
      if(this.showMsgCount > this.newsMsg.length){
        ElMessage({
         showClose:true,
         message:"不要再点了，已经没有更多了",
         type:"warning"
        })
      }else {
        const nowCount = this.showMsgCount
        this.showMsgCount = nowCount + 3
      }

    }
  }
}
</script>

<style lang="less" scoped>
.list-container{
  width: 835px;
  margin: 20px 0 0 0;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  float: left;
  .selected{
    padding-bottom: 20px;
    .selected-top{
      p{
        padding-bottom: 20px;
        font-weight: 700;
      }
    }
    ul{
      display: flex;
      li{
          list-style: none;
          width: 250px;
          &:nth-child(n+1){
            margin-right: 20px;
          }
          .img{
            width: 250px;
            height: 165px;
            background: greenyellow;
          }
          h3{
            margin-top: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  .tab{
    margin-top: 20px;
  }
}

//第一个路由

.newest-img{
  min-width: 240px;
  height: 160px;
  background: orange;
  margin-bottom: 20px;
}
.newest-list li:nth-child(n+2){
  margin-top: 20px;
}
.newest-list-item{
  border-bottom: 1px solid #ccc;
  display: flex;
}
.newest-list-mid{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.newest-msg{
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
}
.newest-details{
  margin-top: 20px;
  overflow: hidden;
  display: -webkit-box;
  /* 将对象作为弹性伸缩盒子模型显示。 */
  -webkit-line-clamp: 2;
  /* 这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。 */
  -webkit-box-orient: vertical;
  /* 从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式） */
}
.upset-time{
  margin-left: 20px;
}
.view-count{
  margin-left: 20px;
  padding-right: 20px;
}
.comment-count{
  margin-left: 20px;
}
.list-button{
  margin-top: 40px;
  text-align: center;
}
</style>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>