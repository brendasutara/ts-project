(()=>{
  //le decimos que sea lo que sea, que le saque el detector de ts.
  //muchos dicen que por favor no uses any
  // La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  //Después de un any, con el "as", le podemos decir que sea estrictamente tratado como un tipado específico
  //caso 1 as
  const rta = (myDynamicVar as string);
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
