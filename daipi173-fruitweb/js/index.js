var btn = document.getElementsByClassName('btn')[0],
headermax = document.getElementsByClassName('header-max')[0];
btn.onclick = function(){
    if(document.getElementsByClassName('header-active')[0]){
    //    console.log(document.getElementsByClassName('header-active')[0]);
    headermax.classList.remove('header-active');
    }
    else{
    headermax.classList.add('header-active');
    }
};