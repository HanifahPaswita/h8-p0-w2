function konversiMenit(menit){
    var detik= menit%60;
    if(detik<10){
      detik='0'+detik
    }
    var menit= Math.floor(menit/60)
    return menit+':'+detik
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))

