$(function() {
    $('#click_event4').click(function(){
        var Date_3=$("#BBRQ").val();
        
        //数据填充在table表中
        $("#Date_3").text(Date_3);
        var Out_Name_3=$("#Out_Name").val();
        var In_Name_3=$("#In_Name").val();
        
        //数据填充在table表中
        $("#Out_Name_3").text(Out_Name_3);
        $("#In_Name_3").text(In_Name_3);

        var Out_Accounted_3=$("#Out_Accounted").val();
        var In_Accounted_3=$("#In_Accounted").val();
        $("#Out_Accounted_3").text(Out_Accounted_3);
        $("#In_Accounted_3").text(In_Accounted_3);

        var Out_Bank_3=$("#Out_Bank").val();
        var In_Bank_3=$("#In_Bank").val();
        $("#Out_Bank_3").text(Out_Bank_3);
        $("#In_Bank_3").text(In_Bank_3);

        var Use_3=$("#Use").val();
        var Add_Info_3=$("#Add_Info").val();
        $("#Use_3").text(Use_3);
        $("#Add_Info_3").text(Add_Info_3);
        
        var Use_3=$("#Use").val();
        var Add_Info_3=$("#Add_Info").val();

        var Bill_Num_3=$("#Bill_Num").val();
        var Bill_Count_3=$("#Bill_Count").val();
        var Bill_Type_3=$("#BillSpec").val();

        var Money_Arab_3=$("#Money_Arab").val(); 
        
        $("#Bill_Num_3").text(Bill_Num_3);
        $("#Bill_Count_3").text(Bill_Count_3);
        $("#Bill_Type_3").text(Bill_Type_3);
        $("#Money_Arab_3").text(Money_Arab_3);
       
        //转账金额转换为大写
        parseFloat(Money_Arab_3);

        $("#print").jqprint({});

  }); 
    
    
    
    
    
    
});
$.extend({getcssdata:function(){
    var Out_Name_3=$("#Out_Name").val();
    var In_Name_3=$("#In_Name").val();

    $("#Out_Name_3").val('Out_Name_3');

    var Out_Accounted_3=$("#Out_Accounted").val();
    var In_Accounted_3=$("#In_Accounted").val();


    var Out_Bank_3=$("#Out_Bank").val();
    var In_Bank_3=$("#In_Bank").val();

    var Use_3=$("#Use").val();
    var Add_Info_3=$("#Add_Info").val();
alert(123);
    $("#print").jqprint({});
}
});
    