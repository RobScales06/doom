
//-----//-----//-----//-----//

//for(var i = 0; i < 10; i++) {
//    document.body.innerHTML += '<div></div>'
// }

// Set the date we're counting down to
var countDownDate = new Date("Oct 31, 2023 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "Cover releasing in " + days + " Days " + hours + ":"
  + minutes + ":" + seconds + "";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "WATCH THE COVER NOW";
  }
}, 1000);


var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
});
