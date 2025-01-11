let restaurants = [
  {
    name: "Life of Pie Pizza",
    cuisine: "Pizza",
    location: "Oregon",
    rating: 4.6,
  },

  {
    name: "Scratch Farm Kitchen",
    cuisine: "Mexican",
    location: "Louisiana",
    rating: 4.7,
  },
];
function render(restaurants) {
  for (let i = 0; i < restaurants.length; i++) {
    let active;
    const restaurant = restaurants[i];
    if (restaurant.active) {
      active = "Active";
    } else {
      active = "Not Active";
    }

    let bootstrap2 = `
  <li class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${restaurants[i].name}</h5>
    <p class="card-text">${restaurants[i].cuisine}</p>
    <p class="card-text">${restaurants[i].location}</p>
    <p class="card-text">${restaurants[i].rating}</p>

  </div>
</div>
</li>

  `;

    document.getElementById("rest").innerHTML += bootstrap2;
  }
}

render(restaurants);
