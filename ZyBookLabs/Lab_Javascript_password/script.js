// Your solution goes here
function isStrongPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (password.indexOf("password") != -1) {
    return false;
  }

  for (let i = 0; i < password.length; i++) {
    let char = password.charCodeAt(i);
    if (char >=65 && char <=90) {
      return true;
    }
  }
  return false;
}
