$(function(){
    // Module
    Module.BottomShadow.unit();
    Module.MessageButton.unit("../html/message.html");
    // Other
    $("#btn-back").on("click",function(){
        location.href="../html/news.html"
    });
    $("#btn-submit").on("click",function(){
        $("#form-approach").submit();
    });
    $.ajax({
        url:"",
        type:"post",
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        data:{
            signal:"anyMessage"
        },
        success:function(msg){
            var $dot=$(".m-message-btn").find(".dot");
            if(msg=="yes"){
                if($dot.hasClass("dot-hidden")){
                    $dot.removeClass("dot-hidden");
                }
            }
            else{
                if(!$dot.hasClass("dot-hidden")){
                    $dot.addClass("dot-hidden");
                }
            }
        }
    });
});