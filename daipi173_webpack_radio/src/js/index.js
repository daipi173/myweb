import "../css/index.scss";
import $ from "jquery";
import render_show from "./render_show";
import event from "./event";

$.ajax({
    url: "https://easy-mock.com/mock/5d1c19780258953d76dd4afe/example/radio_interface#!method=get", // mock地址
    type: "GET",
    success(data){
        const val = data.data;
        render_show(val[0]);
        event(val);
    }
})