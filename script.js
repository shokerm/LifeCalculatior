// user alert message
var year = +prompt("enter your birthday year ");
var month = parseInt(prompt("enter your birthday month "));
var day = +prompt("enter your birthday day ");
//

// Set the date we're counting down to
var countDownDate = new Date(year+100,month,day).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  
  var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)% 365 % 30 % 24)

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(months > 0){
    years-=1;
    months = 12 - months;

  }
  // Display the result in the element with id="header"
  document.getElementById("header").innerHTML = "Years:" + years+" " +"Months:"+ months+" " +"Days:" + days+" " + "Hours:" + hours+" " +"Minutes:"+ minutes+" "  +"Seconds:"+seconds;

  
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("header").innerHTML = "EXPIRED";
  }
}, 1000);
