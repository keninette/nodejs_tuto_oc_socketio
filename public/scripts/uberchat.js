/* 
 * Socket.io connection and create mini-chat
 */
// Connect to socket
var socket = io.connect('http://localhost:8090');

// Say hi because you're a good boy, ask name and emit
var nickname = prompt('Hey honey ! What should I call you ?');
socket.emit('user_connected', nickname);

// When server emits a message, display it in textarea input
socket.on('message', function(message){
    console.log(message);
    $('#messages').append(message);
});

$("#msgSubmit").on('click',function(){
    var msg = $("#msgContent").val();
    socket.emit('message', msg);
});
