var io = require('socket.io').listen(5001),
    redis = require('redis').createClient();

redis.subscribe('new_list');

io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    console.log(message);
    socket.emit('new_list', JSON.parse(message));
  });
});

console.log("Nodejs server listening....");