# LostAndFound 失物招领 
#### 2017.03.06 Mon.
publish.html实现与后台传输数据  
具体数据格式如下：  
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
**picture:**
文件上传还需尝试  
**owner:**
假使为用户表中用户对应id，实际运用中由后台决定是否需要传这个数据