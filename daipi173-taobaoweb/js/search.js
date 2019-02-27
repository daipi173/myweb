let text = document.getElementsByClassName('text')[0];
let oUl = document.getElementsByClassName('search-ul')[0];
text.oninput = function () {
    let val = this.value;
    let oScript = document.createElement('script');
    oScript.src = `https://suggest.taobao.com/sug?q=${val}&callback=cbs`;
    document.body.appendChild(oScript);
    oScript.remove();  //只要你请求，就100%有相应（这里的相应是返回cbs回调函数），只不过相应是正确还是错误的。
};
function cbs(data) {
    if (data.result.length > 0) {
        let str = '';
        data.result.forEach(function (ele, index) {
            str += `<li>${ele[0]}</li>`;
        });
        oUl.innerHTML = str;
        oUl.style.border = "1px solid #ccc";
        oUl.style.display = "block";
    }else{
        oUl.style.display = "none";
    }

}