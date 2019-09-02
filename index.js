$(function(){
  var members = 5;
  var meetings = 0;
  var codingMessage = "CODING CLUB";
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  var min = d.getMinutes();

  // if(day == 6 && hour == 12 && min == 34){
  //   meetings++;
  // }
  typewrite(codingMessage);
  $("#navH1").click(function(){
    typewrite(codingMessage);
  });
  var $head = $("#calendar").contents().find("head");

  $head.append($("<link/>", {
      rel: "stylesheet",
      href: "calendar.css",
      type: "text/css"
  }));
  $(".item-title").click(function(){
    var target = $(this).parent().find(".item-content");
    target.toggle();
  });
  $("#clubMembers").html(members);
  $("#meetingCount").html((meetings >= 1) ? meetings : 0);
});

function typewrite(word){
  var i = 0;
  var whole = "";
  setInterval(
    function(){
      if( i < word.length ){
        whole += word.charAt(i);
        $("#navH1").html(whole);
        i++;
      }
    },200)
}

// var whole = "";

// for( var i = 0; i < word.length; i++){
//   whole += word.charAt(i);
//   $("#navH1").html(whole);
// }

