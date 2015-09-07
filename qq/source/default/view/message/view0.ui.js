var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var huanxin =sm("do_HuanXinIM");

page.on("back", function() { // 监听android 的返回按钮;
    app.closePage()
});

var listview, listdata;

listview = ui("do_ListView_1");
listdata = mm("do_ListData");

listview.bindItems(listdata);

listdata.addData([ { NAME : "独眼怪", LOGO : "source://image/pic/kcj.png",CONTENT : "生日快乐！",TIME :"00:00"},
                   { NAME : "小金鱼", LOGO : "source://image/pic/kci.png",CONTENT : "我明天要去太平洋了",TIME :"昨天"}, 
                   { NAME : "女同学", LOGO : "source://image/pic/kck.png",CONTENT : "明天到你值日了",TIME :"昨天"},
                   { NAME : "小幽灵", LOGO : "source://image/pic/kcm.png",CONTENT : "什么时候再来鬼屋玩？",TIME :"星期四"}, 
                   { NAME : "男教师", LOGO : "source://image/pic/kcn.png",CONTENT : "你再不好好学习就请家长了",TIME :"星期四"}, 
                   { NAME : "小辉",  LOGO : "source://image/pic/kjy.png",CONTENT : "明天去看《终结者》？",TIME :"星期三"},
                   { NAME : "小率",  LOGO : "source://image/pic/krd.png",CONTENT : "=。=",TIME :"星期三"},
                   { NAME : "怪盗基德", LOGO : "source://image/pic/lkn.png" ,CONTENT : "你认识一个叫柯南的男生吗？",TIME :"星期三"},
                   { NAME : "小煌",  LOGO : "source://image/pic/kqw.png" ,CONTENT : "(⊙o⊙)哦",TIME :"星期二"}]);
listview.refreshItems();
listview.on("longTouch", function(index) {
    nf.alert(listdata.getOne(index), "longTouch");
});

/*listview.on("touch", function(index) {
    nf.alert(listdata.getOne(index), "touch");
});*/

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

listview.on("touch", function(index){
    if (!huanxin) return nf.alert("此系统暂不支持即时消息");
    data = listdata.getOne(index);
    huanxin.login({username:"1", password:"1"}, function(data, e){});
    huanxin.enterChat({
        userID: data.NAME,
        userNick: data.NAME
    });
});