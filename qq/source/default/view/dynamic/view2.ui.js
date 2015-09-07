var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
//related to view0.ui
var ImageView_12=ui("do_ImageView_12");
var ImageView_13=ui("do_ImageView_13");
var ImageView_14=ui("do_ImageView_14");
var ImageView_15=ui("do_ImageView_15");
var ImageView_16=ui("do_ImageView_16");
var ImageView_17=ui("do_ImageView_17");


ImageView_12.on("touch",function(data, e){
    nf.alert("好友动态");
});
ImageView_13.on("touch",function(data, e){
    nf.alert("附近");
});
ImageView_14.on("touch",function(data, e){
    nf.alert("兴趣部落");
});
ImageView_15.on("touch",function(data, e){
    nf.alert("游戏");
});
ImageView_16.on("touch",function(data, e){
    nf.alert("音乐");
});
ImageView_17.on("touch",function(data, e){
    nf.alert("附近的群");
});