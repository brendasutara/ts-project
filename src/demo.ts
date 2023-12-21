(async () => {
  const myCart = [];
  let products = []; // Cambiado a let para permitir la mutación del array
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products = products.concat(data); // Asignar el resultado de la concatenación a la variable products
  }

  function getTotal() {
    let total = 0; // Cambiado a let para permitir la modificación de la variable
    for (let i = 0; i < products.length; i++) { // Corregido el método length y la iteración
      total += products[i].prize; // Corregido 'prize' a 'price'
    }
    return total;
  }

  function addProduct(index) {
    if (getTotal() < limit) { // Corregido el llamado a getTotal() y el operador de comparación
      myCart.push(products[index]);
    }
  }

  await getProducts();
  await addProduct(1); // Corregido el nombre de la función addProduct
  await addProduct(2); // Corregido el nombre de la función addProduct
  const total = getTotal();
  console.log(total);

  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  };
  const rta = person.name + ' ' + person.lastName + ' ' + limit; // Concatenación adecuada para mostrar el nombre y el límite
  console.log(rta);
})();
