(()=>{
  //TypeScript
  const login = (data: {email:string, password: number})=> {
    console.log(data.email, data.password);
  }

  login({
    email: 'brenda@email.com',
    password: 12345
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  //Ahora como array function
  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Pro2',
    createdAt: new Date(1995, 2, 2),
    stock: 7,
    size: 'XL'
  });
  console.log(products);
})();
