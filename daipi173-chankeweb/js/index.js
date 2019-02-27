var nav = document.getElementsByClassName('nav')[0].getElementsByClassName('warpper')[0],
nav_list = nav.getElementsByTagName('div'),
len = nav_list.length,
nav_p = nav.getElementsByTagName('p'),
nav_header = document.getElementsByClassName('nav')[0];
//给鼠标绑定移入移出事件
    for(var i=0;i<len;i++){
        nav_list[i].onmouseover = showOver;
        nav_list[i].onmouseout = showOut;
    }

    //鼠标移入
    function showOver(){
      for(var i=0;i<len;i++){
        if(nav_list[i]==this && i!=2){
            // console.log(nav_p[i]);
            nav_p[i].className = '';
        }
      }      
    }

    //鼠标移出
    function showOut(){
        for(var i=0;i<len;i++){
          if(nav_list[i]==this && i!=2){
              nav_p[i].className = 'nav_p';
          }
        }      
      }

//判断导航栏距离顶点的距离
window.onscroll = function(){
    var scrollTop  = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollTop > 300){
       nav_header.style.height = 70 + 'px';
       nav_header.style.lineHeight = 70 + 'px';
       for(var i=0;i<len;i++){
        nav_p[i].style.bottom = 6 + 'px';
       } 
    }else{
        nav_header.style.height = 100 + 'px';
        nav_header.style.lineHeight = 100 + 'px';
        for(var i=0;i<len;i++){
            nav_p[i].style.bottom = 15 + 'px';
        } 
    }
};

//点击右边按钮实现列表的拉伸
var nav_right = document.getElementById('nav-right'),
warpper3 = document.getElementById('warpper3'),
flag = true;

nav_right.onclick = function(){
    if(flag){
        // console.log('true');
        warpper3.id = '';
        flag = !flag;
    }else{
        // console.log('false');
        warpper3.id = 'warpper3';
        flag = !flag;
    }
};