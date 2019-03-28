<template>
    <div id="header">
        <div class="header-top">
            <div class="header-left">
                <a  @click="changeImg" href="javascript:;">&lt;</a>
                <span>积分商城</span>
            </div>
            <div class="header-right">
                <img src="../img/header-img.jpg" alt="" srcset="">
                
            </div>
        </div>
        <div class="bg">
            <img v-if="img==1" src="../img/img1.jpg" alt="">
            <img v-else-if="img==2" src="../img/img2.jpg" alt="">
            <img v-else src="../img/img3.jpg" alt="">
        </div>
        <div class="integration">
            <div class="num">
                <img src="../img/num.jpg" alt="">
                <span class="word"> 0
                    <span class="text">积分</span>
                </span>
            </div>
            <div class="sale">
                <img src="../img/account.jpg" alt="">
                <span class="word">0 
                    <span class="text">优惠券
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            img:1
        }
    },
    methods:{
        changeImg:function(){
            this.img++;
            if(this.img>=3){
                this.img=0
            }
        }
    }
    
}
</script>

<style>
    .header-top{
        display: flex;
        width:100%;
        height:100%;
        justify-content: space-between;
    }
    .header-left{
        margin:30px 30px;
    }
    .header-left a,span{
        color:#000;
        text-decoration:none;
    }
    .header-left a{
        margin: 30px 30px;
        font-size:18px;
    }
    .header-left span{
        margin-left:5px; 
    }
    .header-right{
        margin-top: 30px;
        margin-right: 34px;
        width:206px;
        height:50px;
    }
    .header-right img{
        
        width: 100%;
        height:100%;
    }
    .bg{
        width:750px;
        height:343px;
    }
    .bg img{
        width:100%;
        height:100%;
    }
    .integration{
        height:97px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .integration .num,.sale{
        display: flex;
        justify-content: center;
        width: 378px;
    }
    .num  .word{
        margin-left: 17px;
    }
    .sale .word{
         margin-left: 17px;
    }
    .text{
         margin-left: 12px;
    }
    .integration img{
        height: 28px;
    }
    
</style>
