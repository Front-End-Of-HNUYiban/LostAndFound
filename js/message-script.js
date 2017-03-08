$(function(){
    // Module
    Module.BottomShadow.unit();
    // Other
    $("#btn-back").on("click",function(){
        location.href="../html/home.html";
    });
    init();
    function init(){
        $.ajax({
            url:"../news.php",
            type:"post",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            data:{
                signal:"all"
            },
            success:function(msg){
                var arr=msg.split(";");
                var items=[];
                for(var i=0,n=arr.length;i<n;i++){
                    items.push(new Item(arr[i]));
                }
                generateView(document.getElementsByClassName("g-main")[0],items);
            }
        });
    }
    var Item=function(str){
        var arr=str.split(",");
        this.user=arr[0];
        this.title=arr[1];
        this.name=arr[2];
        this.time=arr[3];
        this.kharacter=arr[4]||"";
        this.picture=arr[5]||"";
        this.type=arr[6];
    };
    function generateView(container,items){
        $(container).html("<p class='none'>您暂时没有收到任何消息。</p>");
        for(var i=0,n=items.length-1; i<n; i++){
            var div=document.createElement("div");
            var str=items[i].type=="lost"?"找到了您的失物":"丢失了这件物品";
            div.setAttribute("class","item "+items[i].type+"-item");
            div.innerHTML="<div class='g-top'><span class='remind'>"+items[i].user+str+"，点击右边气泡联系Ta！</span><span class='icon'>" +
                "</span></div><span class='g-left'><img src='"+items[i].picture+"' alt='没有相关图片'></span>" +
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
});