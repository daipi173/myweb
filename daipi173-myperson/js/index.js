var fixe_img = document.getElementsByClassName('fiex-img')[0];
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 450){
        fixe_img.style.opacity = 0.9;
    }else{
        fixe_img.style.opacity = 1;
    }
}
// 我的展示时间 控制列表激活状态
var case_ul = document.getElementsByClassName('case-ul')[0];
var case_li = case_ul.getElementsByTagName('li');
var list_ul = document.getElementsByClassName('list-ul');
var len = case_li.length;
for(var i = 0 ; i < len ; i++){
    case_li[i].onclick = function(){
        for(var j = 0 ; j < len ; j++){
            if(case_li[j] == this){
                this.classList.add('active');
                list_ul[j].classList.remove('remove-show');
            }else{
                case_li[j].classList.remove('active');
                list_ul[j].classList.add('remove-show');
            }
        }
    }
}
var nav_ul = document.getElementById('nav-ul');
var nav_li = nav_ul.getElementsByTagName('li');
var len1 = nav_li.length;
var o_p = document.getElementsByClassName('animation')[0].getElementsByTagName('p')[0];
for(var i = 0 ; i < len1 ; i++){
    nav_li[i].onclick = function(){
        for(var j = 0 ; j < len1 ; j++){
            if(this == nav_li[j]){
                this.getElementsByTagName('a')[0].classList.add('home-page');
                if(j == 0){
                    o_p.classList.add('move');
                    $('.send').css("display","none");
                }else if(j !=0 ){
                    o_p.classList.remove('move');
                    $('.send').css("display","none");
                    $('.send').css("opacity",0);
                 
                    if(j == 1){
                     $('.send').css("display","block");
                     $('.send').animate({
                        opacity: 0.6
                     },2000);
                    }
                }
            }else{
                nav_li[j].getElementsByTagName('a')[0].classList.remove('home-page');
                
            }
        }
    }
}
// More
let caseBtn = document.querySelector('.case-btn')
let showMore = document.getElementById('show-more')
caseBtn.onclick = function() {
    showMore.style.display = 'flex'
}
