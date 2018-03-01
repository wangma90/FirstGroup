/**
 * Created by Administrator on 2018/2/27.
 */
$(function(){
    var tf =true;
    $(".tc").on("click",function(){
        if(tf){
            $(".box_left").css("left","0px");
            $(".box_right").css("left","4.4rem");
            tf = false;
        }else{
            $(".box_left").css("left","-4.4rem");
            $(".box_right").css("left","0px");
            tf = true;
        }
    });
    $("div.dv:eq(0)>p").on("click",function(){
        window.location="index.html";
    });
    $("div.dv:eq(1)>p").on("click",function(){
        window.location="diary.html";
    });
    $("div.dv:eq(2)>p").on("click",function(){
        window.location="send.html";
    });
    $("div.dv:eq(3)>p").on("click",function(){
        window.location="gerenziliao.html";
    })
});