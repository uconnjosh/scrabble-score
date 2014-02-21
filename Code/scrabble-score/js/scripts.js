var scrabbleScore = function(word) {
  var array1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  var array2 = ["d", "g"];
  var array3 = ["b", "c", "m", "p"];
  var array4 = ["f", "h", "v", "w", "y"];
  var array5 = ["k"];
  var array8 = ["j", "x"];
  var array10 = ["q", "z"];
  var score = 0;
  
  for (var i = 0; i < word.length; i++) {
    
    array1.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 1;
      }
    });
    array2.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 2;
      }
    });
    array3.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 3;
      }
    });
    array4.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 4;
      }
    });
    array5.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 5;
      }
    });
    array8.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 8;
      }
    });
    array10.forEach(function(element){
      if (word.charAt(i) === element) {
        score += 10;
      }
    });  
  };
  return score;
};

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    var word = $("input#word").val();
    var result = scrabbleScore(word);
    $("#result").text(result);
    event.preventDefault();
  });
});

