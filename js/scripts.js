$(document).ready(function(){
  $("form#puzzle").submit(function(event) {
    var input = $("input#stringInput").val();
    var vowels = ["a","e","i","o","u"];
    var output = "";

    for( var index = 0; index<string.length; index+=1 ){
      var match = false;
      var character = string[index];
      for ( var j = 0; j < vowels.length; j+=1){

        if (character === vowels[j]){
          match = true;
          break;
        }
      }

      if (match)
      {
        output += "-";
      }
      else {
        output += character;
      }
    }

    alert(output);
    event.preventDefault();
  });
});
