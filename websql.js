//定义当前应用的对象
var dbApp={
    //打开数据库
    openDb:function()
    {
        //创建名称为products，版本为1.0,描述为产品数据库，10M大小的数据库
        var db = openDatabase("products", 1.0, "票据数据库", 1024 * 1024 * 10, function() {
        console.log("创建数据库完成");
        });             
    },
    //初始化
    init:function()
    {
        //打开或创建数据库
        this.openDb();
        //打开或创建数据表
        this.createTable();
        //绑定事件
        //this.bindEvent();
        //展示数据
        //this.select();
        //this.log("初始化完成");
    },
    //绑定事件
    bindEvent:function()
    {
        //添加事件
        $("#btnInsert").click(this.insert);
        $("#btnUpdate").click(this.update);
        $("#btnCreateTable").click(this.createTable);
        $("#btnDropTable").click(this.dropTable);
    },
    //显示消息
    log:function(info) {
        $("#msg")[0].innerHTML += info + "<br/>";
    },
    //执行sql的通用方法 result.rowsAffected 影响行数
    //callback执行成功时的回调方法
    exeSql:function(sql,title,param,callback) {
        title=title||"操作";
        this.db.transaction(function(tx) {
            tx.executeSql(
                sql, param||[],
                function(tx, result) {
                    dbApp.log(title+'成功');
                    if(callback){  //如果有参数
                        callback(result);
                    }
                },
                function(tx, error) {
                    dbApp.log(title+'失败' + error.message);
                });
        });
    },
    //创建表
    createTable:function() {
        dbApp.exeSql("create table IF not EXISTS Bill(id integer primary key autoincrement,All_Name_Out text,Accounted_Out text,Bank_out text,Use text,All_Name_In text,Accounted_In text,Bank_In text)","创建表");

    },
    //删除表
    dropTable:function() {
        dbApp.exeSql("drop table IF EXISTS Bill","删除表");
    },
    //展示，加载数据
    select:function() {
        dbApp.exeSql("select id,name,price from Bill","查询",[],function(result) {
                //将表格中tr索引大于0的元素删除
                    $("#tabGoods tr:gt(0)").remove();
                    for(var i = 0; i < result.rows.length; i++) {
                        var tr = $("<tr/>");

                        $("<td/>").text(result.rows.item(i)["id"]).appendTo(tr);
                        $("<td/>").text(result.rows.item(i)["name"]).appendTo(tr);
                        $("<td/>").text(result.rows.item(i)["price"]).appendTo(tr);
                        var del = $("<a href='#' onclick='dbApp.del(" + result.rows.item(i)["id"] + ",this)' >删除 | </a>")
                        var edit = $("<a href='#' onclick='dbApp.edit(" + result.rows.item(i)["id"] + ",this)' >修改</a>")
                        $("<td/>").append(del).append(edit).appendTo(tr);
                        tr.appendTo("#tabGoods");
                    }
                    });
    },
    //插入数据
    insert:function() {
        //如果insert方法被绑定为事件，则this表示事件发生的对象
        dbApp.exeSql("insert into Bill(name,price) values(?,?)","添加",[$("#name").val(), $("#price").val()],function(){
            dbApp.select();
        });
    },
    //删除 
    del:function(id, link) {
        dbApp.exeSql("delete from Bill where id=?","删除",[id],function(result){
            //查找a标签最近的一个tr父元素，移除
            $(link).closest("tr").remove();
        });
    },
    //编辑
    edit:function(id) {
        dbApp.exeSql("select id,name,price from Bill where id=?","编辑",[id],function(result) {
                    $("#name").val(result.rows.item(0)["name"]);
                    $("#price").val(result.rows.item(0)["price"]);
                    $("#goodsId").val(result.rows.item(0)["id"]);
                    dbApp.log("修改后请保存");
            });
    },
    //更新
    update:function() {
        if($("#goodsId").val()) {
            dbApp.exeSql("update Out set name=?,price=?  where id=?","更新",[$("#name").val(), $("#price").val(), $("#goodsId").val()],function(result) {
                        dbApp.select();
                        $("#goodsId").val("");
            });
        } else {
            dbApp.log("请选择要更新的记录 ");
        }
    }
};

 