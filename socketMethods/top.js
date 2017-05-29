var io = require('socket.io')();
var cookieParser = require('cookie-parser');
//连接事件
io.on('connection', (socket) => {
    //console.log('socket服务信息', socket);
    //console.log('socket服务信息client', socket.client);
    //console.log('socket服务信息conn', socket.conn);
    console.log('socket请求信息', socket.request.headers.cookie)
    console.log('socket服务信息id', socket.id);
    console.log('socket服务信息rooms', socket.rooms);
    io.clients((err, users) => console.log('当前用户数', users))
    //console.log('namespace信息', io.nsps);
    //发送群消息
    io.emit('one', '来自命名空间的群发')
    //demo-start
    socket.on('one', res => {
        //receive data from browser emit
        //打印出来自浏览器的emit数据
        console.log('浏览器emit的数据', res);
        //response some data to browser;
        //向浏览器发送数据
        socket.emit('one', {
            status: 'i have got your message from browser，service starts',
            data: res
        });
        //获取当前所有客户端ID
        io.clients((err, clients) => {
            console.log('客户端ID列表', clients)
        })


    });
})

exports.listen = (server) => {
    return io.listen(server)
}