let var_notify = require("../../Components/notify/notify.js");
Page({
  aaa(e){
    console.log(e.detail.content);
  },
  bbb(e){
    console.log(e.detail.content);
  },
  click_me(){
    var_notify();
  }
});