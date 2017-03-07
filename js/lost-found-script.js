$(function(){
    Module.SuspendedBackButton.unit(function(){
        history.back();
    });
    Module.BottomShadow.unit();
    Module.Popup.unit($("#btn-popup"));
});