$(document).ready(function(){

 var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

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
        console.log(data2);

        // Gets web address of each channel
        //$('#channels').prepend("<p>" + data2._links.channel + "</p>");

        /* Separates name of channel from the rest of the URL
        var channelName = data2._links.channel;
        console.log(channelName.match(/([^\/]*)\/*$/)[1]);
        */

        if(data2.stream != null){
        $('#channelsOnline').prepend("<a href=" + data2.stream.channel.url + "><h3>" + data2.stream.channel.display_name + " is online now" + "</h3>")
        }
        else {
          // Separates name of channel from the rest of the URL
          var channelUrl = data2._links.channel;
          var channelName = channelUrl.match(/([^\/]*)\/*$/)[1];

          $('#channelsOffline').prepend("<p>" + channelName + " is currently offline" + "</p>")

        }

    });

  };

});
