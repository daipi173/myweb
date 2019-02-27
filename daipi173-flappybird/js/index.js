var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var img = new Image();
var bgWidth = 0;
var bgHeight = 0;
var move = 0;
img.src = "./img/bg_day.png";
var land = new Image();
land.src = "./img/land.png";
img.onload = function () {
    // ctx.drawImage(img,0,0);
    bgWidth = img.width;
    bgHeight = (myCanvas.height - img.height) / 2;
};
// 小鸟图片
var birdarr = [];
var birdId = 0;
var birdX = myCanvas.width / 2;
var birdY = myCanvas.height / 2;
for (var i = 0; i < 3; i++) {
    birdarr[i] = new Image();
    birdarr[i].src = `img/bird0_${i}.png`;
}

var spin = 0;  //控制小鸟旋转
// 绘制水管
var pDown = new Image();
pDown.src = "./img/pipe_down.png";
var pUp = new Image();
pUp.src = "./img/pipe_up.png";
var pipeheight = 150; //管道最小值为150
var pspace = 150; //小鸟通过的间隙定值为150
var pspeed = myCanvas.width;
var birdWidth = 36;
var birdHeight = 30;
var num = 0;
var g = 0;
var s = 0;
// 游戏结束场景
var gameover = new Image();
gameover.src = "./img/text_game_over.png";
var score = new Image();
score.src = "./img/score_panel.png";
var rank = new Image();
rank.src = "./img/button_score.png";
// 小鸟失败后重新开始刷新按钮
var again = new Image();
again.src = "./img/button_play.png";
// 小鸟失败后重新开始刷新按钮标志
var flag2 = true;
//开始场景
var timer1 = null;
var flag = true;
var startBg = new Image();
startBg.src = "./img/tutorial.png";
var getready = new Image();
getready.src = "./img/text_ready.png";
// ok按钮
var ok = new Image();
ok.src = "./img/button_ok.png";
window.onload = function () {
    ctx.fillStyle = "#4EC0CA";
    ctx.fillRect(0, 0, myCanvas.width, bgHeight);
    ctx.drawImage(img, move, bgHeight);
    ctx.drawImage(img, bgWidth + move, bgHeight);
    ctx.drawImage(img, bgWidth * 2 + move, bgHeight);
    ctx.drawImage(land, 0, bgHeight + img.height, 600, bgHeight);
    ctx.drawImage(startBg, myCanvas.width / 2 - 57, myCanvas.height / 2 - 120);
    ctx.drawImage(getready, myCanvas.width / 2 - 98, myCanvas.height / 2);
    ctx.drawImage(ok,myCanvas.width/2-40,myCanvas.height/2+80);
}

myCanvas.addEventListener("click", function () {
    if (flag) {
        timer1 = setInterval(update, 30);
        flag = false;
    }
});
// 暂停
var pause = new Image();
pause.src = "./img/button_pause.png";
// 播放
var play = new Image();
play.src = "./img/button_resume.png";
// 播放标记
var flag1 = true;
var cancel_click = 0;
// 标题
var title = new Image();
title.src = "./img/title.png";

