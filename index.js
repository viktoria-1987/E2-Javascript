const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


for(let i = 0; i < pizzas.length; i++){
  if(pizzas[i].id % 2 !== 0){
    console.log(pizzas[i]);
  }  
}

let menor = false

pizzas.forEach(pizza => {
  if (pizza.precio < 600 && menor === false) {
    console.log("Hay una pizza de menos de $600");    
    menor = true;
  }
});

//El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizza =>{
  console.log(pizza.nombre, pizza.precio);
})

// toodos los ingredientes de cada pizza. (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo)

for(let i = 0; i < pizzas.length; i++){
  console.log(pizzas[i].nombre);
  for(let j = 0; j < pizzas[i].ingredientes.length; j++){
    console.log(pizzas[i].ingredientes[j]);
  }

}


