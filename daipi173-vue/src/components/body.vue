<template>
  <div class="wrap">
    <div class="like">
        <img src="../img/active.jpg" alt="">
    </div>
    <div class="sale">
        <div 
        v-for="(item,index) in title"
        :key="index"
        class="sale-picture">
            <img
            :src="item.saleSrc" 
            alt>
            <img class="low-sale" src="../img/sale.jpg" alt>
            <span class="low-sale-text"><big>8.</big><small>5折</small></span>
            <p class="description">{{item.saleDescription}}</p>
            <hr>
            <p class="sale-point">
                <span class="point">{{item.salePoint}}</span> 积分
                <span class="change">立即兑换</span>
            </p>
        </div>      
    </div>
    <div class="like">
        <img src="../img/liked.jpg" alt="">
    </div>
    <div class="sale">
        <div 
        v-for="(like,index) in likes"
        :key="index"
        class="sale-picture">
            <img
            :src="like.saleSrc" 
            alt>
            <img class="low-sale" src="../img/sale.jpg" alt>
            <span class="low-sale-text"><big>8.</big><small>5折</small></span>
            <p class="description">{{like.saleDescription}}</p>
            <hr>
            <p class="sale-point">
                <span class="point">{{like.salePoint}}</span> 积分
                <span class="change">立即兑换</span>
            </p>
        </div>      
    </div>
  </div>
</template>
<script>


export default {
    
    props:{
        title:Array,
        likes:Array
    },
};
</script>
<style scoped>
.wrap {
    width: 750px;
    background: rgb(245,245,245);
    padding-bottom:45px;
}
.like{
    width:658px;
    height:30px;
    margin: 0px auto;
    padding-top: 20px;
}
.like img{
    display: block;
    width:231px;
    height:30px;
    margin: 0 213px;
}
.sale {
    width: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.sale-picture{
    width:327px;
    position: relative;
    height:411px;
    margin-left:24px;
    margin-right:24px;
    
    margin-top:28px;
    background: #fff;
}

.sale img{
    display: block;
    width: 290px;
    height:314px;
}
.sale .low-sale,.low-sale-text{
    position: absolute;
    top:0;
    right:0;
    display: block;
    width:77px;
    height:77px;
}
.low-sale-text{
    text-align: center;
    padding:10px;
}
.low-sale-text big{
    font-size:20px;
    color:#fff;
}
.low-sale-text small{
    font-size:12px;
    color:#fff;
}
.description{
    margin: 0;
    padding:0;
    text-align: center;
}
.sale-point{
  
    color:rgb(160,160,160)
}
.point{
    margin-left: 24px;
    color:rgb(232,95,28)
}
.change{
    display: block;
    float: right;
    margin-right: 14px;
    border:2px solid rgb(233,53,62);
    border-radius:10px;
    
  
}
</style>