function update() {
    pspeed -= 4;  //水管移动速度
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);  //清理缓存
    ctx.drawImage(img, move, bgHeight);
    ctx.drawImage(img, bgWidth + move, bgHeight);
    ctx.drawImage(img, bgWidth * 2 + move, bgHeight);
    ctx.drawImage(land, 0, bgHeight + img.height, 600, bgHeight);
    if (move > -bgWidth) {
        move--;
    } else {
        move = 0;
    }
    ctx.fillStyle = "#4EC0CA";
    ctx.fillRect(0, 0, myCanvas.width, bgHeight);
    // ctx.fillStyle = "#5EE270";
    // ctx.fillRect(0,bgHeight + img.height,myCanvas.width,bgHeight);
    birdId++;
    if (birdId == 3) {
        birdId = 0;
    }
    // 保存和返回最开始的画布
    ctx.save();
    // 让舞台进行移动、旋转 
    ctx.translate(birdX, birdY);
    ctx.rotate(spin);
    // 把小鸟的中心点移动到左上方
    ctx.drawImage(birdarr[birdId], -birdarr[birdId].width / 2, -birdarr[birdId].height / 2);
    ctx.restore();

    // 绘制管道
    if (pspeed > -52) {
        ctx.drawImage(pDown, pspeed, 0, 52, pipeheight);
        ctx.drawImage(pUp, pspeed, pipeheight + pspace, 52, myCanvas.height - pspace - pipeheight);
    } else {
        pspeed = myCanvas.width;
        pipeheight = parseInt(Math.random() * 190) + 150;
    }

    // 小鸟下坠
    if (birdY < myCanvas.height) {
        birdY += 4;
    }
    if (spin < 0.5) {
        spin += 0.05;
    }

    // 碰撞检测
    var numg_img = new Image();
    var nums_img = new Image();
    numg_img.src = `./img/font_${g}.png`;
    ctx.drawImage(numg_img, 30, 10);
    nums_img.src = `./img/font_${s}.png`;
    ctx.drawImage(nums_img, 5, 10);

    if ((birdY < 20) || (birdY + 10 > myCanvas.height - bgHeight) || (birdX + birdWidth - 20 > pspeed) &&
        (birdX - 10 < pspeed + 52) &&
        ((birdY - 10 < pipeheight) || (birdY + 10 > pipeheight + pspace))) {
        // alert("撞上了");
        ctx.drawImage(gameover, myCanvas.width / 2 - 102, myCanvas.height / 2 - 180);
        ctx.drawImage(score, myCanvas.width / 2 - 119, myCanvas.height / 2 - 100);
        ctx.drawImage(rank, myCanvas.width / 2, myCanvas.height / 2 + 55);
        ctx.drawImage(again, myCanvas.width / 2 - 120, myCanvas.height / 2 + 55);
        ctx.drawImage(play, 380, 16);
        // 绘制最后的分数在图片中
        ctx.font = "24px Georgia";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = "#000";
        ctx.fillText(num, myCanvas.width / 2 + 70, myCanvas.height / 2 - 55);
        // 小鸟失败后重新开始刷新按钮
        myCanvas.onclick = function (e) {
            var e_x = e.offsetX;
            var e_y = e.offsetY;
            if (e_x >= myCanvas.width / 2 - 120 &&
                e_x <= myCanvas.width / 2 - 120 + 116 &&
                e_y >= myCanvas.height / 2 + 55 &&
                e_y <= myCanvas.height / 2 + 55 + 70) {
                if (flag2) {
                    window.location.reload(true);
                    flag2 = false;
                }
            }
            // 小鸟失败后当前排名图片
            if (e_x >= myCanvas.width / 2 &&
                e_x <= myCanvas.width / 2  + 116 &&
                e_y >= myCanvas.height / 2 + 55 &&
                e_y <= myCanvas.height / 2 + 55 + 70){ 
                    switch(s){
                        case 0:
                        alert("你当前的排名为99+！请继续努力哟");
                        break;
                        case 1:
                        alert("你当前的排名为88！还需努把力");
                        break;
                        case 2:
                        alert("你当前的排名为77！有进步哟");
                        break;
                        case 3:
                        alert("你当前的排名为66！加油我看好你");
                        break;
                        case 4:
                        alert("你当前的排名为55！不错不错");
                        break;
                        case 5:
                        alert("你当前的排名为44！离前面已经很近了");
                        break;
                        case 6:
                        alert("你当前的排名为33！稳住我们能胜利");
                        break;
                        case 7:
                        alert("你当前的排名为22！下一个大神就是你");
                        break;
                        case 8:
                        alert("你当前的排名为11！很遗憾差一点进前10");
                        break;
                        case 9:
                        alert("你当前的排名为1！哇大神太腻害了");
                        break;
                    }
                }
        }
        clearInterval(timer1);
    } else if (birdX - birdWidth > pspeed + 52 && birdX - birdWidth < pspeed + 52 + 2) {
        g = ++num;
        if (num >= 10) {
            s = parseInt(num / 10);
            g = num % 10;
        }
    }
    ctx.drawImage(pause, 380, 16);
}
//点击小鸟飞起来
myCanvas.onclick = function (e) {
    if (cancel_click == 0) {
        birdY -= 30;
        spin = -0.5;
    }
    var e_x = e.offsetX;
    var e_y = e.offsetY;
    if (e_x >= 380 && e_x <= 406 && e_y >= 16 && e_y <= 44) {
        flag1 = !flag1;
        if (flag1 == false) {
            clearInterval(timer1);
            ctx.drawImage(play, 380, 16);
            ctx.drawImage(title, myCanvas.width / 2 - 89, myCanvas.height / 2 - 24);
            cancel_click = 1;
        } else if (flag1 == true) {
            timer1 = setInterval(update, 30);
            ctx.drawImage(pause, 380, 16);
            cancel_click = 0;
        }
    }

}

