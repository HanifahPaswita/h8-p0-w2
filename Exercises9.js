//Tugas 1
function shoutOut(){
    var shoutOut='Halo Function!'
    return shoutOut;
}
 console.log(shoutOut()) ;



//Tugas 2
var HasilPerkalian = function(num1,num2) {
    return num1 * num2
  }
  var num1=5;
  var num2=6;
  
  console.log(HasilPerkalian(num1,num2));

//Tugas 3
function processSentence(name,age,address,hobby){
    return 'Nama saya '+name+','+' umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!';
}
var name='Agus';
var age=30;
var address='Jln.Malioboro, Yogyakarta';
var hobby='gaming';

var fullSentence=processSentence(name,age,address,hobby);
console.log(fullSentence);

