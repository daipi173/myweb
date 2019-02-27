let index = 0;
let move_width = 520;
let timer = null;
let timerFun = () => {
    timer = setTimeout(() => {
        moveFun('next');
    }, 2000);
};
let activeFun = (item) => {
    $('.item').removeClass('active');
    item.addClass('active');
};
let moveFun = (des) => {
    clearInterval(timer);
    // $('.play .img-box').stop(false,true);
    if (des == 'prev') {
        index--;
        if (index < 0) {
            $('.play .img-box').css({
                left: -2600
            });
            index = 4;
        }
    }else if (des == 'next') {
        index++;
        if (index > 5) {
            $('.play .img-box').css({
                left: 0
            });
            index = 1;
        }
    }
    $('.play .img-box').stop(true,false).animate({
        left: -move_width * index
    }, () => {
        timerFun();
    });
    activeFun($('.item').eq(index == 5 ? 0 : index));
}
timerFun();

$('.prev').click(() => {
    moveFun('prev');
})
$('.next').click(() => {
    moveFun('next');
});
$('.dot .item').click(function () {
    index = $(this).index();
    moveFun('');
});
$('.play').mouseenter(function () {
    $('.prev').add('.next').css('display', 'inline-block');
});
$('.play').mouseleave(function () {
    $('.prev').add('.next').css('display', 'none');
});


let index1 = 0;
let move1_width = 520;
let timer1 = null;
let number;
let timer1Fun = () => {
    timer1 = setTimeout(() => {
        move1Fun('next1');
    }, 3000);
};
let active1Fun = (item)=>{
    $('.item1').removeClass('press-active');
    item.addClass('press-active');
};
let move1Fun = (des) => {
    clearInterval(timer1);
    if (des == 'next1') {
        index1++;
        if(index1 > 4){
            $('.tmall-ul').css({
                left: 0
            });
            index1 = 1;
        }
    }else if (des == 'prev1') {
        index1--;
        if(index1 < 0){
            $('.tmall-ul').css({
                left: -2080
            });
            index1 = 3;
        }
    }
    $('.tmall-ul').stop(true, false).animate({
        left: index1 * -move1_width
    }, () => {
        timer1Fun();
    });
    active1Fun($('.item1').eq(index1 == 4 ? 0 : index1));
    number = index1;
    if(number == 4){
        number = 0;
    }
    $('.number').text(number+1);
};
timer1Fun();

$('.press-box .item1').click(function(){
    index1 = $(this).index();
    move1Fun('');
});


$('.next1').click(() => {
    move1Fun('next1');
});
$('.prev1').click(() => {
    move1Fun('prev1');
});
$('.tmall-box').mouseenter(function () {
    $('.prev1').add('.next1').css('display', 'inline-block');
});
$('.tmall-box').mouseleave(function () {
    $('.prev1').add('.next1').css('display', 'none');
});
