(()=>{
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla ba bla bl s asasas";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  //Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar seguido de llaves ${}
  // y escribir lo que queremos concatenar dentro de esas llaves:
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = '';
})();
