var originalString = function(string) {
  var newString = string.replace(/[^a-z]+/gi, "").toLowerCase();
    if (newString){
      return (newString)
    } else {
      return false;
    }
}

var mathString = function(newString) {
  var lengthString = newString.length;
  var sqrtString = Math.sqrt(lengthString);
    if (mathString){
      return (3)
    } else {
      return false
    }
}
