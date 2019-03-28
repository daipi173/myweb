<template>
  <footer class="wrap">
    <div class="wrap-circle">
      <img src="../img/footer-circle.jpg" alt srcset>
    </div>
    <div class="footer-content">
      <div v-for="(item,index) in footers" :key="index">
        <img :class="test[index]" :src="item.footSrc" alt>
        <span>{{item.footDescription}}</span>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  props: {
    footers: Array
  },
  data(){
      return{
          test:[
              'test0',
              'test1',
              'test2'
          ]
      }
  }
};
</script>
<style  scoped>
.wrap {
  position: relative;
  width: 750px;
  height: 98px;
}
.wrap-circle{
    height: 50px;
    
    box-shadow: 0px -2px 0px #888888;
}
.wrap-circle img {

  position: absolute;
  top:-16px;
  left:245px;
  height: 50px;
  z-index: 10;
  border-radius:36%;
}
.footer-content {
   
  display: flex;
  justify-content: space-around;
 
}

.footer-content img {
    display: block;
  width: 54px;
  height: 49px;
}
.footer-content .test2{
    width: 99px;
}
.footer-content span {
  display: block;
  font-size: 14px;
  text-align: center;
  color:rgb(140,140,140);
   z-index: 999;
}
</style>

