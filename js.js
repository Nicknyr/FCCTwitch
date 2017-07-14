$(document).ready(function(){

 var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "food", "monstercat", "saltybet"];

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data){
    //console.log(data);
    if(data.stream === null){
      $('#FCCStatus').html('Free Code Camp is currently offline');
    }
    else {
      $('#FCCStatus').html('Free Code Camp is currently streaming');
    }
});

for(var i = 0; i < streamers.length; i++){
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] +'?callback=?').done(function(data2) {
        //console.log(data2);


        if(data2.stream != null){
          $('#channelsOnline').prepend("<img src=" + data2.stream.channel.logo + ">" + "<h3><a href=" + data2.stream.channel.url + "</h3><ul><li>" + data2.stream.channel.display_name + " is online now <a/></li><li>followers: " + data2.stream.channel.followers + "</li><li> viewers: " + data2.stream.viewers + "</li><li> game: " + data2.stream.channel.game + "</li>")
          }
        else {
          // Separates name of channel from the rest of the URL
          var channelUrl = data2._links.channel;
          var channelName = channelUrl.match(/([^\/]*)\/*$/)[1];

          $('#channelsOffline').prepend("<a href=" + data2._links.channel + "><h3>" + channelName + " is offline" + "</h3>")

        }

    });

  };

for(var i = 0; i < streamers.length; i++){
  $.getJSON('https://wind-bow.gomix.me/twitch-api/users?login=' + streamers[i] + 'callback=?').done(function(data3){
      console.log(data3);
  });
};

  $('#Online').click(function(){
    $('#channelsOffline').hide();
    $('#channelsOnline').show();
  });

  $('#Offline').click(function(){
    $('#channelsOnline').hide();
    $('#channelsOffline').show();
  });

  $('#All').click(function(){
    $('#channelsOnline').show();
    $('#channelsOffline').show();
  });



});
