/* 
 * Socket.io connection and create mini-chat
 */
var socket = io.connect('http://localhost:8090');

$("#msgSubmit").click(function(){
    var msg = $("#msgContent").val();
    console.log(msg);
    socket.emit('message', msg);
});

