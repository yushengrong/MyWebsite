<template>
<div class="footer">
  <div class="foot-container">
    <div class="foot-top">
      <div class="inner">
        <div class="inner-item">
          <div class="inner-item-title">
            <p>关于我们</p>
          </div>
          <ul>
            <li>人气排行榜</li>
            <li>友情链接</li>
            <li>年度归档</li>
            <li>投稿</li>
            <li>热门标签</li>
          </ul>
        </div>
        <div class="inner-item inner-item2">
          <div class="inner-item-title">
            <p>友情链接</p>
          </div>
          <ul>
            <li>动漫资讯网</li>
            <li>c3动漫网</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <p>这里就版权号</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  margin-top: 20px;
  background: #16171e;
  .foot-container{
    width: 1200px;
    margin: 0 auto;
    .foot-top{
      .inner{
        padding: 50px 0 10px 0;
        display: flex;
        .inner-item{
          .inner-item-title{
            margin-bottom: 20px;
            p{
              font-size: 16px;
              font-weight: 500;
              color: #fff;
            }
          }
          ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            flex-direction: column;
            max-height: 180px;
            li{
              font-size: 14px;
              color: #a8aab0;
              list-style: none;
              margin: 0 60px 20px 0;
              line-height: 36px;
            }
          }
        }
        .inner-item2{
          padding-left: 100px;
        }
      }
    }
    .foot-bottom{
      border-top: 1px solid #3b4047;
      p{
        padding: 40px 0;
        font-size: 14px;
        color: #a8aab0;
      }
    }
  }
}

</style>