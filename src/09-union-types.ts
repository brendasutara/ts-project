(()=>{
  //Máximo soporta de 2 a 3 pero depende de tu caso de uso
  let userId: string | number;
  userId = 1212;
  userId = 'brenda';

  function greeting(myText: string | number) {
    if (typeof myText === 'string'){
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('Brenda Sutara');
  greeting(12.121212121212121212121);
})();
