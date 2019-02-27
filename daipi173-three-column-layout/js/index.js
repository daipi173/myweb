var lesson = document.getElementsByClassName('lesson')[0],
More = document.getElementsByClassName('more')[0],
teacher = document.getElementsByClassName('teacher')[0],
sheet = document.getElementsByClassName('sheet')[0],
lecture = document.getElementsByClassName('lecture')[0],
about = document.getElementsByClassName('about')[0],
ulright = document.getElementsByClassName('ul-right')[0],
section = document.getElementById('section'),
wrapper = document.getElementsByClassName('wrapper')[0];
wrapper.onmouseover = function(){
    section.style.display = 'block';
};                                                                                                                                           
wrapper.onmouseleave = function(){
    section.style.display = 'none';
};
lesson.onclick = function(){
    More.style.display = 'flex';
    teacher.style.display = 'none';
};
sheet.onclick = function(){
    More.style.display = 'none';
    teacher.style.display = 'flex';
};
lecture.onclick = function(){
    teacher.style.display = 'flex';
    More.style.display = 'none';
};
about.onclick = function(){
    More.style.display = 'flex';
    teacher.style.display = 'none';
};
window.onscroll = function(){
    var scrllTop = document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrllTop);
    if(scrllTop>=20 && scrllTop<=790){
        ulright.style.display = 'block';
        ulright.className = 'flexd';
    }else{
        ulright.style.display = 'none';
    }
};
