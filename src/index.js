var input = document.querySelector('.colorvalue');
var r = document.querySelector('.r');
var g = document.querySelector('.g');
var b = document.querySelector('.b');
input.addEventListener('keyup',()=>{
  r.innerHTML = "";
  var v = input.value;
  var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;
  if(v.length === 4 || v.length === 7){
    var output = rex.exec(v);
    if(output === null){
      r.innerHTML = "Not A Valid Colour!";
    }else{
      r.innerHTML = `R: ${getColorValue(output[1])}`;
      g.innerHTML = `G: ${getColorValue(output[2])}`;
      b.innerHTML = `B: ${getColorValue(output[3])}`;
      document.body.style.backgroundColor = v;
    }
  }else{
r.innerHTML = 'Not A Valid Colour!';
  }
});

function getColorValue(hex){
  if(hex.length === 1){
    hex = hex+hex;
  }
  return parseInt(hex,16);
}