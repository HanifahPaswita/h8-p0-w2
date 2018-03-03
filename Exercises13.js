function xo(str){
  var i=0;
  var j=0;
  for (var x=0;x<str.length;x++){
    if(str[x] ==='x'){
      i++;
    }else if(str[x] === 'o'){
      j++;
    }
  }
  if(i === j){
    return true;
      }else{
    return false;
  }   
}
  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo'));
  console.log(xo('oxo'));
  console.log(xo('xxxooo'));
  console.log(xo('xoxooxxo'));

