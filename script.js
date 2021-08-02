//getting the html values by id
var hourShow = document.getElementById("hour");
var minShow = document.getElementById("min");
var secShow = document.getElementById("sec");


//reset the clock every second
var interval = setInterval(function(){
  var now = new Date();

  var hours = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();


//if the values are below 10 such as 9 then a zero shall be added so it become
//09 instead of 9.its looks better hehe
  if(hours < 10){
   hours = "0" + "" + hours;
  }
  if(min < 10){
   min = "0" + "" + min;
  }
  if(sec < 10){
   sec = "0" + "" + sec;
  }


//displaying the necessary values :D
  hourShow.innerHTML = hours;
  minShow.innerHTML = min;
  secShow.innerHTML = sec;

},1000);
