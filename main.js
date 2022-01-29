var value=prompt("あなたの名前を教えてください。ニックネームでも大丈夫です!");
var textbox_element = document.getElementById('add');

textbox_element.innerHTML="ようこそ、"+value+"さん";


function background_black() {
  document.body.style.backgroundColor = '#000000';
  
}
function background_white() {
  document.body.style.backgroundColor ='#eee';
}

window.onload = function() {
  var bgBlack = document.getElementById('black');
  var bgWhite = document.getElementById('white');
  bgBlack.addEventListener('click', background_black, false);
  bgWhite.addEventListener('click', background_white, false);
}

