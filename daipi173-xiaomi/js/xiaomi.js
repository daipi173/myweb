var control = document.getElementById("control").getElementsByTagName("li");
var Xiaomilist = document.getElementById("xiaomi-list").getElementsByTagName("ul");
var Car = document.getElementsByClassName('car')[0],
    CarHidden = document.getElementsByClassName('car-hidden')[0];
for (var i = 0; i < control.length; i++) {
    control[i].onclick = showThis;
}
function showThis() {
    for (var i = 0; i < control.length; i++) {
        if (control[i] === this) {
            control[i].className = "active";
            Xiaomilist[i].className = "clearfix xiaomi-active";
        }
        else {
            control[i].className = "";
            Xiaomilist[i].className = "clearfix";
        }
    }
}

var Xiaomishopnav = document.getElementById("xiaomi-shopnav");
window.onscroll = function () {
    var scrllTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrllTop);
    if (scrllTop >= 275) {
        Xiaomishopnav.className = "xiaomi-shopnav xiaomi-shopnavfixed";
    } else {
        Xiaomishopnav.className = "xiaomi-shopnav";
    }
}

Car.onmouseover = function () {
    CarHidden.style.display = 'block';
};
Car.onmouseout = function () {
    CarHidden.style.display = 'none';
};

var SeachForm = document.getElementsByClassName('search-form')[0],
    SmallTitle = document.getElementsByClassName('small-title')[0],
    SearchText = document.getElementsByClassName('search-text')[0],
    SearchBtn = document.getElementsByClassName('search-btn')[0];

SeachForm.onmouseover = function () {
    SearchText.style.border = '1px solid rgb(176,176,176)';
    SearchBtn.style.border = '1px solid rgb(176,176,176)';
};
SeachForm.onmouseout = function () {
    SmallTitle.style.display = 'inline-block';
    SearchText.style.border = '1px solid #e0e0e0';
    SearchBtn.style.border = '1px solid #e0e0e0';
    SearchText.blur();
};
SeachForm.onclick = function () {
    SmallTitle.style.display = 'none';
    SearchText.style.border = '1px solid orange';
    SearchBtn.style.border = '1px solid orange';
};

// 倒计时
var text = "";
var h = 10;
var m = 0;
var s = 11;
var str = "";
var timer = document.getElementById("timer");
var timer1 = setInterval(function () {
    s--;
    if (s < 0) {
    m--;
    s = 59;
        if (m < 0) {
            h--;
            m = 59;
        }
    }
    if(s/10 < 1){
        s = "0" + s;
    }
    if(s==0 && m==0 && h==0){
        clearInterval(timer1);
    }
        text = h + ":" + m + ":" + s;
    if(h < 10 && m < 10){
        text = "0" + h + ":0" + m + ":" + s;
    }else if(h < 10){
        text = "0" + h + ":" + m + ":" + s;
    }else if(m < 10){
        text = h + ":0" + m + ":" + s;
    }
    timer.innerHTML = `即将开始<br>距离开始${text}`;
}, 1000);

