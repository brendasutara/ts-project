(()=>{
  //uso exclusivo de TypeScript, creamos nuestro propio tipo, nuestro alias
  type UserID = string | number | boolean;
  let userId: UserID;

  //Literal types para dar opciones
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
  }

  greeting(111, 'S');
})();
