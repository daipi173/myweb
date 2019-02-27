var ul = document.getElementsByTagName('ul')[0],
li = document.getElementsByTagName('li'),
len = li.length;
window.onload = function(){
    ul.className = 'active';
};
// for(var j=0;j<len;j++){
//     li[j].onmouseenter = function(e){
//                 // console.log(j);
//                  var Des = this.getElementsByClassName('des')[0];
//                 //  console.log(Des);
//                  var des = Defun(e,this); 
//                  // console.log(des);
//                  Des.className = 'des';
//                  if(des == 0){
//                      Des.classList.add('intop');
//                  }
//                  if(des == 1){
//                     Des.classList.add('inright');
//                  }
//                  if(des == 2){
//                     Des.classList.add('inbottom');
//                  }
//                  if(des == 3){
//                     Des.classList.add('inleft');
//                  }
//              };
//              li[j].onmouseleave = function(e){
//                          var des = Defun(e,this);
//                          // console.log(des);
//                          var Des = this.getElementsByClassName('des')[0];
//                          Des.className = 'des';
//                          if(des == 0){
//                              Des.classList.add('outtop');
//                          }
//                          if(des == 1){
//                             Des.classList.add('outright');
//                          }
//                          if(des == 2){
//                             Des.classList.add('outbottom');
//                          }
//                          if(des == 3){
//                             Des.classList.add('outleft');
//                          }
//                      }
for(var i=0;i<len;i++){
    (function(j){
        li[j].onmouseenter = function(e){
            // console.log(j);
             var Des = li[j].getElementsByClassName('des')[0];
            //  console.log(Des);
             var des = Defun(e,this); 
             // console.log(des);
             Des.className = 'des';
             if(des == 0){
                 Des.classList.add('intop');
             }
             if(des == 1){
                Des.classList.add('inright');
             }
             if(des == 2){
                Des.classList.add('inbottom');
             }
             if(des == 3){
                Des.classList.add('inleft');
             }
         };
         li[j].onmouseleave = function(e){
             var des = Defun(e,this);
             // console.log(des);
             var Des = li[j].getElementsByClassName('des')[0];
             Des.className = 'des';
             if(des == 0){
                 Des.classList.add('outtop');
             }
             if(des == 1){
                Des.classList.add('outright');
             }
             if(des == 2){
                Des.classList.add('outbottom');
             }
             if(des == 3){
                Des.classList.add('outleft');
             }
         }
    })(i); 
}
function Defun(e,This){
    var w = This.offsetWidth;
    var h = This.offsetHeight;
    var x = (e.offsetX - w/2) * (w > h ? h/w : 1);
    var y = (e.offsetY - h/2) * (h > w ? w/h : 1);
    var des = (Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4;
    return des;
}