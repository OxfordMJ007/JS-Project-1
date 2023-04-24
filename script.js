// clock
setInterval(clockStart, 1000);
function clockStart() {
  let time = new Date();
  var hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let session = "AM";

  if (hrs >= 12) {
    hrs -= 12;
    session = "PM";
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  
  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
  document.getElementById("session").innerHTML = session;
}

// right msg box
let live = document.getElementById("rightMsgBox");
let hours = new Date().getHours();

if (hours >= 06 && hours < 11) {
  live.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
}
else if (hours >= 11 && hours < 15) {
  live.innerText = "LET'S HAVE SOME LUNCH !!";
}
else if (hours >= 15 && hours < 21) {
  live.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
}
else if (hours >= 21 || hours < 06) {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
}
else {
  live.innerText = "CLOSE YOUR EYES AND GO TO SLEEP..!!";
}

// button click
function setAlarm(){
  let morning = document.querySelector('#wakeUpTime');
  let afternoon = document.querySelector('#lunchTime');
  let evening = document.querySelector('#napTime');
  let night = document.querySelector('nightTime');

  // wake up
  let wake = morning.options[document.getElementById('wakeUpTime').selectedIndex];
  let wakeText = document.getElementById('wake_up_time');
  wakeText.innerText = wake.innerText;

  // lunch time
  let lunch = afternoon.options[document.getElementById('lunchTime').selectedIndex];
  let lunchText = document.getElementById('lunch_time');
  lunchText.innerText = lunch.innerText;

  // nap time
  let nap = evening.options[document.getElementById('napTime').selectedIndex];
  let napText = document.getElementById('nap_time');
  napText.innerText = nap.innerText;

  // night time
  let sleep = afternoon.options[document.getElementById('nightTime').selectedIndex];
  let sleepText = document.getElementById('night_time');
  sleepText.innerText = sleep.innerText;

  // left msg box and Image
  let test = document.getElementById("leftMsgBox");
  let img = document.querySelector("#image");
  let time = new Date();
  let hours = time.getHours();
  if (hours === parseInt(morning.value)) {
    test.innerText = "Good Morning..!";
    img.src = './Component 30 - 1.png'
  }
  else if (hours === parseInt(afternoon.value)) {
    test.innerText = "Good Afternoon";
    img.src = './Component 31 – 1.png'
  }
  else if (hours === parseInt(evening.value)) {
    test.innerText = "Good Evening";
    img.src = './lunch_image.png'
  }
  else if (hours === parseInt(night.value)) {
    test.innerText = "Good night";
    img.src = './Component 32 – 1.svg'
  }
  else {
    console.log("default value");
  }

}   

// party time
const button = document.getElementById("myButton");
//register a function that will be called the button is "party time!"
button.addEventListener("click", function(){
  button.innerText = "Party time!";
  //use the settimeout function to change the text of the button back tp " set alaram"
  setTimeout(function() {
    button.innerText = "SET ALARM";
  },1000);
});