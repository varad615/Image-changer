function GFG_Fun() {
    var x = document.getElementById("input").value;
    var inputval;
    if (x == "") {
      document.getElementById("myImg").src = "../images/0.png";
      inputval = "";
    } else if (x == 1) {
      document.getElementById("myImg").src = "../images/1.png";
      inputval = "welcome";
    } else if (x == 2) {
      document.getElementById("myImg").src = "../images/2.png";
      inputval = "hello";
    } else if (x == 3) {
      document.getElementById("myImg").src = "../images/3.png";
    } else if (x == 4) {
      document.getElementById("myImg").src = "../images/4.png";
    } else if (x >= 5) {
      document.getElementById("myImg").src = "../images/corona.png";
    }
  
    document.getElementById("change").innerHTML = inputval;
  }
  