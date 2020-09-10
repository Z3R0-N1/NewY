var countDownDate = new Date("sep 11, 2020 6:00:00").getTime();

var x = setInterval(function() {
 var now = new Date().getTime();
 var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("body").style.backgroundColor = " #d2f6c5 ";
    document.querySelector(".change").style.backgroundColor = " #28df99";
    document.querySelector("#demo").style.fontFamily = " 'Slabo 27px', serif ";
    document.getElementById("demo").innerHTML = "Happy New Year y'all 🌻";
    document.querySelector("title").innerHTML = "☀️ HNY-CD";

  }
}, 1000);