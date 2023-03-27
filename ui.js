class UI {
  constructor() {
    this.address = document.getElementById("address");
    this.city = document.getElementById("city");
    this.country = document.getElementById("country");
    this.timezone = document.getElementById("timezone");
    this.isp = document.getElementById("isp");
  }

  paint(api) {
    this.address.textContent = api.ip;
    this.city.textContent = api.city;
    this.country.textContent = api.country_code;
    this.timezone.textContent = api.time_zone.offset;
    this.isp.textContent = api.carrier.name;
  }
}
