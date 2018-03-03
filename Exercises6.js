//soal nomer 1.Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var index= 2;
while(index <=20) {
  console.log(index+'-'+' '+'I love coding'); 
  index+=2;
}
console.log('LOOPING KEDUA')
var index= 20;
while(index>0) {
  console.log(index+'-'+' '+'I will become fullstack developer'); 
  index-=2;
}
     
//soal nomer 2.Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(var index = 1; index <=20; index++) {
  console.log(index+'-' +' I love coding ');
}

console.log('LOOPING KEDUA');
for(var index= 20; index > 0; index--) {
  console.log(index+'-'+' I will become fullstack developer');
}


//soal nomer 3.Angka Ganjil dan Genap
console.log('GANJIL-GENAP')
for(var index = 1; index <=100; index++) {
  if (index%2==0){
  console.log(index+' GENAP');
    }else{
  console.log(index+' GANJIL');
  }
}

console.log('PERTAMBAHAN 2')
for(var index = 1; index <=100; index+=2) {
  if (index%3==0){
  console.log(index+' KELIPATAN 3');
    }else{
  console.log(index+' ');
  }
}

console.log('PERTAMBAHAN 5')
for(var index = 1; index <=100; index+=5) {
  if (index%6==0){
  console.log(index+' KELIPATAN 6');
    }else{
  console.log(index+' ');
  }
}

console.log('PERTAMBAHAN 9')
for(var index = 1; index <=100; index+=9) {
  if (index%10==0){
  console.log(index+' KELIPATAN 10');
    }else{
  console.log(index+' ');
  }
}

