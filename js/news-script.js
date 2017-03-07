$(function(){
    // Module
    Module.BottomShadow.unit();
    Module.MessageButton.unit("../html/message.html");
    // Other
    $("#btn-back").on("click",function(){
        location.href="../html/home.html";
    });
    
});