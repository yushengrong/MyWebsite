<template>
  <div class="box">
    <div class="top">
      <div class="navigation">
        <Navigation></Navigation>
      </div>
  </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: 'HelloWorld',
  components:{
    Navigation
  }
}

</script>
<style scoped>
.box{
  width: 100%;
  background-color:#fff;
  position: sticky;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%);
}
.top{
  width: 1200px;
  margin: 0 auto;
}
.navigation{
  margin: 0 auto;
}
</style>
