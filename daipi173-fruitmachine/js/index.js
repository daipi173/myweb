var play_btn = document.getElementsByClassName('play')[0],
    table_td = document.getElementById('table').getElementsByTagName('td'),
    arr_td = [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5],
    len = arr_td.length,
    i = 0,
    count,
    random_num,
    box = document.getElementsByClassName('box')[0],
    green = document.getElementsByClassName('green'),
    two_award = document.getElementsByClassName('two-award'),
    one_award = document.getElementsByClassName('one-award'),
    no_win = document.getElementsByClassName('no-win');
//记录得奖的3个数
var gainArr = [6, 7, 8],
    j = 0,
    n = 0;
var numArry = [],
numArry1 = [],
numArry2 = [];//存三位数字
var timer = null;
//奖励图片
var seconde_award = document.getElementsByClassName('two_award')[0],
nowin = document.getElementsByClassName('no_win')[0],
better_win = document.getElementsByClassName('better')[0];
play_btn.onclick = function () {
    n++;
    //产生随机圈数
    count = 0;
    random_num = 16 * 3 + parseInt(Math.random() * 16);
    if(timer == null){
        timer = setInterval(show, 300);
    } 
};
//相同水果的位置
var water = [1, 3, 5, 7, 9],
    sum = 0,
    pear = [2, 4, 6, 8, 10],
    sum1 = 0,
    apple = [11, 13, 15],
    sum2 = 0,
    bar = [12, 14, 16],
    sum3 = 0;

function show() {
    count++;
    table_td[arr_td[i]].id = "";
    i = i + 1 >= len ? 0 : (i + 1);
    table_td[arr_td[i]].id = "active";
    if (random_num <= count) {
        clearInterval(timer);
        timer = null;
        if (n == 3) {
            box.innerHTML = "game over";
        }
        if (j == 3) {
            j = 0;
        }
        table_td[gainArr[j]].innerHTML = table_td[arr_td[i]].innerHTML;
        numArry[j] = table_td[arr_td[i]].innerHTML;
        table_td[gainArr[j]].style.color = "red";
        table_td[gainArr[j]].style.background = "yellow";
        j++;
        //判断是否中奖
        if (j == 3) {
            // console.log(numArry)
            for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 3; y++) {
                    if (water[x] == numArry[y]) {
                        sum++;
                    }
                    if(pear[x] == numArry[y]){
                        sum1++;
                    }
                }
            }

            for(var x = 0; x < 3; x++){
                for(var y = 0; y < 3; y++){
                    if(apple[x] == numArry[y]){
                        sum2++;
                    }
                    if(bar[x] == numArry[y]){
                        sum3++;
                    }
                }
            }
            
            // console.log(sum);
                    if(sum >= 2 || sum1 >=2 || sum2 >= 2 || sum3 >= 2){
                        if(sum == 3 || sum1 == 3 || sum2 == 3 || sum3 == 3){
                            // console.log("better winer");
                            for(var x=0;x<green.length;x++){
                                green[x].style.background = "red";
                                one_award[x].style.display = "block";
                            }
                            better_win.style.display = "block";
                            
                        }else{
                            for(var x=0;x<green.length;x++){
                                green[x].style.background = "green";
                                two_award[x].style.display = "block";
                            }
                            seconde_award.style.display = "block";
                        }
                    }else{
                        for(var x=0;x<green.length;x++){
                            green[x].style.background = "black";
                            no_win[x].style.display = "block";
                        }
                        nowin.style.display = "block";
                    }
        }
    }
    if (count == 4) {
        clearInterval(timer);
        timer = setInterval(show, 30);
    }
    if (random_num == count + 4) {
        clearInterval(timer);
        timer = setInterval(show, 300);
    }
}


