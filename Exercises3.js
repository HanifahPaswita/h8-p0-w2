var nama='Hanifah';
var peran='';


if (nama ==''){
    console.log('Nama harus diisi');
}
else if(peran==''){
  console.log ('Halo'+' '+nama+' '+'Pilih peranmu untuk memulai game ini!')
}
else if(peran == 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia,'+nama);
    console.log ('Halo'+' '+peran+' '+nama);
    console.log ('kamu dapat menyerang dengan senjatamu!');
}
else if(peran == 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia,'+nama);
    console.log ('Halo'+' '+peran+' '+nama);
    console.log ('kamu akan membantu temanmu yang terluka.');
}
else if(peran == 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia,'+nama);
    console.log ('Halo'+' '+peran+' '+nama);
    console.log ('ciptakan keajaiban yang membantu kemenanganmu!');
}

