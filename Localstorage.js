$(function() {
    $('#All_Name_Out_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (All_Name_Out) values(?)",[$("#All_Name_Out").val()],
                function() {
                    alert('添加出票全称成功!');
                },
                function() {
                    alert('添加出票全称失败!');
            });                                         
        });
    });



    $('#All_Name_Out_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where All_Name_Out=?",[$("#All_Name_Out").val()],
                function() {
                    alert('删除出票全称成功!');
                },
                function() {
                    alert('删除出票全称失败!');
            });                                         
        });
    });


    $('#All_Name_In_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (All_Name_In) values(?)",[$("#All_Name_In").val()],
                function() {
                    alert('添加收票全称成功!');
                },
                function() {
                    alert('添加收票全称失败!');
            });                                         
        });
    });



    $('#All_Name_In_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where All_Name_In=?",[$("#All_Name_In").val()],
                function() {
                    alert('删除收票全称成功!');
                },
                function() {
                    alert('删除收票全称失败!');
            });                                         
        });
    });



    $('#Accounted_Out_Add').click(function(){ 
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Accounted_Out) values(?)",[$("#Accounted_Out").val()],
                function() {
                    alert('添加出票账号成功!');
                },
                function() {
                    alert('添加出票账号失败!');
            });                                         
        });
    });



    $('#Accounted_Out_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Accounted_Out=?",[$("#Accounted_Out").val()],
                function() {
                    alert('删除出票账号成功!');
                },
                function() {
                    alert('删除出票账号失败!');
            });                                         
        });
    });



    $('#Accounted_In_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Accounted_In) values(?)",[$("#Accounted_In").val()],
                function() {
                    alert('添加收票账号成功!');
                },
                function() {
                    alert('添加收票账号失败!');
            });                                         
        });
    });



    $('#Accounted_In_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Accounted_In=?",[$("#Accounted_In").val()],
                function() {
                    alert('删除收票账号成功!');
                },
                function() {
                    alert('删除收票账号失败!');
            });                                         
        });
    });



    $('#Bank_Out_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Bank_Out) values(?)",[$("#Bank_Out").val()],
                function() {
                    alert('添加出票银行成功!');
                },
                function() {
                    alert('添加出票银行失败!');
            });                                         
        });
    });



    $('#Bank_Out_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Bank_Out=?",[$("#Bank_Out").val()],
                function() {
                    alert('删除出票银行成功!');
                },
                function() {
                    alert('删除出票银行失败!');
            });                                         
        });
    });


    $('#Bank_In_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Bank_In) values(?)",[$("#Bank_In").val()],
                function() {
                    alert('添加收票银行成功!');
                },
                function() {
                    alert('添加收票银行失败!');
            });                                         
        });
    });



    $('#Bank_In_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Bank_In=?",[$("#Bank_In").val()],
                function() {
                    alert('删除收票银行成功!');
                },
                function() {
                    alert('删除收票银行失败!');
            });                                         
        });
    });


    $('#Use_Out_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Use) values(?)",[$("#Use_Out").val()],
                function() {
                    alert('添加用途成功!');
                },
                function() {
                    alert('添加用途失败!');
            });                                         
        });
    });



    $('#Use_Out_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Use=?",[$("#Use_Out").val()],
                function() {
                    alert('删除用途成功!');
                },
                function() {
                    alert('删除用途失败!');
            });                                         
        });
    });


    $('#Add_Info_Add').click(function(){  
        db.transaction(function(tx) {  
            tx.executeSql(
                "insert into Bill (Add_Info) values(?)",[$("#Info_Add").val()],
                function() {
                    alert('添加附加信息成功!');
                },
                function() {
                    alert('添加附加信息失败!');
            });                                         
        });
    });



    $('#Add_Info_Delete').click(function(){
        db.transaction(function(tx) {  
            tx.executeSql(
                "delete from Bill where Use=?",[$("#Info_Add").val()],
                function() {
                    alert('删除附加信息成功!');
                },
                function() {
                    alert('删除附加信息失败!');
            });                                         
        });
    });   












});
