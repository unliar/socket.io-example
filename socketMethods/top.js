var io=require('socket.io')();

io.on('connection', (socket) => {
    console.log('socketio已经连接');
/*
sendone
私聊
msg={
toid:'发送目标',
fromid:'来源',
tonickname:"目标昵称',
fromnickname:'来源昵称'
content:'消息主题'
}
*/  
    socket.on('sendone',function(msg){
        console.log(msg)
       var msgto=msg.to;
       var msgfrom=msg.from;
       var msgcontent=msg.content;
       socket.emit(`getone${msgto}`,{msg:msgcontent})
       
    });
/*
sendgroup
群聊
msg={
to:'发送目标',
from:'来源',
content:'消息主体'
}
*/
    socket.on('sendgroup',function(msg){

    })
})




exports.listen=(server)=>{
  return io.listen(server)
} 