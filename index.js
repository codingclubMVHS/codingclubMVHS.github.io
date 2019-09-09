$(function(){
  var members = 5;
  var meetings = 0;
  var codingMessage = "CODING CLUB";

  $("#home_h1_heading").addClass("animated fadeInRight");
  $("#home_pContainer").addClass("animated slideInUp");
  var animationInterations = $(".pContainer").children().length;

  meetings = meetingCount();
  typewrite(codingMessage);
  $("#navH1").click(function(){
    typewrite(codingMessage);
  });

  $(".item-title").click(function(){
    var target = $(this).parent().find(".item-content");
    target.toggle();
  });
  $("#clubMembers").html(members);
  $("#meetingCount").html(meetings);
});

function typewrite(word){
  var i = 0;
  var whole = "";
  setInterval(
    function(){
      if( i < word.length ){
        whole += word.charAt(i);
        $("#navH1").html("{ " + whole + " }");
        i++;
      }
    },200)
}

function meetingCount(){
  var initD = new Date("09/04/2019");
  var d = new Date();
  var int_time = initD.getTime();
  var time = d.getTime();
  var num_week = Math.round((time - int_time) / (1000*60*60*24*7));
  console.log(num_week);
  var meetingCount = 0;
  for( i = 0 ; i < num_week; i++){
    meetingCount++;
  }
 
  return meetingCount;
}
