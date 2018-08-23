$(function() {
/*    
    //创建数据库
    var db = openDatabase("products", 1.0, "票据数据库", 1024 * 1024 * 10, function() {
        console.log("创建数据库完成");
    });
*/  
    //创建数据表
    db.transaction(function(tx) {      
        tx.executeSql(
            "create table IF not EXISTS Bill(id integer primary key autoincrement,All_Name_Out text,Accounted_Out text,Bank_out text,Use text,All_Name_In text,Accounted_In text,Bank_In text,Add_Info text)", [],
            function(tx, result) {
                console.log('创建出票人表成功');
            },
            function(tx, error) {
                console.log('创建出票人表失败' + error.message);
        });

/*    删除数据表    
        tx.executeSql(
            "drop table Bill", [],
            function(tx, result) {
                console.log('删除表成功');
            },
            function(tx, error) {
                console.log('删除表失败' + error.message);
        });
*/        
    });  
    //获取数据表数据
    db.transaction(function(tx) {  
        tx.executeSql(
            "select All_Name_Out from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).All_Name_Out != null){
                      $("#Out_Name.selectpicker").append("<option value='"+result.rows.item(i).All_Name_Out+"'>"+result.rows.item(i).All_Name_Out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Name").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select All_Name_In from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).All_Name_In != null){
                      $("#In_Name.selectpicker").append("<option value='"+result.rows.item(i).All_Name_In+"'>"+result.rows.item(i).All_Name_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Name").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Accounted_Out from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Accounted_Out != null){
                      $("#Out_Accounted.selectpicker").append("<option value='"+result.rows.item(i).Accounted_Out+"'>"+result.rows.item(i).Accounted_Out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Accounted").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Accounted_In from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Accounted_In != null){
                      $("#In_Accounted.selectpicker").append("<option value='"+result.rows.item(i).Accounted_In+"'>"+result.rows.item(i).Accounted_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Accounted").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Bank_out from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Bank_out != null){
                      $("#Out_Bank.selectpicker").append("<option value='"+result.rows.item(i).Bank_out+"'>"+result.rows.item(i).Bank_out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Bank").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Bank_In from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Bank_In != null){
                      $("#In_Bank.selectpicker").append("<option value='"+result.rows.item(i).Bank_In+"'>"+result.rows.item(i).Bank_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Bank").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Use from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Use != null){
                      $("#Use.selectpicker").append("<option value='"+result.rows.item(i).Use+"'>"+result.rows.item(i).Use+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Use").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Add_Info from Bill",[],
            function(tx, result) {
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Add_Info != null){
                      $("#Add_Info.selectpicker").append("<option value='"+result.rows.item(i).Add_Info+"'>"+result.rows.item(i).Add_Info+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Add_Info").selectpicker('refresh');
            });                                         
    });






});
$.extend({getsqldata:function(){

    db.transaction(function(tx) {  
        tx.executeSql(
            "select All_Name_Out from Bill",[],
            function(tx, result) {
                $("#Out_Name").empty();
                $("#Out_Name_2").empty();
                $("#Out_Name.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#Out_Name_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).All_Name_Out != null){
                      $("#Out_Name_2.selectpicker").append("<option value='"+result.rows.item(i).All_Name_Out+"'>"+result.rows.item(i).All_Name_Out+"</option>");
                      $("#Out_Name.selectpicker").append("<option value='"+result.rows.item(i).All_Name_Out+"'>"+result.rows.item(i).All_Name_Out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Name_2").selectpicker('refresh');
                  $("#Out_Name").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select All_Name_In from Bill",[],
            function(tx, result) {
                $("#In_Name").empty();
                $("#In_Name_2").empty();
                $("#In_Name.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#In_Name_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).All_Name_In != null){
                      $("#In_Name_2.selectpicker").append("<option value='"+result.rows.item(i).All_Name_In+"'>"+result.rows.item(i).All_Name_In+"</option>");
                      $("#In_Name.selectpicker").append("<option value='"+result.rows.item(i).All_Name_In+"'>"+result.rows.item(i).All_Name_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Name_2").selectpicker('refresh');
                  $("#In_Name").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Accounted_Out from Bill",[],
            function(tx, result) {
                $("#Out_Accounted").empty();
                $("#Out_Accounted_2").empty();
                $("#Out_Accounted.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#Out_Accounted_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Accounted_Out != null){
                      $("#Out_Accounted_2.selectpicker").append("<option value='"+result.rows.item(i).Accounted_Out+"'>"+result.rows.item(i).Accounted_Out+"</option>");
                      $("#Out_Accounted.selectpicker").append("<option value='"+result.rows.item(i).Accounted_Out+"'>"+result.rows.item(i).Accounted_Out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Accounted_2").selectpicker('refresh');
                  $("#Out_Accounted").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Accounted_In from Bill",[],
            function(tx, result) {
                $("#In_Accounted").empty();
                $("#In_Accounted_2").empty();
                $("#In_Accounted.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#In_Accounted_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Accounted_In != null){
                      $("#In_Accounted_2.selectpicker").append("<option value='"+result.rows.item(i).Accounted_In+"'>"+result.rows.item(i).Accounted_In+"</option>");
                      $("#In_Accounted.selectpicker").append("<option value='"+result.rows.item(i).Accounted_In+"'>"+result.rows.item(i).Accounted_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Accounted_2").selectpicker('refresh');
                  $("#In_Accounted").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Bank_out from Bill",[],
            function(tx, result) {
                $("#Out_Bank").empty();
                $("#Out_Bank_2").empty();
                $("#Out_Bank.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#Out_Bank_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Bank_out != null){
                      $("#Out_Bank_2.selectpicker").append("<option value='"+result.rows.item(i).Bank_out+"'>"+result.rows.item(i).Bank_out+"</option>");
                      $("#Out_Bank.selectpicker").append("<option value='"+result.rows.item(i).Bank_out+"'>"+result.rows.item(i).Bank_out+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Out_Bank_2").selectpicker('refresh');
                  $("#Out_Bank").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Bank_In from Bill",[],
            function(tx, result) {
                $("#In_Bank").empty();
                $("#In_Bank_2").empty();
                $("#In_Bank.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#In_Bank_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Bank_In != null){
                      $("#In_Bank_2.selectpicker").append("<option value='"+result.rows.item(i).Bank_In+"'>"+result.rows.item(i).Bank_In+"</option>");
                      $("#In_Bank.selectpicker").append("<option value='"+result.rows.item(i).Bank_In+"'>"+result.rows.item(i).Bank_In+"</option>");
                    }
                    else{

                    }
                  }
                  $("#In_Bank_2").selectpicker('refresh');
                  $("#In_Bank").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Use from Bill",[],
            function(tx, result) {
                $("#Use").empty();
                $("#Use_2").empty();
                $("#Use.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#Use_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Use != null){
                      $("#Use_2.selectpicker").append("<option value='"+result.rows.item(i).Use+"'>"+result.rows.item(i).Use+"</option>");
                      $("#Use.selectpicker").append("<option value='"+result.rows.item(i).Use+"'>"+result.rows.item(i).Use+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Use_2").selectpicker('refresh');
                  $("#Use").selectpicker('refresh');
            });                                         
    });
    db.transaction(function(tx) {  
        tx.executeSql(
            "select Add_Info from Bill",[],
            function(tx, result) {
                $("#Add_Info").empty();
                $("#Add_Info_2").empty();
                $("#Add_Info.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                $("#Add_Info_2.selectpicker").append("<option value='==请选择=='>==请选择==</option>");
                for (var i=0;i<result.rows.length;i++) {
                    if(result.rows.item(i).Add_Info != null){
                      $("#Add_Info_2.selectpicker").append("<option value='"+result.rows.item(i).Add_Info+"'>"+result.rows.item(i).Add_Info+"</option>");
                      $("#Add_Info.selectpicker").append("<option value='"+result.rows.item(i).Add_Info+"'>"+result.rows.item(i).Add_Info+"</option>");
                    }
                    else{

                    }
                  }
                  $("#Add_Info_2").selectpicker('refresh');
                  $("#Add_Info").selectpicker('refresh');
            });                                         
    });
    
}
});
