app.filter('sort', function() {  //this code will work for other filters. Just change the word "sort".
  return function (input, scope) {
    if (input !== null) {
      return input.split("").sort().join("");
    }
  }
});