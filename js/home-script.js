$(function(){
    // Module
    var screenType="lost",
        search=$("#m-search-text").val();
    var Item=function(str){
        var arr=str.split(",");
        this.title=arr[0];
        this.name=arr[1];
        this.time=arr[2];
        this.kharacter=arr[3]||"";
        this.picture=arr[4]||"";
    };
    function generateView(container,items){
        for(var i=0,n=items.length-1; i<n; i++){
            var div=document.createElement("div");
            div.setAttribute("class","item");
            div.innerHTML="<span class='g-left'><img src='"+items[i].picture+"' alt='没有相关图片'></span>" +
                "<span class='g-right'><span class='icon'></span><span class='content'>" +
                "<div class='title'>"+items[i].title+"</div><div class='name'>名称："+items[i].name+"</div>" +
                "<div class='time'>时间："+items[i].time+"</div><div class='character'></div></span></span>";
            var kharacter=items[i].kharacter.split("、");
            if(!kharacter[0]){
                $(div).find(".character").html("特征：<br/>无");
            }
            else{
                $(div).find(".character").html("特征：<br/>");
                for(var j=0,m=kharacter.length;j<m;j++){
                    var div2=document.createElement("span");
                    div2.setAttribute("class","item");
                    div2.innerHTML=kharacter[j];
                    $(div).find(".character").append(div2);
                }
            }
            container.appendChild(div);
        }
    }
    function init(type,amount){
        $.ajax({
            url:"../home.php",
            type:"post",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            data:{
                type:type,
                search:search,
                index:$("#screen-"+type).find(">.item").length,
                amount:amount
            },
            success:function(msg){
                var arr=msg.split(";");
                var items=[];
                for(var i=0,n=arr.length;i<n;i++){
                    items.push(new Item(arr[i]));
                }
                generateView(document.getElementById("screen-"+type),items);
                $("#screen-"+type).find(">.item").on("click",function(){
                    location.href="../html/"+type+".html";
                });
                setTimeout(function(){
                    flag=true;
                },2000);
            }
        });
    }
    init("lost",10);
    Module.SlideScreen.unit(function(){
        $("#screen-found").empty();
        screenType="lost";
        init("lost",10);
    },function(){
        $("#screen-lost").empty();
        screenType="found";
        init("found",10);
    });
    Module.SuspendedMenuButton.unit();
    Module.SuspendedMenuButton.addEventListener(0,function(){
        location.href="../html/news.html";
    });
    Module.SuspendedMenuButton.addEventListener(1,function(){
        location.href="../html/publish.html";
    });
    Module.SuspendedMenuButton.addEventListener(2,function(){
        location.href="../html/message.html";
    });
    Module.SearchBox.unit(function(){
        var text=$("#m-search-text").val();
        var regNoSpace=/^\S+$/;
        if(regNoSpace.test(text)){
            $(".circle").click();
            $("#screen-found").empty();
            $("#screen-lost").empty();
            search=$("#m-search-text").val();
            init(screenType,10);
        }
        else{
            alert("不能有空格哦~");
        }
    });
    // Other
    $("#screen-lost").find(">.item").on("click",function(){
        location.href="../html/lost.html";
    });
    $("#screen-found").find(">.item").on("click",function(){
        location.href="../html/found.html";
    });
    var flag=true;
    $("body").on("touchmove",function(){
        var container=$(this);
        if(container[0].scrollHeight-container[0].scrollTop-screen.availHeight<50&&flag){
            flag=false;
            init(screenType,5);
        }
    })
});