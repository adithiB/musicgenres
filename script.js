const genres = [" Pop", " Folk", " Hip Hop", " Rock", " Heavy Metal", "  R&B", " Classical", "  Country", "  EDM", " Jazz"];
const colours = ["aquamarine", "magenta", "coral", "lime", "violet", "cyan", "darkorange", "lightgreen", "yellow", "orangered" ];
var speed = 70;

document.addEventListener("DOMContentLoaded", function(event) { 
  printGenres();
  typingAction("There are millions of other genres that exist", "t2");
  typingAction("Genres are often subjective & controversial and some genres may overlap", "t3");

});

function printGenres(){
  var time1 = 2500;
  var time2 = time1+genres[0].length*speed+800;
  type("The most popular genres are", "t1");  
  
  for (let i = 0; i<20000 ; i++){
    setTimeout(function(){typeGenres(i%10);}, time1);
    setTimeout(function(){deleteGenres(i%10);}, time2);
    time1+=genres[i%10].length*2*speed+800;
    time2+=genres[i%10].length*speed + genres[(i+1)%10].length*speed+800;
  }
}

function typingAction(sentence, clicked_id){
  time3 = 0;
  time4 = time3+sentence.length*118;
  for(let j=0; j<2000; j++){
    setTimeout(function(){type(sentence, clicked_id)}, time3);
    setTimeout(function(){untype(sentence, clicked_id)}, time4);
    time3+=(sentence.length*118*2)+1000;
    time4+=(sentence.length*118*2)+1000;
  }
  
}

function linkVisited(clicked_id) {
  document.getElementById(clicked_id).innerHTML="<p style='text-decoration: none; color: skyblue; font-size: 1.01vw; font-style: italic; font-weight: lighter;'>You have visited this link</p>"
}

function type(sentence, clicked_id, i=0) {
  if (i < sentence.length) {
    document.getElementById(clicked_id).insertAdjacentHTML('beforeend', sentence.charAt(i));
    i++;
    setTimeout(function(){type(sentence, clicked_id, i)}, speed);
  }
}

function untype(sentence, clicked_id, i=0) {
  if (i < sentence.length) {
    document.getElementById(clicked_id).innerHTML = sentence.substring(0, sentence.length-i-1);
    i++;
    setTimeout(function(){untype(sentence, clicked_id, i)}, speed);
  }
}

function typeGenres(i, char_i=0){
  if (char_i < genres[i].length) {
    document.getElementById("t1").innerHTML += genres[i].charAt(char_i).fontcolor(colours[i]);
    char_i++;
    setTimeout(function(){typeGenres(i, char_i);}, speed);
  }
}

function deleteGenres(i, char_i=0){
  if (char_i < genres[i].length) {
    document.getElementById("t1").innerHTML = "The most popular genres are"+(genres[i].substring(0, (genres[i].length)-char_i-1));
    char_i++;
    setTimeout(function(){deleteGenres(i, char_i);}, speed);
  }
}