//soal nomer 1.Menyusun Barisan Bintang
for(rows1=0;rows1<5;rows1++){
    console.log("*")
}


//soal nomer 2.Menyusun Barisan Bintang Dengan Nested Looping
var i=1;
for(var i=0;i<5;i++){
    var rows2="";
for(var j=0; j<5;j++){
    rows2+="*";
}
console.log(rows2);
}

//soal nomer 3.Menyusun Barisan Tangga Bintang Dengan Nested Looping
var i=1;
for(var i=0;i<5;i++){
    var rows3="";
for(var j=0; j<=i;j++){
    rows3 +="*";
}
console.log(rows3);
}

