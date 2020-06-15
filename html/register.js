function show() {
    var x = document.getElementById("Password");
    var y = document.getElementById("CPassword");

    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text"
    } else {
      x.type = "password";
      y.type = "password"
    }
  }
