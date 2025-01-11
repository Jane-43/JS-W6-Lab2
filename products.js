let supermarkets = [
  {
    name: "Grapes",
    category: "Produce",
    price: 4.29,
    inStock: true,
  },

  {
    name: "Strawberry Yogurt",
    category: "Dairy",
    price: 2.15,
    inStock: false,
  },
];

function render(supermarkets) {
  for (let i = 0; i < supermarkets.length; i++) {
    let active;
    const supermarket = supermarkets[i];
    if (supermarket.inStock) {
      inStock = "YES";
    } else {
      inStock = "NO";
    }

    let bootstrap3 = `
  <li class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${supermarkets[i].name}</h5>
    <p class="card-text">${supermarkets[i].category}</p>
    <p class="card-text">${supermarkets[i].price}</p>
    <p class="card-text">${supermarkets[i].inStock}</p>

  </div>
</div>
</li>

  `;
    document.getElementById("supermarket").innerHTML += bootstrap3;
  }
}

render(supermarkets);
