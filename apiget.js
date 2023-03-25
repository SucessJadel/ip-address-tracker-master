console.log("hi");

class Apiip {
  constructor() {
    this.apiKey = "00e8d50b7d19050e39c9b36147ced28505f4fc889284cd54d1a855fa";
  }

  async getIp() {
    const response = await fetch(
      `https://api.ipdata.co?api-key=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }
}
// json().then((data) => {
//   console.log(data.ip);
// });
