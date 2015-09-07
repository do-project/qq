//related to search.ui
var btn_back = ui("action_back")
var app = sm("do_App")
var page = sm("do_Page");
var search_text = ui("search_text");


page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

btn_back.on("touch",function(){
	app.closePage();
});
