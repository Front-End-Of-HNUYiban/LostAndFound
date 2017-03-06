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
});