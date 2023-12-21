(()=> {
  let isEnable = true;
  // no puedo reasignar otro tipo de número
  // isEnable = 'as';
  // isEnable = 1212;
  isEnable = false;

  //tipado de manera explicita
  let isNew: boolean = false;
  console.log ('isNew', isNew);
  isNew = true;
  console.log ('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;

})();
