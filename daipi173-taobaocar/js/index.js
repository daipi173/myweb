let value = 1;
let max = 15;
let change_text = ()=>{
    if(value >= max){
        $('.up').addClass('scape');
        $('.down').removeClass('scape');
        $('.big').addClass('numberactive');
        $('.less').removeClass('numberactive');
    }else if(value <= 1){
        $('.down').addClass('scape');
        $('.up').removeClass('scape');
        $('.less').addClass('numberactive');
        $('.big').removeClass('numberactive');
    }else{
        $('.scape').removeClass('scape');
        $('.big').removeClass('numberactive');
        $('.less').removeClass('numberactive');
    }
}
change_text(value);
$('.number').on('input',function(){
    change_count(0);
    change_text();
});

let change_count = (val)=>{
    value = parseInt($('input').val()) + val;
    if(value <= 1 || isNaN(value)){
        value = 1;
    }else if(value >= max){
        value = max;
    }
    $('input').val(value);
};
$('.number').find('.up').click(function(){
    change_count(1);
    change_text();
}).end().find('.down').click(function(){
    change_count(-1);
    change_text();
 });  
