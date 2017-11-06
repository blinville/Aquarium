
var socket = io.connect(); //init the socket connections

//make sure overything went ok
socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})



$(function(){

/*+~+~+~+~+~ CASTLE +~+~+~+~+~+~+~+~+~+ */
  $( ".castle" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY-event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX-event.offsetY //""
      }
      socket.emit('castle', dataToSend); // send the data up to the server

    }
});

// wait for a castle moved message and react accordingly
socket.on('castleMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.castle').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ plant tall circle +~+~+~+~+~+~+~+~+~+ */
  $( ".plantTallCircle" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY - event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('plantTallCircle', dataToSend); // send the data up to the server

    }
});

// wait for a castle moved message and react accordingly
socket.on('plantTallCircleMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.plantTallCircle').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */

/*+~+~+~+~+~ coralMedium +~+~+~+~+~+~+~+~+~+ */
  $( ".coralMedium" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY - event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('coralMedium', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('coralMediumMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.coralMedium').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ tal rock 1 +~+~+~+~+~+~+~+~+~+ */
  $( ".rockTallOne" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('rockTallOne', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('rockTallOneMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.rockTallOne').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ rock fat medium +~+~+~+~+~+~+~+~+~+ */
  $( ".rockFatMedium" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('rockFatMedium', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('rockFatMediumMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.rockFatMedium').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ rock medium dark +~+~+~+~+~+~+~+~+~+ */
  $( ".rockMediumDark" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('rockMediumDark', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('rockMediumDarkMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.rockMediumDark').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ rock small one +~+~+~+~+~+~+~+~+~+ */
  $( ".rockSmallOne" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('rockSmallOne', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('rockSmallOneMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.rockSmallOne').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */

/*+~+~+~+~+~ rock small two +~+~+~+~+~+~+~+~+~+ */
  $( ".rockSmallTwo" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('rockSmallTwo', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('rockSmallTwoMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.rockSmallTwo').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ plant one +~+~+~+~+~+~+~+~+~+ */
  $( ".plantOne" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('plantOne', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('plantOneMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.plantOne').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ Chest +~+~+~+~+~+~+~+~+~+ */
  $( ".chest" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('chest', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('chestMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.chest').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ arch big +~+~+~+~+~+~+~+~+~+ */
  $( ".archBig" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('archBig', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('archBigMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.archBig').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ arch small +~+~+~+~+~+~+~+~+~+ */
  $( ".archSmall" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('archSmall', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('archSmallMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.archSmall').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ coral2 +~+~+~+~+~+~+~+~+~+ */
  $( ".coralTwo" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('coralTwo', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('coralTwoMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.coralTwo').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ coral3 +~+~+~+~+~+~+~+~+~+ */
  $( ".coralThree" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('coralThree', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('coralThreeMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.coralThree').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ coral4 +~+~+~+~+~+~+~+~+~+ */
  $( ".coralFour" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('coralFour', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('coralFourMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.coralFour').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ coral4 +~+~+~+~+~+~+~+~+~+ */
  $( ".coralFive" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('coralFive', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('coralFiveMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.coralFive').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
/*+~+~+~+~+~ anchor +~+~+~+~+~+~+~+~+~+ */
  $( ".anchor" ).draggable({
    stop: function( event, ui ) { //add a function to be execturdn when we stop dragging
      console.log(event);

      var dataToSend = { //pack up some data to send to the server
        top: event.pageY- event.offsetY, //get the current Y position of the object - the offset from the drag and drop
        left: event.pageX- event.offsetX //""
      }
      socket.emit('anchor', dataToSend); // send the data up to the server
      }
});

// wait for a castle moved message and react accordingly
socket.on('anchorMoved', function(dataWeGot){
  console.log(dataWeGot);
  $('.anchor').css(dataWeGot); //move to the top/left css position that was sent.
})

/*+~+~+~+~+~ NEXT THING +~+~+~+~+~+~+~+~+~+ */
})
