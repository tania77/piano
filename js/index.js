var notes = ['c1', 'c1s', 'd1', 'd1s', 'e1', 'f1', 'f1s', 'g1', 'g1s', 'a1', 'a1s', 'b1', 'c2'];
//var keys = {};
var piano = document.getElementById('piano');
var enlace = "https://cdn.rawgit.com/pffy/mp3-piano-sound/master/mp3/a1.mp3";
function sonar(pos) {
  var nota = enlace.substring(0,enlace.lastIndexOf('/')+1)+ notes[pos]+ '.mp3';
  console.log(nota);
  var audio = new Audio(nota);
  audio.play();
}
