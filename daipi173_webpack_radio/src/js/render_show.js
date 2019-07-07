import $ from "jquery";
import gaussImage from "./gaussblur";

function renderInfo(data){
    let html = `
    <h3 class="song-name">${data.song}</h3>
    <h4 class="singer-name">${data.singer}</h4>
    <h4 class="album-name">${data.album}</h4>
    `;
    $(".song-info").html(html);
}

function renderImage(image){
   $(".img-wrapper img").attr("src",image);
   //    高斯模糊
   let img = new Image();
   img.src = image;
   img.onload = function(){
    gaussImage(img,$(document.body));
   };
}

function renderIslike(data){
    if(data.isLike){
        $(".like-btn").addClass("liked");
    }else{
        $(".like-btn").removeClass("liked");
    }
}

function renderTime(time){
    let newTime = "00:" + time;
    $(".all-time").html(newTime);
}

export default (val)=>{
    renderInfo(val);
    renderImage(val.image);
    renderIslike(val);
    renderTime(val.duration);
}