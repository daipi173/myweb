<template>
  <div id="app">
    <my-header></my-header>
    <my-body :title="descriptions"
    :likes="liked"></my-body>
    <my-footer :footers="footers"></my-footer>
  </div>
  
</template>

<script>
import header from './components/header'
import body  from './components/body'
import descriptions from './data/saletext.js'
import liked from "./data/like.js"
import footer from './components/footer.vue'
import footers from './data/footers.js'
export default {
  name: 'app',
  components:{
    'my-header': header,
    'my-body' : body,
    'my-footer': footer
  },
  data:function(){
    return{
      descriptions,
      liked,
      footers
    }
  }
}
</script>

<style>
  #app{
    width: 750px;
    height:108px;
    margin: 0 auto;
  }
</style>
