# LostAndFound 失物招领 

### 2017.03.07 Tue.

>#### news.html增加页面初始化、找回、删除、留言红点
>该页面前端向后台传送数据较简单，以命令形式
>>###### 传给后台
>>初始化命令

    signal:"all"

>>找回命令

    signal:"found",
    pid:items[i].pid

>>删除命令

    signal:"delete",
    pid:items[i].pid

>>留言命令

    signal:"anyMessage"

>>具体命令内容后期与后台协商，pid需要从后台读取到
>
>>###### 传给前端
>>初始化和删除：  
将获取到的所有信息合并成字符串：  
pid,title,name,time,character,picture,type;  
不同信息以;隔开，不同属性以,隔开,character保有原有的中文顿号。  
比之前多了首项pid和尾项type（type为lost或found）。
>>
>>找回：  
将要跳转，不清楚后台原理，具体实现当面交接  
>>
>>留言红点：  
需要后台判断用户是否有新的未读消息，有返回"yes",没有返回"no"

>#### home.html完成搜索功能
>
>数据格式更改如下：
>
>>###### 传给后台
>>
    data:{
        type:type,
        search:search,
        index:$("#screen-"+type).find(">.item").length,
        amount:amount
    }
>
>>**search:**
搜索框中的内容
>>
>>在页面初始化时，search将会传空值到后台

>#### home.html增加页面初始ajax与滚动ajax，还有搜索未添加
>
>具体数据格式如下:
>
>>###### 传给后台
>>
    data:{
        type:type,
        index:$("#screen-"+type).find(">.item").length,
        amount:amount
    }
>>    
>>**index:**
当前已有数目
>>
>>**amount:**
向服务器请求数目
>
>>###### 传给前端
>>将获取到的所有信息合并成字符串：  
title,name,time,character,picture;title,name,time,character,picture;  
不同信息以;隔开，不同属性以,隔开,character保有原有的中文顿号

>#### publish.html删除owner的传送
>
>后台直接从应用里调取用户id

***

### 2017.03.06 Mon.

>#### publish.html实现与后台传输数据  
>
>具体数据格式如下：  
>
>>###### 传给后台
>>
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
    }  
>>
>>**picture:**
文件上传还需尝试  
>>
>>**owner:**
假使为用户表中用户对应id，实际运用中由后台决定是否需要传这个数据。
>
>>###### 传给前端
>>成功传"success",失败传"error"