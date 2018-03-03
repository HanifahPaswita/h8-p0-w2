function balikKata(kata){
    var belakang = kata[kata.length-1]
    if (kata.length ===1){
      return kata
    }else {
      return belakang+balikKata(kata.slice(0,kata.length-1))
    }
  }
  console.log(balikKata('Hello Word and Coders'));
  console.log(balikKata('John Doe'));
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super'));

  