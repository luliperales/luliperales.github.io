var madLibs = function() {
  var sentence = document.getElementById("sentence");
  var color = document.getElementById(color).value;
  var color = document.getElementById(animal).value;
  var color = document.getElementById(adverb).value;
  var color = document.getElementById(place).value;
  sentenceDiv.innerHTML = "The " + color + " " + animal + " lives " + adverb + " in " + place;
}

$(document).ready(function(){
  $('#lib-button').click(function(){
        madLibs();
    });
});

var shown = false;

$("#container").click(function() {
    if (shown == false) {
    $(".sentence").show();
    shown = true;
    } else {
    $(".sentence").hide();
    shown = false;
    }
});
