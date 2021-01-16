var submit_form = new Array();

users = Array.from(JSON.parse(localStorage.getItem('users')));

function validation() {
  let username = document.getElementById("username").value;
  var index = 0;
  if (users != null) {
    let exists = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        exists = true;
        index = i;
        break;
      }
    }
    if (!exists) {
      window.alert("You must Sign Up first!");
      return false;
    }
  }
  else {
    window.alert("You must Sign Up first!");
    return false;
  }

  username_validation();
  password_validation(index);
  for (var i = 0; i < submit_form.length; i++) {
    if (submit_form[i] == false)
      return false;
  }
  return true;
}

function username_validation() {

  var username_pattern = new RegExp(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i);
  var username = document.getElementById("username").value;
  
  if (username.match(username_pattern)) {
    document.getElementById("username").setAttribute("style", "border:1px green solid ");
    submit_form[0] = true;
  }
  else {
    window.alert("Incorrect username")
    document.getElementById("username").setAttribute("style", "border:1px red solid ");
    submit_form[0] = false;
  }
}
function password_validation(index) {

  var password_pattern = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i);
  var password = document.getElementById("password").value;

  if(users[index].password != password) {
    window.alert("Incorrect password")
    document.getElementById("password").setAttribute("style", "border:1px red solid ");
    submit_form[1] = false;
  }

  if (password.match(password_pattern)) {
    document.getElementById("password").setAttribute("style", "border:1px green solid ");
    submit_form[1] = true;
  }
  else {
    window.alert("Incorrect password")
    document.getElementById("password").setAttribute("style", "border:1px red solid ");
    submit_form[1] = false;
  }
}
