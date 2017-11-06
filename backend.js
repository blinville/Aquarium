var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

//serve out any static files in our public HTML folder
app.use(express.static('public'))

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects

  socket.on('castle',function(dataWeGot){ //wait for the castle message then react
    io.emit('castleMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })

  socket.on('plantTallCircle',function(dataWeGot){ //wait for the castle message then react
    io.emit('plantTallCircleMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('coralMedium',function(dataWeGot){ //wait for the castle message then react
    io.emit('coralMediumMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('rockTallOne',function(dataWeGot){ //wait for the castle message then react
    io.emit('rockTallOneMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('rockFatMedium',function(dataWeGot){ //wait for the castle message then react
    io.emit('rockFatMediumMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('rockMediumDark',function(dataWeGot){ //wait for the castle message then react
    io.emit('rockMediumDarkMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })

  socket.on('rockSmallOne',function(dataWeGot){ //wait for the castle message then react
    io.emit('rockSmallOneMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })

  socket.on('rockSmallTwo',function(dataWeGot){ //wait for the castle message then react
    io.emit('rockSmallTwoMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })

  socket.on('plantOne',function(dataWeGot){ //wait for the castle message then react
    io.emit('plantOneMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('chest',function(dataWeGot){ //wait for the castle message then react
    io.emit('chestMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('archBig',function(dataWeGot){ //wait for the castle message then react
    io.emit('archBigMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('archSmall',function(dataWeGot){ //wait for the castle message then react
    io.emit('archSmallMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('coralTwo',function(dataWeGot){ //wait for the castle message then react
    io.emit('coralTwoMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('coralThree',function(dataWeGot){ //wait for the castle message then react
    io.emit('coralThreeMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('coralFour',function(dataWeGot){ //wait for the castle message then react
    io.emit('coralFourMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('coralFive',function(dataWeGot){ //wait for the castle message then react
    io.emit('coralFiveMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })
  socket.on('anchor',function(dataWeGot){ //wait for the castle message then react
    io.emit('ancorMoved',dataWeGot) //re-route the castle data and send out to everyone.
    console.log(dataWeGot);
  })


  //if you want to store the positions for later use, how do you do it?
  //spoiler alert: array?
  //check out my github on the persistant state branch.



})



var port = process.env.PORT || 3000
//makes the app listen for requests on port 3000
server.listen(port, function(){
  console.log("app listening on port: " + port)
})
