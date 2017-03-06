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
                        $.ajax({
                            url:"../index.php",
                            type:"post",
                            data:{
                                type:$("[name='type']:checked").val(),
                                title:$("[name='title']").val(),
                                name:$("[name='name']").val(),
                                time:$("[name='time']").val(),
                                place:$("[name='place']").val(),
                                things:$("[name='things']").val(),
                                character:$("[name='character']").val(),
                                contact:$("[name='contact']").val(),
                                message:$("[name='message']").val(),
                                picture:$("[name='picture']").val(),
                                owner:$("[name='type']:checked").val()=="lost"?"2":"1"
                            },
                            success:function(msg){
                                var cover=$(".m-cover");
                                var popup=$(".m-popup");
                                var main=$(".m-popup").find(".big");
                                var countdown=$(".m-popup").find(".small");
                                var str=msg=="success"?["信息已提交","首页","../html/home.html"]:["提交失败","当前页",""];
                                main.html(str[0]);
                                countdown.html("5s后<a href="+str[2]+">返回"+str[1]+"</a>");
                                if(!cover.hasClass("m-cover-show")){
                                    cover.addClass("m-cover-show");
                                    popup.addClass("m-popup-show");
                                    var count=5;
                                    var timer=setInterval(function(){
                                        count--;
                                        countdown.html(count+"s后<a href="+str[2]+">返回"+str[1]+"</a>");
                                        if(count<=0){
                                            clearInterval(timer);
                                            location.href=str[2];
                                        }
                                    },1000);
                                }
                            }
                        });
                    }
                }
            });
        };
        return{
            giveAWarning:giveAWarning
        }
    }());
}(window));