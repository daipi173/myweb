var close = document.getElementsByClassName('close')[0],
img = document.getElementsByClassName('img')[0],
inHeight = 0;

window.onload = function(){
    time = setInterval(HeightFun,20);
    img.style.border = '2px solid #000';
};
function HeightFun(){
    if(inHeight < 225){
        inHeight += 3;
        img.style.height = inHeight + 'px';
    }else{
        clearInterval(time);
        img.style.height = '225px';
    }   
}

//点击关闭按钮事件
var time1;
close.onclick = function(){
     time1 = setInterval(CloseFun,20);
};
function CloseFun(){
    if(inHeight > 0){
        inHeight -= 3;
        img.style.height = inHeight + 'px';
    }else{
        clearInterval(time1);
        img.style.height = '0px';
        img.style.border = '0px';
    }
}
