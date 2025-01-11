"use strict";

let bands = [
  {
    band: "Earth, Wind & Fire",
    genre: "Jazz & R&B",
    formed: "1969",
    active: true,
  },

  {
    band: "Green Day",
    genre: "Rock",
    formed: "1987",
    active: true,
  },
];

function render(bands) {
  for (let i = 0; i < bands.length; i++) {
    let active;
    const band = bands[i];
    if (band.active) {
      active = "Active";
    } else {
      active = "Not Active";
    }
    let bootstrap1 = `
<li class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${bands[i].band}</h5>
   <h6 class="text-body-secondary">${bands[i].genre}</h6>
    <p class="card-text">${bands[i].formed}</p>
    <p class="card-text">${bands[i].active}</p>

  </div>
</div>
</li>

`;
    document.getElementById("band-1").innerHTML += bootstrap1;
  }
}

render(bands);
