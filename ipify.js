class Ipify {
  constructor(ipAddress) {
    this.apiKey = "at_XZnBew0M74EfChpyR79XrZuS5faCi";
    this.ipAddress = ipAddress;
  }

  async getIpAddress() {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${this.apiKey}&ipAddress=${this.ipAddress}`
    );

    const responseData = await response.json();
    return responseData;
  }
}
