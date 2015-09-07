var app, nf;
nf = sm("do_Notification");
app = sm("do_App");

var page = sm("do_Page"); //获取当前Page实例

var iv0, label0, iv1, label1, iv2, label2;
iv0 = ui("iv0");
label0 = ui("label0");
iv1 = ui("iv1");
label1 = ui("label1");
iv2 = ui("iv2");
label2 = ui("label2");

var ivs = [ iv0, iv1, iv2 ];
var labels = [ label0, label1, label2 ];

var ImageView_1=ui("do_ImageView_1");


ImageView_1.on("touch",function(data, e){
    nf.alert("打开个人资料");
});

var checkFun = function(index) {
	if(index==0)
	{
	    iv0.source = "source://image/main/skin_tab_icon_conversation_selected.png";
	    iv1.source = "source://image/main/skin_tab_icon_contact_normal.png";
	    iv2.source = "source://image/main/skin_tab_icon_plugin_normal.png";	
	}
	else if(index==1)
	{
		iv0.source = "source://image/main/skin_tab_icon_conversation_normal.png";
		iv1.source = "source://image/main/skin_tab_icon_contact_selected.png";
		iv2.source = "source://image/main/skin_tab_icon_plugin_normal.png";
	}
	else if(index==2)
	{
		iv0.source = "source://image/main/skin_tab_icon_conversation_normal.png";
		iv1.source = "source://image/main/skin_tab_icon_contact_normal.png";
		iv2.source = "source://image/main/skin_tab_icon_plugin_selected.png";
	}
	viewShower.showView("view" + index, "fade", 300)
}

// 为每个ImageView 注册事件
ivs.forEach(function(iv, i) {
	iv.on("touch", function(data, e) {
		checkFun(i);
	});
})

var viewShower = ui("viewShower");

var data = [ {
	"id" : "view0",
	"path" : "source://view/message/view0.ui"
}, {
	"id" : "view1",
	"path" : "source://view/contact/view1.ui"
}, {
	"id" : "view2",
	"path" : "source://view/dynamic/view2.ui"
} ];

/*iv0.on("touch",function(data, e){
	viewShower.showView("view0", "fade");
    iv0.source = "source://image/main/skin_tab_icon_conversation_selected.png";
    iv1.source = "source://image/main/skin_tab_icon_contact_normal.png";
    iv2.source = "source://image/main/skin_tab_icon_plugin_normal.png";
});
iv1.on("touch",function(data, e){
	viewShower.showView("view1", "fade");
	iv0.source = "source://image/main/skin_tab_icon_conversation_normal.png";
	iv1.source = "source://image/main/skin_tab_icon_contact_selected.png";
	iv2.source = "source://image/main/skin_tab_icon_plugin_normal.png";
});
iv2.on("touch",function(data, e){
	viewShower.showView("view2", "fade");
	iv0.source = "source://image/main/skin_tab_icon_conversation_normal.png";
	iv1.source = "source://image/main/skin_tab_icon_contact_normal.png";
	iv2.source = "source://image/main/skin_tab_icon_plugin_selected.png";
});
;*/

// 为viewshower增加3个页面
viewShower.addViews(data);

// 以下是ViewShower调用show方法时支持的动画类型，包括标示和描述，其中有几个类型android不支持
var animations = [ "", "slide_l2r", "slide_r2l", "slide_b2t", "slide_t2b",
		"push_l2r", "push_r2l", "push_b2t", "push_t2b", "fade", "page_curl",
		"page_uncurl", "cube" ];
var animationDescs = [ "无动画", "从左至右滑出", "从右至左滑出", "从底至上滑出", "从上至底滑出", "从左至右推出",
		"从右至左推出", "从底至上推出", "从上至底推出", "淡入", "上翻页", "下翻页", "立体" ];
// 要显示的View的id ,动画类型(有以上几种动画类型),动画执行时间
// viewShower.showView("view0", "fade", 300)
viewShower.showView("view0");

//viewShower订阅一个viewChanged事件，当viewShower切换View 时触发
viewShower.on("viewChanged", function(data, e) {
	//触发一个自定义事件 indexChanged, 在view0中订阅该事件
//	page.fire("indexChanged");
	//触发一个带参数的自定义事件，data的值为：View切换后的id
	page.fire("indexChanged",data);
});


var search = ui("search")

search.on("touch",function(){
	app.openPage("source://view/search.ui");
});

var bg_layout = ui("bg_layout");
var fast = ui("fast");
fast.on("touch",function(){
	bg_layout.add("we", "source://view/fast/fast.ui", 0, 0);
});