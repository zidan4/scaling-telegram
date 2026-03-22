type Pizza = {
  name: string
  price: number
}

const menu: Array<Pizza> = [  // Pizza[] or Array<Pizza>
  { name: "maghareta", price: 30 },
  { name: "peperoni", price: 35 },
  { name: "hawaii", price: 40 }
]

const cashAva = 100;
const pizzaOrder = [ ];

function addOrder( pizza:object ) {
  pizzaOrder.push(pizza)
}

addOrder({name: "italian", price: 45})
