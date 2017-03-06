$(function(global){
    var Func=global.Func=(function(){
        var giveAWarning=function(form,btn,obj,reg,warning){
            $(btn).on("click",function(){
                form=$(form);
                obj=$(obj);
                var container=$(".f-warning");
                var p="<p>请按照以下要求完善信息：</p>";
                var flag=true;
                for(var i=0;i<obj.length;i++){
                    if(!reg[i].test(obj.eq(i).val())){
                        flag=false;
                        p+=("<p>"+warning[i]+"</p>");
                    }
                }
                if(!flag){
                    if(!container.hasClass("f-warning-hidden")){
                        container.addClass("f-warning-hidden");
                        setTimeout(function(){
                            container.empty().html(p).removeClass("f-warning-hidden");
                        },500);
                    }
                }
                else{
                    if(!container.hasClass("f-warning-hidden")){
                        container.addClass("f-warning-hidden");
                        setTimeout(function(){
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
                                        form.submit();
                                        location.href="../html/home.html";
                                    }
                                },1000)
                            }
                        },500);
                    }
                }
            });
        };
        return{
            giveAWarning:giveAWarning
        }
    }());
}(window));