// FLIGHT MANAGEMENT AND ADMIN STUFF

let flights = JSON.parse(localStorage.getItem("flights")) || [
  { route: "LHR → JFK", aircraft: "B777", dep: "18:30", arr: "22:10" }, // these are random stuff btw
  { route: "LHR → DXB", aircraft: "A380", dep: "14:00", arr: "23:00" }
];

const flightSelect = document.getElementById("flightSelect");
const flightList = document.getElementById("flightList");

function saveFlights() {
  localStorage.setItem("flights", JSON.stringify(flights));
  renderFlights();
  updateBookingFlights();
}

function renderFlights() {
  flightList.innerHTML = "";
  flights.forEach((f, i) => {
    flightList.innerHTML += `
      <div class="admin-flight">
        <span>${f.route} (${f.aircraft}) | ${f.dep} → ${f.arr}</span>
        <button onclick="deleteFlight(${i})">Delete</button>
      </div>
    `;
  });
}

function updateBookingFlights() {
  flightSelect.innerHTML = `<option value="">Choose flight</option>`;
  flights.forEach(f => {
    flightSelect.innerHTML += `
      <option value="${f.route}|${f.aircraft}|${f.dep}|${f.arr}">
        ${f.route} (${f.aircraft}) | ${f.dep} → ${f.arr}
      </option>
    `;
  });
}

function deleteFlight(index) {
  flights.splice(index, 1);
  saveFlights();
}

document.getElementById("addFlightBtn").addEventListener("click", () => {
  const route = document.getElementById("adminRoute").value;
  const aircraft = document.getElementById("adminAircraft").value;
  const dep = document.getElementById("adminDeparture").value;
  const arr = document.getElementById("adminArrival").value;

  
  if (!route || !aircraft || !dep || !arr) {
    alert("Fill all fields!");
    return;
  }

  flights.push({ route, aircraft, dep, arr });
  saveFlights();
  
  
  document.getElementById("adminRoute").value = "";
  document.getElementById("adminAircraft").value = "";
  document.getElementById("adminDeparture").value = "";
  document.getElementById("adminArrival").value = "";
});

renderFlights();
updateBookingFlights();
