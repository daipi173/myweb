var drag = document.getElementsByClassName('drag')[0],
progressbg = document.getElementsByClassName('progress-bg')[0],
Text = document.getElementsByClassName('text')[0];

var file,
    reader = new FileReader(),
    step = 1024*1024,
    count = 0,   //文件已经上传的大小
    fsum;   //文件总大小
drag.addEventListener('dragover',function(e){
    e.preventDefault();
});
drag.addEventListener('drop',function(e){
    e.preventDefault();    //拖拽文件的时候，浏览器会默认帮你打开文件，因此需要取消默认事件
    file = e.dataTransfer.files[0];
    // console.log(file);
    fsum = file.size;
    readerFun(reader,0,step);
    eventFun();
});

//读取文件
function readerFun(reader,start,step){
    var newreader;
    if(file.slice){
        newreader = file.slice(start,start+step);
    }else{
        newreader = file;
    }
    reader.readAsText(newreader);
}

//事件监听
function eventFun(){
    reader.onprogress = function(e){
        progressFun(e.loaded);  //e.loaded表示每次上传的一小部分
    };
    
    reader.onload = function(){
        LoadFun();
    };
}

//获取当前上传多少
function progressFun(num){
    count += num;
    var percent = count / fsum;
    if(percent > 1){
        percent = 1;
    }
    progressbg.style.width = percent * 350 + 'px';
    Text.innerHTML = Math.round(percent * 100) + '%';
}

function LoadFun(){
    var result = reader.result;
    console.log('上传' + count);
    if(fsum > count){
        readerFun(reader,count,step);
    }else{
        console.log('上传成功!');
    }
}