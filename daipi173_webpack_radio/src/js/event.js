import $ from "jquery";
import render_show from "./render_show";
import {showPlay,time} from "./showPlay";

function event(data){
    let index = 0;
    let len = data.length;
    let flag = true;

    $(".prev-btn").on("click",function(){
        $(".slide-point").css({
            left: 277
        });
        clearInterval(time);
        flag = true;
        if(index == 0){
            index = 2;
        }else{
            index --;
        }
        render_show(data[index]);
        $("#myAudio").attr("src",`./src/source/${index+1}.mp3`);
        $(".play-btn").addClass("playing");
        $("#myAudio")[0].play();
        showPlay(flag,data[index]);
        flag = false;
    });
    
    $(".play-btn").on("click",function(){
        if(flag){
            $(this).addClass("playing");
            $("#myAudio")[0].play();
        }else{
            $(this).removeClass("playing");
            $("#myAudio")[0].pause();
        }
        showPlay(flag,data[index]);
        flag = !flag;
    });

    $(".next-btn").on("click",function(){
        $(".slide-point").css({
            left: 277
        });
        clearInterval(time);
        flag = true;
        if(index == len-1){
            index = 0;
        }else{
            index ++;
        }
        render_show(data[index]);
        $("#myAudio").attr("src",`./src/source/${index+1}.mp3`);
        $(".play-btn").addClass("playing");
        $("#myAudio")[0].play();
        showPlay(flag,data[index]);
        flag = false;
    });

    $(".like-btn").on("click",function(){
        data[index].isLike = !data[index].isLike;
        render_show(data[index]);
    });
}

export default event;