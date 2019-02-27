var control = document.getElementById("control").getElementsByTagName("li");
var Xiaomilist = document.getElementById("xiaomi-list").getElementsByTagName("ul");
var Car = document.getElementsByClassName('car')[0],
CarHidden = document.getElementsByClassName('car-hidden')[0];
for(var i=0;i<control.length;i++){
    control[i].onclick = showThis;
}
function showThis(){
    for(var i=0;i<control.length;i++){
        if(control[i] === this){
            control[i].className = "active";
            Xiaomilist[i].className = "clearfix xiaomi-active";
        }
        else{
            control[i].className = "";
            Xiaomilist[i].className = "clearfix";
        }
    }
}

var Xiaomishopnav = document.getElementById("xiaomi-shopnav");
    window.onscroll = function(){
        var scrllTop = document.documentElement.scrollTop||document.body.scrollTop;
        // console.log(scrllTop);
        if(scrllTop>=275){
            Xiaomishopnav.className ="xiaomi-shopnav xiaomi-shopnavfixed";
        }else{
            Xiaomishopnav.className ="xiaomi-shopnav";
        }
    }

    Car.onmouseover = function(){
        CarHidden.style.display = 'block';
    };
    Car.onmouseout = function(){
        CarHidden.style.display = 'none';
    };

    var SeachForm = document.getElementsByClassName('search-form')[0],
    SmallTitle = document.getElementsByClassName('small-title')[0],
    SearchText = document.getElementsByClassName('search-text')[0],
    SearchBtn = document.getElementsByClassName('search-btn')[0];
 
    SeachForm.onmouseover = function(){
        SearchText.style.border = '1px solid rgb(176,176,176)';
        SearchBtn.style.border = '1px solid rgb(176,176,176)';
    };
    SeachForm.onmouseout = function(){
        SmallTitle.style.display = 'inline-block';
        SearchText.style.border = '1px solid #e0e0e0';
        SearchBtn.style.border = '1px solid #e0e0e0';
        SearchText.blur();
    };
        SeachForm.onclick = function(){
        SmallTitle.style.display = 'none';
        SearchText.style.border = '1px solid orange';
        SearchBtn.style.border = '1px solid orange';
    };