const button = document.getElementById("button");
const input = document.querySelector("#input").value;

const apiip = new Apiip();

const ui = new UI();

document.addEventListener("DOMContentLoaded", getIpAddress);

button.addEventListener("click", (e) => {
  const input = document.querySelector("#input").value;

  if (input !== "") {
    getNewIp(input);
  } else {
    return;
  }
});

function getIpAddress() {
  apiip
    .getIp()
    .then((res) => {
      initMap(res);

      ui.paint(res);
    })
    .catch((err) => console.log(err));
}

function getNewIp(input) {
  apiip
    .getNewIp(input)

    .then((res) => {
      var container = L.DomUtil.get("map");
      if (container != null) {
        container._leaflet_id = null;
      }
      initMap(res);
      ui.paint(res);
    })
    .catch((err) => console.log(err));
}

function initMap(res) {
  const lat = res.latitude;
  const lng = res.longitude;
  var map = L.map("map").setView([lat, lng], 13);
  var marker = L.marker([lat, lng]).addTo(map);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  console.log(res);
}
