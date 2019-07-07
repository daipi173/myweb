module.exports = function(){
  let page = getCurrentPages();
  let currentPage = page[0];
  let com = currentPage.selectComponent
    ("#vant_button");
  com.show();
};