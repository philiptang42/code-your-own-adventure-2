var user = prompt("What's your name?").toUpperCase();
var time = 'night'
var day = 'weekend'

switch(user) {
  case 'NAME':
    if(time === 'morning' || day === 'weekend') {
      console.log("clever");
    } else {
      console.log("ok");
    }
    break;
  case 'PHILIP':
    if(time === 'night' && day === 'weekend') {
      console.log("No, that's me");
    } else {
      console.log("You are an impostor");
    }
    break;
  case 'DRAGON':
    if(time === 'morning' && day === 'weekday') {
      console.log("That's not a name");
    } else {
      console.log("Nope.");
    }
    break;
  default:
    console.log("I don't think that's your name");
};
