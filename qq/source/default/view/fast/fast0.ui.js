var app, page;
app = sm("do_App");
page = sm("do_Page");
nf = sm("do_Notification");
page.on("back", function(){ app.closePage() });

var barcodeview_1=ui("do_BarcodeView_1");

barcodeview_1.start({}, function(data, e){
		nf.alert({text:data, title:"二维码扫描结果"}, function(data, e){});
});

var btn_back = ui("do_ImageView_0");
btn_back.on("touch",function(){
	app.closePage();
});