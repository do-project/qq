var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var huanxin =sm("do_HuanXinIM");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

/** ***************************************************************************************** */

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ 
    { NAME : "独眼怪", LOGO : "source://image/pic/kcj.png",CONTENT : "[在线]",TIME :"3G"},
    { NAME : "小幽灵", LOGO : "source://image/pic/kcm.png",CONTENT : "[在线]",TIME :"3G"}, 
    { NAME : "男教师", LOGO : "source://image/pic/kcn.png",CONTENT : "[在线]",TIME :"4G"}, 
    { NAME : "小率",  LOGO : "source://image/pic/krd.png",CONTENT : "[在线]",TIME :"4G"},
    { NAME : "小金鱼", LOGO : "source://image/pic/kci.png",CONTENT : "[在线]",TIME :"4G"}, 
    { NAME : "女同学", LOGO : "source://image/pic/kck.png",CONTENT : "[在线]",TIME :"3G"},
    { NAME : "怪盗基德", LOGO : "source://image/pic/lkn.png" ,CONTENT : "[在线]",TIME :"4G"},
    { NAME : "小煌",  LOGO : "source://image/pic/kqw.png" ,CONTENT : "[在线]",TIME :"3G"},
    { NAME : "小辉",  LOGO : "source://image/pic/kjy.png",CONTENT : "[离线]",TIME :"2G"}]);
listview.refreshItems();
listview.on("longTouch", function(index) {
    nf.alert(listdata.getOne(index), "longTouch");
});

listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});

listview.on("pull", function(data) {
    /**
     * @此事件将会多次执行.
     * @state == 0 : pull动作开始
     * @state == 1 : pull动作持续中
     * @state == 2 : pull动作结束
     */
    if (data.state !== 2) return;
    this.rebound();
});
/** ***************************************************************************************** */

    /**
     * @listdata.addOne(data, index); 向listdata增加一条数据
     * @刷新页面(refreshItems);此处不能调用refreshData;详见API refreshData / refreshItems 的区别.
     * @refreshData 是一个UI的基类方法; 能够刷新控件本身;即刷新listview控件本身属性.
     * @refreshItems 是listview 的实例方法; 用于刷新 listview 的数据项.
     */
//    listdata.addOne({ NAME : "ADD", LOGO : "source://image/add.png" }, 0);
//    listview.refreshItems();

    /**
     * @listdata.removeRange(fromIndex, toIndex);
     * listdata没有提供 removeOne(index) 方法; removeRange(index,index) 可删除指定项.
     */
//    listdata.removeRange(0, 0);
//    listview.refreshItems();
/******************************	*********************************************/
var do_ALayout_1 = ui("do_ALayout_1");
var do_LinearLayout_1 = ui("do_LinearLayout_1");
var do_ImageView_10=ui("do_ImageView_10");

do_ALayout_1.on("touch",function(data, e){
	if (do_LinearLayout_1.visible){
		do_ImageView_10.source="source://image/contact/up.png";
		do_LinearLayout_1.visible = false;
	}else{
		do_ImageView_10.source="source://image/contact/down.png";
		do_LinearLayout_1.visible = true;
	}
});

var do_ALayout_3 = ui("do_ALayout_3");
var do_LinearLayout_4 = ui("do_LinearLayout_4");
var do_ImageView_30=ui("do_ImageView_30");

do_ALayout_3.on("touch",function(data, e){
	if (do_LinearLayout_4.visible){
		do_ImageView_30.source="source://image/contact/up.png";
		do_LinearLayout_4.visible = false;
	}else{
		do_ImageView_30.source="source://image/contact/down.png";
		do_LinearLayout_4.visible = true;
	}
});
listview.on("touch", function(index){
    if (!huanxin) return nf.alert("此系统暂不支持即时消息");
    data = listdata.getOne(index);
    huanxin.login({username:"1", password:"1"}, function(data, e){});
    huanxin.enterChat({
        userID: data.NAME,
        userNick: data.NAME
    });
});
/******************************************************************************/
var do_ALayout_01=ui("do_ALayout_01");
var do_ALayout_02=ui("do_ALayout_02");
var do_ALayout_03=ui("do_ALayout_03");
var do_ALayout_04=ui("do_ALayout_04");

do_ALayout_01.on("touch",function(data, e){
    nf.alert("新朋友");
});
do_ALayout_02.on("touch",function(data, e){
    nf.alert("特别关心");
});
do_ALayout_03.on("touch",function(data, e){
    nf.alert("群组");
});
do_ALayout_04.on("touch",function(data, e){
    nf.alert("公众号");
});