var user = prompt("What's your name?").toUpperCase();

switch(user) {
  case 'NAME':
    console.log("clever");
    break;
  case 'PHILIP':
    console.log("No, that's me");
    break;
  case 'DRAGON':
    console.log("That's not a name");
    break;
  default:
    console.log("I don't think that's your name");
};
