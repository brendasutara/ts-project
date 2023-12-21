import { addProduct, calcStock, products } from "./product.service";

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
const total = calcStock();
console.log(total);
