# LostAndFound 失物招领 

### 2017.03.07 Tue.

>#### home.html完成搜索功能
>
>数据格式更改如下：
>
>>###### 传给后台
>
    `data:{
        type:type,
        search:search,
        index:$("#screen-"+type).find(">.item").length,
        amount:amount
    }`
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
    `data:{
        type:type,
        index:$("#screen-"+type).find(">.item").length,
        amount:amount
    }`
>>    
>>**index:**
当前已有数目
>>
>>**amount:**
向服务器请求数目
<<<<<<< HEAD
>
>>###### 传给前端
>>
>>将获取到的所有信息合并成字符串：
>>
>>title,name,time,character,picture;title,name,time,character,picture;  
不同信息以;隔开，不同属性以,隔开,character保有原有的中文顿号。

>#### publish.html删除owner的传送
>
>后台直接从应用里调取用户id
=======

>传给前端

将获取到的所有信息合并成字符串：
title,name,time,character,picture;title,name,time,character,picture;
不同信息以;隔开，不同属性以,隔开,character保有原有的中文顿号

---

---

---

#### publish.html删除owner的传送

后台直接从应用里调取用户id
>>>>>>> 7e99af34244f27f187c4874208f81ff4b73fc355

***

### 2017.03.06 Mon.

>#### publish.html实现与后台传输数据  
>
>具体数据格式如下：  
>
>>###### 传给后台
>>
    `data:{
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
    }`  
>>
>>**picture:**
文件上传还需尝试  
<<<<<<< HEAD
>>
>>**owner:**
假使为用户表中用户对应id，实际运用中由后台决定是否需要传这个数据。
>
>>###### 传给前端
>>
>>成功传"success",失败传"error"
=======
**owner:**
假使为用户表中用户对应id，实际运用中由后台决定是否需要传这个数据

>传给前端

成功传"success",失败传"error">>>>>>> 7e99af34244f27f187c4874208f81ff4b73fc355
