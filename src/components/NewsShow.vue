<template>
  <ul class="msg-list">
    <li v-for="(item,id) in msgList">
      <p>{{item.msg}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NewsShow",
  data(){
    return{
      msgList:[
        {
          msg:"十年房价奥斯卡法拉那么是在考虑对方关键时刻了离开大理石快考试了",
          id:1,
          imgUrl:''
        },
        {
          msg:"十年房价奥斯卡法拉那么",
          id:2,
          imgUrl:''
        },
        {
          msg:"十年房价奥斯卡法拉那么",
          id:3,
          imgUrl:''
        },
        {
          msg:"十年房价奥斯卡法拉那么",
          id:4,
          imgUrl:''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.msg-list{
  margin: 20px 0;
  width: 560px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    width: 270px;
    height: 190px;
    background: deepskyblue;
    position: relative;
    list-style: none;
    border-radius: 10px;
    &:nth-child(n+3){
      margin-top: 20px;
    }
    p{
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: absolute;
      bottom: 0;
      padding-left: 10px;
      background-color: #fff;
      opacity: 0.5;
      text-align: left;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>