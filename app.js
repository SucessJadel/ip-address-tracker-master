const apiip = new Apiip();

const ui = new UI();

document.addEventListener("DOMContentLoaded", getIpAddress);

function getIpAddress() {
  apiip
    .getIp()
    .then((res) => {
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

      ui.paint(res);
    })
    .catch((err) => console.log(err));
}
