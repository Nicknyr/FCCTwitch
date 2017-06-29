$(document).ready(function(){

 var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


for(var i = 0; i < streamers.length; i++){
 $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + streamers[i] +'?callback=?', function(data) {
    console.log(data);

  });

  };
  
});
