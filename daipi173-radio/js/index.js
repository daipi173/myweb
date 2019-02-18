var Audio = document.getElementById('audio'),
StartTime = document.getElementsByClassName('startTime')[0],
EndTime = document.getElementsByClassName('endTime')[0],
Btn = document.getElementsByClassName('btn')[0],
play = Btn.getElementsByClassName('iconfont')[0],
ProActive = document.getElementsByClassName('proActive')[0],
PointBox = document.getElementsByClassName('point-box')[0],
ProBox = document.getElementsByClassName('proBox')[0],
Prev = document.getElementsByClassName('prev')[0],
Next = document.getElementsByClassName('next')[0],
Voice = document.getElementsByClassName('voice')[0],
VoiceBox = document.getElementsByClassName('voice-box')[0],
Vpoint = document.getElementsByClassName('vpoint')[0],
VoiceActive = document.getElementsByClassName('voice-active')[0],
voicePoint = document.getElementsByClassName('voice-point')[0];

var timer,
    duration,
    allWidth=232,
    timer2;
var Img1 = document.getElementById('img1');
// Audio.oncanplay = function(){
//     StartTime.innerHTML = Change(Audio.currentTime);
//     duration = this.duration;
//     EndTime.innerHTML = Change(duration);
// };

// 线上网络资源用ondurationchange
// Audio.ondurationchange = function(){
//     StartTime.innerHTML = Change(Audio.currentTime);
//     duration = this.duration;
//     EndTime.innerHTML = Change(duration);
// };
window.onload = function(){
    StartTime.innerHTML = Change(Audio.currentTime);
    duration = Audio.duration;
    EndTime.innerHTML = Change(duration);
};

//改变时间的格式
function Change(time){
    var second = parseInt(time%60) < 10 ? '0'+parseInt(time%60) : parseInt(time%60);
    var minute = parseInt(time/60) <10 ? '0'+parseInt(time/60) : parseInt(time/60);
    return minute + ":" + second;
}

function musicPlay(){
    Audio.play(); 
    Img1.className = 'img1';
    play.className = 'iconfont icon-bofang';
    timer = setInterval(movePro,200);
}
function musicPause(){
    Audio.pause();
    play.className = 'iconfont icon-play_icon';
    clearInterval(timer);
}
Btn.onmouseup = function(){
    if(Audio.paused){
       musicPlay();
    }
    else{
        musicPause();
    }                                  
};

function movePro(){
    var currentTime = Audio.currentTime;
    StartTime.innerHTML = Change(currentTime);
    ProActive.style.width = currentTime/duration * allWidth + 8 + 'px';
}
//播放器上一首、下一首按钮实现
var arr = ['source/1.mp3','source/2.mp3','source/3.mp3'];
var num = 0;
Prev.onclick = function(){
    if(num == 0){
        num = arr.length-1;
    }else{
        num--;
    }
    Audio.src = arr[num];
    Audio.load();
    musicPlay();  
};
Next.onclick = function(){
    clearInterval(timer);
    if(num == arr.length-1){
        num = 0;
    }else{
        num++;
    }
    Audio.src = arr[num];
    Audio.load();
    musicPlay();
};
//播放器结束是否执行下一首    
Audio.onended = function (){
    musicPause();
    StartTime.innerHTML = Change(0);
    Audio.currentTime = 0;
    ProActive.style.width = 8 + 'px';
    Next.onclick();
};

ProBox.onmousedown = function (){
    clearInterval(timer);
    var c = Audio.currentTime;
    document.body.onmousemove = function (e){
        var newWidth = e.clientX - ProBox.getBoundingClientRect().left;
        // if(newWidth < 0){
        //     newWidth = 0;
        // }
        // else if(newWidth > 232){
        //     newWidth = 232;
        // }
        if(newWidth < 8){
            newWidth = 8;
        }
        else if(newWidth > 240){
            newWidth = 240;
        }
        // ProActive.style.width = newWidth + 8 + 'px';
        ProActive.style.width = newWidth + 'px';
        c = (newWidth-8)/allWidth * duration;
        StartTime.innerHTML = Change(c);
    };
    document.body.onmouseup = function(){
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        musicPlay();
        Audio.currentTime = c;
    };
};

//进度条点击事件
ProBox.onclick = function(e){
    clearInterval(timer);
    var c = Audio.currentTime;
    var newWidth = e.clientX - ProBox.getBoundingClientRect().left;
    if(newWidth < 8){
        newWidth = 8;
    }
    else if(newWidth > 240){
        newWidth = 240;
    }
    ProActive.style.width = newWidth + 'px';
    c = (newWidth-8)/allWidth * duration;
    StartTime.innerHTML = Change(c);
    musicPlay();
    Audio.currentTime = c;
};

//控制音量进度条是否显现
var flag = 1;
Voice.onclick = function(){
    if(flag){
        VoiceBox.style.display = 'block';
    }else{
        VoiceBox.style.display = 'none';
    }
   flag = !flag;
};

var VoiceI = document.getElementById('voice-point');
//控制音量条进度
Vpoint.onmousedown = function(){
    document.body.onmousemove = function (e){
        var newHeight = e.clientY - VoiceBox.getBoundingClientRect().top;
        VoiceI.className = 'iconfont icon-icon--';
        if(newHeight > 150){
            newHeight = 150;   
        }
        else if(newHeight < 8){
            newHeight = 8;
            VoiceI.className = 'iconfont icon-weibiaoti1';
        }else if(newHeight >=8 && newHeight <=150){
            VoiceI.className = 'iconfont icon-weibiaoti1';
        }
        VoiceActive.style.height = (150-newHeight) + 8 + 'px';
        var newvolume = 1-parseInt(newHeight/142*1*10)/10;
        if(newvolume > 1){
            newvolume = 1;
        }else if(newvolume < 0){
            newvolume = 0;
        }
        Audio.volume = newvolume;
        // console.log(Audio.volume);
        document.body.onmouseup = function(e){
            console.log(7777);         
            document.body.onmousemove = null;
            document.body.onmouseup = null;
            VoiceBox.style.display = 'none';
        };
    };
};

Vpoint.onclick = function(e){
    e.stopPropagation();
};
//点击音量
VoiceBox.onclick = function(e){
    console.log(8888);
    var newHeight = e.clientY - VoiceBox.getBoundingClientRect().top;
    VoiceI.className = 'iconfont icon-icon--';
    if(newHeight > 150){
        newHeight = 150;   
    }
    else if(newHeight < 8){
        newHeight = 8;
        VoiceI.className = 'iconfont icon-weibiaoti1';
    }else if(newHeight >=8 && newHeight <=150){
        VoiceI.className = 'iconfont icon-weibiaoti1';
    }
    VoiceActive.style.height = (150-newHeight) + 8 + 'px';
    var newvolume = 1-parseInt(newHeight/142*1*10)/10;
    if(newvolume > 1){
        newvolume = 1;
    }else if(newvolume < 0){
        newvolume = 0;
    }
    Audio.volume = newvolume;
    
};


