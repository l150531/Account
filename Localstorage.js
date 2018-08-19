$(function() {
    $('#Submit_Out').click(function(){    
        db.transaction(function(tx) {
            tx.executeSql(
                "create table if not exists Out(id integer primary key autoincrement,All_Name_Out text not null,Accounted text not null,Bank text not null,Use text not null)", [],
                function(tx, result) {
                    console.log('创建出票人表成功');
                },
                function(tx, error) {
                    console.log('创建出票人表失败' + error.message);
            });          
                
        });       
    });
    $('#Submit_In').click(function(){ 
        db.transaction(function(rx) {
            rx.executeSql(
                "create table if not exists In(id integer primary key autoincrement,All_Name_In text not null,Accounted text not null,Bank text not null,Use text not null)", [],
                function(rx, result) {
                    console.log('创建入票人表成功');
                },
                function(rx, error) {
                    console.log('创建入票人表失败' + error.message);
            });            
                
        });
    
            
    });    
});