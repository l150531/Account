$(function() {
    //进账单数据填充到打印表中
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
        $("#Add_Info_3").text(Add_Info_3);
        $("#Use_3").text(Use_3);

        var Bill_Num_3=$("#Bill_Num").val();
        var Bill_Count_3=$("#Bill_Count").val();
        var Bill_Type_3=$("#BillSpec").val();

        var Money_Arab_3=$("#Money_Arab").val(); 

        $("#Bill_Num_3").text(Bill_Num_3);
        $("#Bill_Count_3").text(Bill_Count_3);
        $("#Bill_Type_3").text(Bill_Type_3);
        
        //转账金额转换为大写
        var Money_complex_3=$.Arabia_To_SimplifiedChinese(Money_Arab_3);
        $("#Money_complex_3").text(Money_complex_3);
        Money_Arab_3 = "￥"+ Money_Arab_3;
        $("#Money_Arab_3").text(Money_Arab_3);
    /*      
        $("#bg").jqprint({
        });
    */
  }); 
    
  //进账单打印设置
  $('#SubmitSet').click(function(){
    //模态窗启动
    //$('#BillModal').modal('show');
    //$('#BillModal').modal({backdrop:'static'}); //只能点击模态窗的提交和取消按钮取消模态窗显示
    $("#bg").jqprint({});
    
  }); 

    //电汇单数据打印
    $('#click_event5').click(function(){
        var box=$("#box").val();
        var Date_4=$("#Teledate").val();
        //数据填充在table表中
        $("#Date_4").text(Date_4);
        var Out_Name_4=$("#Out_Name_2").val();
        var In_Name_4=$("#In_Name_2").val();
        
        //数据填充在table表中
        $("#Out_Name_4").text(Out_Name_4);
        $("#In_Name_4").text(In_Name_4);

        var Out_Accounted_4=$("#Out_Accounted_2").val();
        var In_Accounted_4=$("#In_Accounted_2").val();
        $("#Out_Accounted_4").text(Out_Accounted_4);
        $("#In_Accounted_4").text(In_Accounted_4);

        var Out_Bank_4=$("#Out_Bank_2").val();
        var In_Bank_4=$("#In_Bank_2").val();
        $("#Out_Bank_4").text(Out_Bank_4);
        $("#In_Bank_4").text(In_Bank_4);

        var Out_Province_4=$("#Out_Province").val();
        var In_Province_4=$("#In_Province").val();

        var Out_City_4=$("#Out_City").val();
        var In_City_4=$("#In_City").val();
        
        var Out_Area_4=$("#Out_Area").val();
        var In_Area_4=$("#In_Area").val();

        //空格转为&nbsp;
        var tmp=' ';
        tmp=tmp.replace(' ', '&nbsp;');
        Out_Province_4= Out_Province_4+tmp+tmp+Out_City_4+tmp+tmp+tmp+tmp+tmp+tmp+Out_Area_4;
        In_Province_4= In_Province_4+tmp+tmp+In_City_4+tmp+tmp+tmp+tmp+tmp+tmp+In_Area_4;
    
        //原样输出应使用html()方法，不能使用text()方法，使用text()方法多个空格会被合并为一个空格
        $("#Out_Province_4").html(Out_Province_4);
        $("#In_Province_4").html(In_Province_4);


        var Use_4=$("#Use_2").val();
        var Add_Info_4=$("#Add_Info_2").val();
        $("#Use_4").text(Use_4);
        $("#Add_Info_4").text(Add_Info_4);

        var Money_Arab_4=$("#Money_Arab_2").val(); 
        //转账金额转换为大写
        //$.Arabia_To_SimplifiedChinese(Money_Arab_4);
        var Money_complex_4=$.Arabia_To_SimplifiedChinese(Money_Arab_4);
        $("#Money_complex_4").text(Money_complex_4);
        Money_Arab_4 = "￥"+ Money_Arab_4;
        $("#Money_Arab_4").text(Money_Arab_4);
        
        $("#bg2").jqprint({
        });

    });
    //电汇单打印设置
    $('#SubmitSet2').click(function(){
        $('#MyModal').modal({backdrop:'static'}); //只能点击模态窗的提交和取消按钮取消模态窗显示
    });



    //进账单打印参数设置
    $('#Bill_Confirm').click(function(){
        //设置断点
        //debugger;
        /*
        var style = document.createElement('style');
        style.innerHTML = "@media print {#Out_Name_3 {position: relative;left: 235pt;}}";
        window.document.head.appendChild(style); 
        */
        var Out_Name_tmp='';
        var Out_Name_tmp_1=$('#Left_Out_Name_3').val();
        var Out_Name_tmp_2=$('#Up_Out_Name_3').val();
        var Out_Name_tmp_3=$('#Spacing_Out_Name_3').val();
        var Out_Name_tmp_4=$('#Size_Out_Name_3').val();
        var Out_Name_tmp_5=$('#Font_Out_Name_3').val();

        if(Out_Name_tmp_1 != ''){
            Out_Name_tmp_1=parseFloat(Out_Name_tmp_1);
            Out_Name_tmp_1 += 135;
            Out_Name_tmp_1 ="left:"+Out_Name_tmp_1+'pt !important;';
            Out_Name_tmp+=Out_Name_tmp_1;
        }
        if(Out_Name_tmp_2 !=''){
            Out_Name_tmp_2=parseFloat(Out_Name_tmp_2);

            Out_Name_tmp_2 ="transform:translate(0pt,"+Out_Name_tmp_2+'pt) !important;';
            Out_Name_tmp+=Out_Name_tmp_2;
        }
        if(Out_Name_tmp_3 != ''){
            Out_Name_tmp_3=parseFloat(Out_Name_tmp_3);

            Out_Name_tmp_3 ="letter-spacing:"+Out_Name_tmp_3+'pt !important;';
            Out_Name_tmp+=Out_Name_tmp_3;

        }
        if(Out_Name_tmp_4 !=''){
            Out_Name_tmp_4=parseFloat(Out_Name_tmp_4);

            Out_Name_tmp_4 ="font-size:"+Out_Name_tmp_4+'pt !important;';
            Out_Name_tmp+=Out_Name_tmp_4;
        }
        if(Out_Name_tmp_5 != ''){

            Out_Name_tmp_5 ="font-family:"+Out_Name_tmp_5+' !important;';
            Out_Name_tmp+=Out_Name_tmp_5;
        }
        if(Out_Name_tmp !=''){
            $("#Out_Name_3").css('cssText',Out_Name_tmp);//提高权限
        }
        else{

        }

        var tmp='';
        var tmp_1=$('#Left_Date_3').val();
        var tmp_2=$('#Up_Date_3').val();
        var tmp_3=$('#Spacing_Date_3').val();
        var tmp_4=$('#Size_Date_3').val();
        var tmp_5=$('#Font_Date_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Date_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Out_Bank_3').val();
        var tmp_2=$('#Up_Out_Bank_3').val();
        var tmp_3=$('#Spacing_Out_Bank_3').val();
        var tmp_4=$('#Size_Out_Bank_3').val();
        var tmp_5=$('#Font_Out_Bank_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Out_Bank_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Out_Accounted_3').val();
        var tmp_2=$('#Up_Out_Accounted_3').val();
        var tmp_3=$('#Spacing_Out_Accounted_3').val();
        var tmp_4=$('#Size_Out_Accounted_3').val();
        var tmp_5=$('#Font_Out_Accounted_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Out_Accounted_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_In_Name_3').val();
        var tmp_2=$('#Up_In_Name_3').val();
        var tmp_3=$('#Spacing_In_Name_3').val();
        var tmp_4=$('#Size_In_Name_3').val();
        var tmp_5=$('#Font_In_Name_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#In_Name_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }




        var tmp_1=$('#Left_In_Accounted_3').val();
        var tmp_2=$('#Up_In_Accounted_3').val();
        var tmp_3=$('#Spacing_In_Accounted_3').val();
        var tmp_4=$('#Size_In_Accounted_3').val();
        var tmp_5=$('#Font_In_Accounted_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#In_Accounted_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_In_Bank_3').val();
        var tmp_2=$('#Up_In_Bank_3').val();
        var tmp_3=$('#Spacing_In_Bank_3').val();
        var tmp_4=$('#Size_In_Bank_3').val();
        var tmp_5=$('#Font_In_Bank_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#In_Bank_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Money_complex_3').val();
        var tmp_2=$('#Up_Money_complex_3').val();
        var tmp_3=$('#Spacing_Money_complex_3').val();
        var tmp_4=$('#Size_Money_complex_3').val();
        var tmp_5=$('#Font_Money_complex_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Money_complex_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Money_Arab_3').val();
        var tmp_2=$('#Up_Money_Arab_3').val();
        var tmp_3=$('#Spacing_Money_Arab_3').val();
        var tmp_4=$('#Size_Money_Arab_3').val();
        var tmp_5=$('#Font_Money_Arab_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Money_Arab_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }





        var tmp_1=$('#Left_Bill_Type_3').val();
        var tmp_2=$('#Up_Bill_Type_3').val();
        var tmp_3=$('#Spacing_Bill_Type_3').val();
        var tmp_4=$('#Size_Bill_Type_3').val();
        var tmp_5=$('#Font_Bill_Type_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Bill_Type_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Bill_Count_3').val();
        var tmp_2=$('#Up_Bill_Count_3').val();
        var tmp_3=$('#Spacing_Bill_Count_3').val();
        var tmp_4=$('#Size_Bill_Count_3').val();
        var tmp_5=$('#Font_Bill_Count_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Bill_Count_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Bill_Num_3').val();
        var tmp_2=$('#Up_Bill_Num_3').val();
        var tmp_3=$('#Spacing_Bill_Num_3').val();
        var tmp_4=$('#Size_Bill_Num_3').val();
        var tmp_5=$('#Font_Bill_Num_3').val();
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Bill_Num_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Use_3').val();
        var tmp_2=$('#Up_Use_3').val();
        var tmp_3=$('#Spacing_Use_3').val();
        var tmp_4=$('#Size_Use_3').val();
        var tmp_5=$('#Font_Use_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Use_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
        var tmp_1=$('#Left_Add_Info_3').val();
        var tmp_2=$('#Up_Add_Info_3').val();
        var tmp_3=$('#Spacing_Add_Info_3').val();
        var tmp_4=$('#Size_Add_Info_3').val();
        var tmp_5=$('#Font_Add_Info_3').val(); 
        if(tmp_1 != ''){
            tmp_1=parseFloat(tmp_1);
            tmp_1 += 135;
            tmp_1 ="left:"+tmp_1+'pt !important;';
            tmp+=tmp_1;
        }
        if(tmp_2 !=''){
            tmp_2=parseFloat(tmp_2);

            tmp_2 ="transform:translate(0pt,"+tmp_2+'pt) !important;';
            tmp+=tmp_2;
        }
        if(tmp_3 != ''){
            tmp_3=parseFloat(tmp_3);

            tmp_3 ="letter-spacing:"+tmp_3+'pt !important;';
            tmp+=tmp_3;

        }
        if(tmp_4 !=''){
            tmp_4=parseFloat(tmp_4);

            tmp_4 ="font-size:"+tmp_4+'pt !important;';
            tmp+=tmp_4;
        }
        if(tmp_5 != ''){

            tmp_5 ="font-family:"+tmp_5+' !important;';
            tmp+=tmp_5;
        }
        if(tmp !=''){
            $("#Add_Info_3").css('cssText',tmp);//提高权限
            tmp='';
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';

        }
        else{
            tmp_1='';
            tmp_2='';
            tmp_3='';
            tmp_4='';
            tmp_5='';
        }
/*
       var Date_tmp=$('#Left_Date_3').val();
       if(Date_tmp !=''){
            Date_tmp=parseFloat(Date_tmp);
            Date_tmp += 135;
           $("#Date_3").css('cssText',"left:"+Date_tmp+"pt!important;");//提高权限
       }
       else{

       }       
        var Out_Name_tmp=$('#Left_Out_Name_3').val();
        if(Out_Name_tmp !=''){
            Out_Name_tmp=parseFloat(Out_Name_tmp);
            Out_Name_tmp += 135;
            $("#Out_Name_3").css("cssText","left:"+Out_Name_tmp+"pt !important;");//提高权限
            //$("#Out_Name_3").css("cssText",";font-size:25pt !important;font-family:Comic Sans MS;font-weight: 100!important;");//提高权限            

        }
        else{

        }

        var Out_Accounted_tmp=$('#Left_Out_Accounted_3').val();
        if(Out_Name_tmp !=''){
            Out_Accounted_tmp=parseFloat(Out_Accounted_tmp);
            Out_Accounted_tmp += 135;
            $("#Out_Accounted_3").css('cssText',"left:"+Out_Accounted_tmp+"pt!important");//提高权限
        }
        else{

        }


        var Out_Bank_tmp=$('#Left_Out_Bank_3').val();
        if(Out_Bank_tmp !=''){
            Out_Bank_tmp=parseFloat(Out_Bank_tmp);
            Out_Bank_tmp += 135;
            $("#Out_Bank_3").css('cssText',"left:"+Out_Bank_tmp+"pt!important");//提高权限
        }
        else{

        }


        var In_Name_tmp=$('#Left_In_Name_3').val();
        if(In_Name_tmp !=''){
            In_Name_tmp=parseFloat(In_Name_tmp);
            In_Name_tmp += 122;
            $("#In_Name_3").css('cssText',"left:"+In_Name_tmp+"pt!important");//提高权限
        }
        else{

        }

        
        var In_Accounted_tmp=$('#Left_In_Accounted_3').val();
        if(In_Accounted_tmp !=''){
            In_Accounted_tmp=parseFloat(In_Accounted_tmp);
            In_Accounted_tmp += 122;
            $("#In_Accounted_3").css('cssText',"left:"+In_Accounted_tmp+"pt!important");//提高权限
        }
        else{

        }


        var In_Bank_tmp=$('#Left_In_Bank_3').val();
        if(In_Bank_tmp !=''){
            In_Bank_tmp=parseFloat(In_Bank_tmp);
            In_Bank_tmp += 122;
            $("#In_Bank_3").css('cssText',"left:"+In_Bank_tmp+"pt!important");//提高权限
        }
        else{

        }


        var Money_complex_tmp=$('#Left_Money_complex_3').val();
        if(Money_complex_tmp !=''){
            Money_complex_tmp=parseFloat(Money_complex_tmp);
            Money_complex_tmp += 135;
            $("#Money_complex_3").css('cssText',"left:"+Money_complex_tmp+"pt!important");//提高权限
        }
        else{

        }

        
        var Money_Arab_tmp=$('#Left_Money_Arab_3').val();
        if(Money_Arab_tmp !=''){
            Money_Arab_tmp=parseFloat(Money_Arab_tmp);
            Money_Arab_tmp += 122;
            $("#Money_Arab_3").css('cssText',"left:"+Money_Arab_tmp+"pt!important");//提高权限
        }
        else{

        }

        
        var Bill_Type_tmp=$('#Left_Bill_Type_3').val();
        if(Bill_Type_tmp !=''){
            Bill_Type_tmp=parseFloat(Bill_Type_tmp);
            Bill_Type_tmp += 135;
            $("#Bill_Type_3").css('cssText',"left:"+Bill_Type_tmp+"pt!important");//提高权限
        }
        else{

        }


        var Bill_Count_tmp=$('#Left_Bill_Count_3').val();
        if(Bill_Count_tmp !=''){
            Bill_Count_tmp=parseFloat(Bill_Count_tmp);
            Bill_Count_tmp += 1;
            $("#Bill_Count_3").css('cssText',"left:"+Bill_Count_tmp+"pt!important");//提高权限
        }
        else{

        }


        var Bill_Num_tmp=$('#Left_Bill_Num_3').val();
        if(Bill_Num_tmp !=''){
            Bill_Num_tmp=parseFloat(Bill_Num_tmp);
            Bill_Num_tmp += 135;
            $("#Bill_Num_3").css('cssText',"left:"+Bill_Num_tmp+"pt!important");//提高权限
        }
        else{

        }


        var Add_Info_tmp=$('#Left_Add_Info_3').val();
        if(Add_Info_tmp !=''){
            Add_Info_tmp=parseFloat(Add_Info_tmp);
            Add_Info_tmp += 335;
            $("#Add_Info_3").css('cssText',"left:"+Add_Info_tmp+"pt!important");//提高权限
        }
        else{

        }

        
        var Use_tmp=$('#Left_Use_3').val();
        if(Use_tmp !=''){
            Use_tmp=parseFloat(Use_tmp);
            Use_tmp += 335;
            $("#Use_3").css('cssText',"left:"+Use_tmp+"pt!important");//提高权限
        }
        else{

        }
*/














/*
        var Up_Out_Name_tmp=$('#Up_Out_Name_3').val();
        if(Up_Out_Name_tmp !=""){
            Up_Out_Name_tmp=parseFloat(Up_Out_Name_tmp);
            $("#Out_Name_3").css('cssText',"transform:translate(0pt,"+Up_Out_Name_tmp+"pt)!important");//提高权限
            //$("#Out_Name_3").css("transform","translate(0pt,"+Up_Out_Name_tmp+"pt)");//提高权限
            //alert($("#Out_Name_3").css("transform"));

            //var style = document.createElement('style');
            //style.innerHTML = "@media print {#Out_Name_3 {position: relative;transform:translate(0pt,"+Up_Out_Name_tmp+"pt)!important;}}";

        }
        else{

        }


        var Up_Date_tmp=$('#Up_Date_3').val();
        if(Up_Date_tmp !=""){
            Up_Date_tmp=parseFloat(Up_Date_tmp);
            Up_Date_tmp += 135;
            $("#Date_3").css('cssText',"left:"+Up_Date_tmp+"pt!important");//提高权限
        }
        else{

        }

        var Out_Accounted_tmp=$('#Up_Out_Accounted_3').val();
        Out_Accounted_tmp=parseFloat(Out_Accounted_tmp);
        Out_Accounted_tmp += 135;
        $("#Out_Accounted_3").css('cssText',"left:"+Out_Accounted_tmp+"pt!important");//提高权限

        var Out_Bank_tmp=$('#Left_Out_Bank_3').val();
        Out_Bank_tmp=parseFloat(Out_Bank_tmp);
        Out_Bank_tmp += 135;
        $("#Out_Bank_3").css('cssText',"left:"+Out_Bank_tmp+"pt!important");//提高权限

        var In_Name_tmp=$('#Left_In_Name_3').val();
        In_Name_tmp=parseFloat(In_Name_tmp);
        In_Name_tmp += 135;
        $("#In_Name_3").css('cssText',"left:"+In_Name_tmp+"pt!important");//提高权限
        
        var In_Accounted_tmp=$('#Left_In_Accounted_3').val();
        In_Accounted_tmp=parseFloat(In_Accounted_tmp);
        In_Accounted_tmp += 135;
        $("#In_Accounted_3").css('cssText',"left:"+In_Accounted_tmp+"pt!important");//提高权限

        var In_Bank_tmp=$('#Left_In_Bank_3').val();
        In_Bank_tmp=parseFloat(In_Bank_tmp);
        In_Bank_tmp += 135;
        $("#In_Bank_3").css('cssText',"left:"+In_Bank_tmp+"pt!important");//提高权限

        var Money_complex_tmp=$('#Left_Money_complex_3').val();
        Money_complex_tmp=parseFloat(Money_complex_tmp);
        Money_complex_tmp += 135;
        $("#Money_complex_3").css('cssText',"left:"+Money_complex_tmp+"pt!important");//提高权限
        
        var Money_Arab_tmp=$('#Left_Money_Arab_3').val();
        Money_Arab_tmp=parseFloat(Money_Arab_tmp);
        Money_Arab_tmp += 135;
        $("#Money_Arab_3").css('cssText',"left:"+Money_Arab_tmp+"pt!important");//提高权限
        
        var Bill_Type_tmp=$('#Left_Bill_Type_3').val();
        Bill_Type_tmp=parseFloat(Bill_Type_tmp);
        Bill_Type_tmp += 135;
        $("#Bill_Type_3").css('cssText',"left:"+Bill_Type_tmp+"pt!important");//提高权限

        var Bill_Count_tmp=$('#Left_Bill_Count_3').val();
        Bill_Count_tmp=parseFloat(Bill_Count_tmp);
        Bill_Count_tmp += 135;
        $("#Bill_Count_3").css('cssText',"left:"+Bill_Count_tmp+"pt!important");//提高权限

        var Bill_Num_tmp=$('#Left_Bill_Num_3').val();
        Bill_Num_tmp=parseFloat(Bill_Num_tmp);
        Bill_Num_tmp += 135;
        $("#Bill_Num_3").css('cssText',"left:"+Bill_Num_tmp+"pt!important");//提高权限

        var Add_Info_tmp=$('#Left_Add_Info_3').val();
        Add_Info_tmp=parseFloat(Add_Info_tmp);
        Add_Info_tmp += 135;
        $("#Add_Info_3").css('cssText',"left:"+Add_Info_tmp+"pt!important");//提高权限
        
        var Use_tmp=$('#Left_Use_3').val();
        Use_tmp=parseFloat(Use_tmp);
        Use_tmp += 135;
        $("#Use_3").css('cssText',"left:"+Use_tmp+"pt!important");//提高权限
*/        
  


 /* 
        var Spacing_Out_Name_tmp=$('#Spacing_Out_Name_3').val();
        Spacing_Out_Name_tmp=parseFloat(Spacing_Out_Name_tmp);
        $("#Out_Name_3").css('cssText',"letter-spacing:"+Spacing_Out_Name_tmp+"pt!important");//提高权限
        

      
        var Spacing_Date_tmp=$('#Spacing_Date_3').val();
        Spacing_Date_tmp=parseFloat(Spacing_Date_tmp);
        Spacing_Date_tmp += 135;
        $("#Date_3").css('cssText',"left:"+Spacing_Date_tmp+"pt!important");//提高权限

        var Out_Accounted_tmp=$('#Left_Out_Accounted_3').val();
        Out_Accounted_tmp=parseFloat(Out_Accounted_tmp);
        Out_Accounted_tmp += 135;
        $("#Out_Accounted_3").css('cssText',"left:"+Out_Accounted_tmp+"pt!important");//提高权限

        var Out_Bank_tmp=$('#Left_Out_Bank_3').val();
        Out_Bank_tmp=parseFloat(Out_Bank_tmp);
        Out_Bank_tmp += 135;
        $("#Out_Bank_3").css('cssText',"left:"+Out_Bank_tmp+"pt!important");//提高权限

        var In_Name_tmp=$('#Left_In_Name_3').val();
        In_Name_tmp=parseFloat(In_Name_tmp);
        In_Name_tmp += 135;
        $("#In_Name_3").css('cssText',"left:"+In_Name_tmp+"pt!important");//提高权限
        
        var In_Accounted_tmp=$('#Left_In_Accounted_3').val();
        In_Accounted_tmp=parseFloat(In_Accounted_tmp);
        In_Accounted_tmp += 135;
        $("#In_Accounted_3").css('cssText',"left:"+In_Accounted_tmp+"pt!important");//提高权限

        var In_Bank_tmp=$('#Left_In_Bank_3').val();
        In_Bank_tmp=parseFloat(In_Bank_tmp);
        In_Bank_tmp += 135;
        $("#In_Bank_3").css('cssText',"left:"+In_Bank_tmp+"pt!important");//提高权限

        var Money_complex_tmp=$('#Left_Money_complex_3').val();
        Money_complex_tmp=parseFloat(Money_complex_tmp);
        Money_complex_tmp += 135;
        $("#Money_complex_3").css('cssText',"left:"+Money_complex_tmp+"pt!important");//提高权限
        
        var Money_Arab_tmp=$('#Left_Money_Arab_3').val();
        Money_Arab_tmp=parseFloat(Money_Arab_tmp);
        Money_Arab_tmp += 135;
        $("#Money_Arab_3").css('cssText',"left:"+Money_Arab_tmp+"pt!important");//提高权限
        
        var Bill_Type_tmp=$('#Left_Bill_Type_3').val();
        Bill_Type_tmp=parseFloat(Bill_Type_tmp);
        Bill_Type_tmp += 135;
        $("#Bill_Type_3").css('cssText',"left:"+Bill_Type_tmp+"pt!important");//提高权限

        var Bill_Count_tmp=$('#Left_Bill_Count_3').val();
        Bill_Count_tmp=parseFloat(Bill_Count_tmp);
        Bill_Count_tmp += 135;
        $("#Bill_Count_3").css('cssText',"left:"+Bill_Count_tmp+"pt!important");//提高权限

        var Bill_Num_tmp=$('#Left_Bill_Num_3').val();
        Bill_Num_tmp=parseFloat(Bill_Num_tmp);
        Bill_Num_tmp += 135;
        $("#Bill_Num_3").css('cssText',"left:"+Bill_Num_tmp+"pt!important");//提高权限

        var Add_Info_tmp=$('#Left_Add_Info_3').val();
        Add_Info_tmp=parseFloat(Add_Info_tmp);
        Add_Info_tmp += 135;
        $("#Add_Info_3").css('cssText',"left:"+Add_Info_tmp+"pt!important");//提高权限
        
        var Use_tmp=$('#Left_Use_3').val();
        Use_tmp=parseFloat(Use_tmp);
        Use_tmp += 135;
        $("#Use_3").css('cssText',"left:"+Use_tmp+"pt!important");//提高权限
*/
/*
        var Size_Out_Name_tmp=$('#Size_Out_Name_3').val();
        //alert($("#Out_Name_3").css("font-size"));
        Size_Out_Name_tmp=parseFloat(Size_Out_Name_tmp);
        $("#Out_Name_3").css('cssText',"font-size:"+Size_Out_Name_tmp+"pt!important");//提高权限
        //alert($("#Out_Name_3").css("font-size"));
        


        var Date_tmp=$('#Left_Date_3').val();
        Date_tmp=parseFloat(Date_tmp);
        Date_tmp += 135;
        $("#Date_3").css('cssText',"left:"+Date_tmp+"pt!important");//提高权限

        var Out_Accounted_tmp=$('#Left_Out_Accounted_3').val();
        Out_Accounted_tmp=parseFloat(Out_Accounted_tmp);
        Out_Accounted_tmp += 135;
        $("#Out_Accounted_3").css('cssText',"left:"+Out_Accounted_tmp+"pt!important");//提高权限

        var Out_Bank_tmp=$('#Left_Out_Bank_3').val();
        Out_Bank_tmp=parseFloat(Out_Bank_tmp);
        Out_Bank_tmp += 135;
        $("#Out_Bank_3").css('cssText',"left:"+Out_Bank_tmp+"pt!important");//提高权限

        var In_Name_tmp=$('#Left_In_Name_3').val();
        In_Name_tmp=parseFloat(In_Name_tmp);
        In_Name_tmp += 135;
        $("#In_Name_3").css('cssText',"left:"+In_Name_tmp+"pt!important");//提高权限
        
        var In_Accounted_tmp=$('#Left_In_Accounted_3').val();
        In_Accounted_tmp=parseFloat(In_Accounted_tmp);
        In_Accounted_tmp += 135;
        $("#In_Accounted_3").css('cssText',"left:"+In_Accounted_tmp+"pt!important");//提高权限

        var In_Bank_tmp=$('#Left_In_Bank_3').val();
        In_Bank_tmp=parseFloat(In_Bank_tmp);
        In_Bank_tmp += 135;
        $("#In_Bank_3").css('cssText',"left:"+In_Bank_tmp+"pt!important");//提高权限

        var Money_complex_tmp=$('#Left_Money_complex_3').val();
        Money_complex_tmp=parseFloat(Money_complex_tmp);
        Money_complex_tmp += 135;
        $("#Money_complex_3").css('cssText',"left:"+Money_complex_tmp+"pt!important");//提高权限
        
        var Money_Arab_tmp=$('#Left_Money_Arab_3').val();
        Money_Arab_tmp=parseFloat(Money_Arab_tmp);
        Money_Arab_tmp += 135;
        $("#Money_Arab_3").css('cssText',"left:"+Money_Arab_tmp+"pt!important");//提高权限
        
        var Bill_Type_tmp=$('#Left_Bill_Type_3').val();
        Bill_Type_tmp=parseFloat(Bill_Type_tmp);
        Bill_Type_tmp += 135;
        $("#Bill_Type_3").css('cssText',"left:"+Bill_Type_tmp+"pt!important");//提高权限

        var Bill_Count_tmp=$('#Left_Bill_Count_3').val();
        Bill_Count_tmp=parseFloat(Bill_Count_tmp);
        Bill_Count_tmp += 135;
        $("#Bill_Count_3").css('cssText',"left:"+Bill_Count_tmp+"pt!important");//提高权限

        var Bill_Num_tmp=$('#Left_Bill_Num_3').val();
        Bill_Num_tmp=parseFloat(Bill_Num_tmp);
        Bill_Num_tmp += 135;
        $("#Bill_Num_3").css('cssText',"left:"+Bill_Num_tmp+"pt!important");//提高权限

        var Add_Info_tmp=$('#Left_Add_Info_3').val();
        Add_Info_tmp=parseFloat(Add_Info_tmp);
        Add_Info_tmp += 135;
        $("#Add_Info_3").css('cssText',"left:"+Add_Info_tmp+"pt!important");//提高权限
        
        var Use_tmp=$('#Left_Use_3').val();
        Use_tmp=parseFloat(Use_tmp);
        Use_tmp += 135;
        $("#Use_3").css('cssText',"left:"+Use_tmp+"pt!important");//提高权限
*/
 /*
        var Font_Out_Name_tmp=$('#Font_Out_Name_3').val();

        $("#Out_Name_3").css('cssText',"font-family:"+Font_Out_Name_tmp+"!important");//提高权限

        
        var Date_tmp=$('#Left_Date_3').val();
        Date_tmp=parseFloat(Date_tmp);
        Date_tmp += 135;
        $("#Date_3").css('cssText',"left:"+Date_tmp+"pt!important");//提高权限

        var Out_Accounted_tmp=$('#Left_Out_Accounted_3').val();
        Out_Accounted_tmp=parseFloat(Out_Accounted_tmp);
        Out_Accounted_tmp += 135;
        $("#Out_Accounted_3").css('cssText',"left:"+Out_Accounted_tmp+"pt!important");//提高权限

        var Out_Bank_tmp=$('#Left_Out_Bank_3').val();
        Out_Bank_tmp=parseFloat(Out_Bank_tmp);
        Out_Bank_tmp += 135;
        $("#Out_Bank_3").css('cssText',"left:"+Out_Bank_tmp+"pt!important");//提高权限

        var In_Name_tmp=$('#Left_In_Name_3').val();
        In_Name_tmp=parseFloat(In_Name_tmp);
        In_Name_tmp += 135;
        $("#In_Name_3").css('cssText',"left:"+In_Name_tmp+"pt!important");//提高权限
        
        var In_Accounted_tmp=$('#Left_In_Accounted_3').val();
        In_Accounted_tmp=parseFloat(In_Accounted_tmp);
        In_Accounted_tmp += 135;
        $("#In_Accounted_3").css('cssText',"left:"+In_Accounted_tmp+"pt!important");//提高权限

        var In_Bank_tmp=$('#Left_In_Bank_3').val();
        In_Bank_tmp=parseFloat(In_Bank_tmp);
        In_Bank_tmp += 135;
        $("#In_Bank_3").css('cssText',"left:"+In_Bank_tmp+"pt!important");//提高权限

        var Money_complex_tmp=$('#Left_Money_complex_3').val();
        Money_complex_tmp=parseFloat(Money_complex_tmp);
        Money_complex_tmp += 135;
        $("#Money_complex_3").css('cssText',"left:"+Money_complex_tmp+"pt!important");//提高权限
        
        var Money_Arab_tmp=$('#Left_Money_Arab_3').val();
        Money_Arab_tmp=parseFloat(Money_Arab_tmp);
        Money_Arab_tmp += 135;
        $("#Money_Arab_3").css('cssText',"left:"+Money_Arab_tmp+"pt!important");//提高权限
        
        var Bill_Type_tmp=$('#Left_Bill_Type_3').val();
        Bill_Type_tmp=parseFloat(Bill_Type_tmp);
        Bill_Type_tmp += 135;
        $("#Bill_Type_3").css('cssText',"left:"+Bill_Type_tmp+"pt!important");//提高权限

        var Bill_Count_tmp=$('#Left_Bill_Count_3').val();
        Bill_Count_tmp=parseFloat(Bill_Count_tmp);
        Bill_Count_tmp += 135;
        $("#Bill_Count_3").css('cssText',"left:"+Bill_Count_tmp+"pt!important");//提高权限

        var Bill_Num_tmp=$('#Left_Bill_Num_3').val();
        Bill_Num_tmp=parseFloat(Bill_Num_tmp);
        Bill_Num_tmp += 135;
        $("#Bill_Num_3").css('cssText',"left:"+Bill_Num_tmp+"pt!important");//提高权限

        var Add_Info_tmp=$('#Left_Add_Info_3').val();
        Add_Info_tmp=parseFloat(Add_Info_tmp);
        Add_Info_tmp += 135;
        $("#Add_Info_3").css('cssText',"left:"+Add_Info_tmp+"pt!important");//提高权限
        
        var Use_tmp=$('#Left_Use_3').val();
        Use_tmp=parseFloat(Use_tmp);
        Use_tmp += 135;
        $("#Use_3").css('cssText',"left:"+Use_tmp+"pt!important");//提高权限
*/

    });


    //电汇单打印参数设置
    $('#Confirm').click(function(){



    });
    
});
$.extend({Arabia_To_SimplifiedChinese:function(Num){
    //分割整数部分和小数部分，要判断小数部分是否为空
    var part=Num.split('.');    
    var newchar = "";
    //小数点前进行转化
    for (i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            //alert("位数过大，无法计算");
            return "";
        }//若数量超过拾亿单位，提示
        var tmpnewchar = "";
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0": tmpnewchar = "零" + tmpnewchar;break;
            case "1": tmpnewchar = "壹" + tmpnewchar; break;
            case "2": tmpnewchar = "贰" + tmpnewchar; break;
            case "3": tmpnewchar = "叁" + tmpnewchar; break;
            case "4": tmpnewchar = "肆" + tmpnewchar; break;
            case "5": tmpnewchar = "伍" + tmpnewchar; break;
            case "6": tmpnewchar = "陆" + tmpnewchar; break;
            case "7": tmpnewchar = "柒" + tmpnewchar; break;
            case "8": tmpnewchar = "捌" + tmpnewchar; break;
            case "9": tmpnewchar = "玖" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
            case 0: tmpnewchar = tmpnewchar; break;
            case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "拾"; break;
            case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "佰"; break;
            case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "仟"; break;
            case 4: tmpnewchar = tmpnewchar + "万"; break;
            case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "拾"; break;
            case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "佰"; break;
            case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "仟"; break;
            case 8: tmpnewchar = tmpnewchar + "亿"; break;
            case 9: tmpnewchar = tmpnewchar + "拾"; break;
        }
        newchar = tmpnewchar + newchar;
    
    }
    if(part.length==1){
        //只有整数
        newchar = newchar + "元整";
    }
    else{
        //有小数不加整
        newchar = newchar + "元";
        for (i = 0; i <= part[1].length - 1; i++) {
            if (part[1].length > 3) {
                //alert("位数过大，无法计算");
                return "";
            }//若数量超过拾亿单位，提示
            var tmpnewchar = "";
            var perchar = part[1].charAt(i);
            switch (perchar) {
                case "0": tmpnewchar = "零" + tmpnewchar;break;
                case "1": tmpnewchar = "壹" + tmpnewchar; break;
                case "2": tmpnewchar = "贰" + tmpnewchar; break;
                case "3": tmpnewchar = "叁" + tmpnewchar; break;
                case "4": tmpnewchar = "肆" + tmpnewchar; break;
                case "5": tmpnewchar = "伍" + tmpnewchar; break;
                case "6": tmpnewchar = "陆" + tmpnewchar; break;
                case "7": tmpnewchar = "柒" + tmpnewchar; break;
                case "8": tmpnewchar = "捌" + tmpnewchar; break;
                case "9": tmpnewchar = "玖" + tmpnewchar; break;
            }
            switch (part[1].length - i - 1) {
                case 0: if (perchar != 0) tmpnewchar = tmpnewchar + "分"; break;
                case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "角"; break;
            }
            newchar = newchar + tmpnewchar;
        
        }
        
        

    }
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1|| newchar.search("零元") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");
        newchar = newchar.replace("零元", "元");      
    }
    //$("#Money_complex_3").text(newchar);
    return newchar;
}
});
    