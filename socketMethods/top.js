var io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('socketio已经连接');

    //demo-start
    socket.on('one', res => {
        //receive data from browser emit
        //打印出来自浏览器的emit数据
        console.log(res);
        //response some data to browser;
        //向浏览器发送数据
        socket.emit('one', 'i have got your data from browser');
    });


})

exports.listen = (server) => {
    return io.listen(server)
} 