let time = null;
let all_width = 288;
let change = 0;
let left = 0;
let start = 0;
let s = 0;

function showPlay(flag,data){
    let slide_point = document.getElementsByClassName("slide-point")[0];
    let my_audio = document.getElementById("myAudio");
    let cur_time = document.getElementsByClassName("cur-time")[0];
    let play_btn = document.getElementsByClassName("play-btn")[0];

    if(flag){
        time = setInterval(function(){ 
            start = parseInt(my_audio.currentTime);
            left = slide_point.offsetLeft;
            slide_point.style.left = 277 + start / data.duration * all_width + 8 + "px";
            s = start;
            start = start < 10 ? `00:0${start}` : `00:${start}`;
            cur_time.innerHTML = start;

            if(s == data.duration){
                clearInterval(time);
                play_btn.className = "btn-wrap play-btn";
                slide_point.style.left = 277 + 288 + "px";
            }
            
        },200);
    }else{
        clearInterval(time);
    }
}

export {showPlay,time};
