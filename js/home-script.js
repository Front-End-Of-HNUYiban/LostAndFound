$(function(){
    // Module
    Module.SlideScreen.unit(function(){
        $("#screen-found").empty();
        $("#screen-lost").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>");
        $("#screen-lost").find(">.item").on("click",function(){
            location.href="../html/lost.html";
        });
    },function(){
        $("#screen-lost").empty();
        $("#screen-found").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>").append("<div class='item'><span " +
            "class='g-left'><img src='../img/Are%20you%20afraid%20of%20%20loving%20me.jpg' alt='没有相关图片'" +
            "></span><!----><span class='g-right'><span cla" +
            "ss='icon'></span><span class='content'><div cl" +
            "ass='title'>标题名称</div><div class='name'>名" +
            "称：手机</div><div class='time'>时间：2017.01." +
            "31</div><div class='character'>特征：<br><span" +
            " class='item'>银灰</span><span class='item'>IO" +
            "S</span><span class='item'>ABCD</span></div></" +
            "span></span></div>");
        $("#screen-found").find(">.item").on("click",function(){
            location.href="../html/found.html";
        });
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
    Module.SearchBox.unit();
    // Other
    $("#screen-lost").find(">.item").on("click",function(){
        location.href="../html/lost.html";
    });
    $("#screen-found").find(">.item").on("click",function(){
        location.href="../html/found.html";
    });
});