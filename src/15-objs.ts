(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = [];

  //Ahora como array function
  const addProduct = (data: Product) => {
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
  //para agregar hay que si o si respetar la estructura del objeto.
  products.push({
    title: 'Pro3',
    createdAt: new Date(1992, 1, 2),
    stock: 3,
    size: 'S'
  });
})();
