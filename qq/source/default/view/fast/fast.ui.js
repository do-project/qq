//related to fast.ui

var app, page;
app = sm("do_App");
page = sm("do_Page");
nf = sm("do_Notification");
page.on("back", function(){ app.closePage() });


var bg_layout = ui("bg_layout");
bg_layout.on("touch",function(){
	
	bg_layout.remove();
});

var ImageView_1 = ui("do_ImageView_1")

ImageView_1.on("touch",function(){
	app.openPage("source://view/fast/fast0.ui");
});

var ImageView_2=ui("do_ImageView_2");
var ImageView_3=ui("do_ImageView_3");
var ImageView_4=ui("do_ImageView_4");
var ImageView_5=ui("do_ImageView_5");
var ImageView_6=ui("do_ImageView_6");

ImageView_2.on("touch",function(data, e){
    nf.alert("加好友");
});
ImageView_3.on("touch",function(data, e){
    nf.alert("创建讨论组");
});
ImageView_4.on("touch",function(data, e){
    nf.alert("发送到电脑");
});
ImageView_5.on("touch",function(data, e){
    nf.alert("面对面快传");
});
ImageView_6.on("touch",function(data, e){
    nf.alert("收钱");
});