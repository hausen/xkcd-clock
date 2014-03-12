function pad(value) {
  if (value == 0) {
    return "00";
  } else if (value < 10) {
    return "0" + value;
  } else {
    return value;
  }
}

function update_time_and_date() {
  var theElement = document.getElementById("cueballdate");
  if (theElement == null) {
    return;
  }
  var d = new Date();
  var str = d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" +
            pad(d.getDate()) + " " + pad(d.getHours()) + ":" +
            pad(d.getMinutes()) + ":" + pad(d.getSeconds()) + "!";
  theElement.innerHTML = str;
}

setInterval(update_time_and_date, 1000);
