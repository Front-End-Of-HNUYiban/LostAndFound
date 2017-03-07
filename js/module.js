$(function(global){
    var module=global.Module=(function(){
        var suspendedMenuButton=(function(){
            var unit=function(){
                $(".circle").on("click",function(){
                    var obj=$("#m-susbtn-1");
                    if(obj.hasClass("m-susbtn-1-active")){
                        obj.removeClass("m-susbtn-1-active");
                        $("#m-search-switch").removeClass("m-search-switch-on")
                    }
                    else{
                        obj.addClass("m-susbtn-1-active");
                    }
                })
            };
            var addEventListener=function(index,fun){
                $(".menu").eq(index).on("click",fun);
            };
            return{
                unit:unit,
                addEventListener:addEventListener
            }
        }());
        var suspendedBackButton=(function(){
            var unit=function(){
                $(".m-susbtn-2").on("click",function(){
                    history.back();
                });
            };
            return{
                unit:unit
            }
        }());
        var searchBox=(function(){
            var unit=function(func){
                $("#m-search-switch").on("click",function(){
                    $("#m-search-switch").addClass("m-search-switch-on");
                });
                $("#m-search-btn").on("click",func)
            };
            return{
                unit:unit
            }
        }());
        var slideScreen=(function(){
            var unit=function(func1,func2){
                $(".m-nav .item").on("click",function(){
                    var other=$(".m-nav .item-selected");
                    var obj=$(this);
                    var underline=$(".m-nav .underline");
                    var slide=$(".m-slide");
                    if(!obj.hasClass("item-selected")){
                        obj.addClass("item-selected");
                        other.removeClass("item-selected");
                        if(obj.index()==0){
                            underline.removeClass("underline-change");
                            slide.removeClass("m-slide-change");
                            func1();
                        }
                        else{
                            underline.addClass("underline-change");
                            slide.addClass("m-slide-change");
                            func2();
                        }
                    }
                })
            };
            return{
                unit:unit
            }
        }());
        var bottomShadow=(function(){
            var unit=function(){
                var obj=$(".m-shadow");
                $("body").on("touchmove",function(){
                    var body=document.body;
                    if(body.scrollTop+body.clientHeight>=body.scrollHeight){
                        if(!obj.hasClass("m-shadow-show")){
                            obj.addClass("m-shadow-show");
                        }
                    }
                }).on("touchend",function(){
                    if(obj.hasClass("m-shadow-show")){
                        obj.removeClass("m-shadow-show");
                    }
                });
            };
            return{
                unit:unit
            }
        }());
        var popup=(function(){
            var unit=function(btn){
                $(btn).on("click",function(){
                    var cover=$(".m-cover");
                    var popup=$(".m-popup");
                    var countdown=$(".m-popup").find(".small");
                    if(!cover.hasClass("m-cover-show")){
                        cover.addClass("m-cover-show");
                        popup.addClass("m-popup-show");
                        var count=5;
                        var timer=setInterval(function(){
                            count--;
                            countdown.html(count+"s后<a href='home.html'>返回首页</a>");
                            if(count<=0){
                                clearInterval(timer);
                                location.href="../html/home.html";
                            }
                        },1000)
                    }
                });
            };
            return{
                unit:unit
            }
        }());
        var uploadAndPreviewPicture=(function(){
            var unit=function(){
                $(".m-upload-picture").find("[type='file']").on("change",function(e){
                    var obj=e.target;
                    var pre=$(".m-upload-picture").find(".preview");
                    if(obj.files.length===0){
                        if(pre.hasClass("preview-show")){
                            pre.attr("src","");
                            pre.removeClass("preview-show");
                            return;
                        }
                    }
                    var reader=new FileReader();
                    reader.onload=function(e){
                        pre.attr("src",e.target.result);
                    };
                    reader.readAsDataURL(obj.files[0]);
                    if(!pre.hasClass("preview-show")){
                        pre.addClass("preview-show");
                    }
                })
            };
            return{
                unit:unit
            }
        }());
        var messageButton=(function(){
            var unit=function(url){
                $(".m-message-btn").on("click",function(){
                    location.href=url;
                });
            };
            return{
                unit:unit
            }
        }());
        return{
            SuspendedMenuButton:suspendedMenuButton,
            SuspendedBackButton:suspendedBackButton,
            SearchBox:searchBox,
            SlideScreen:slideScreen,
            BottomShadow:bottomShadow,
            Popup:popup,
            UploadAndPreviewPicture:uploadAndPreviewPicture,
            MessageButton:messageButton
        }
    }())
}(window));