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

  async getNewIp(ipAddress) {
    const res = await fetch(
      `https://api.ipdata.co/${ipAddress}?api-key=${this.apiKey}`
    );
    const resData = await res.json();

    return resData;
  }
}

// let response = await fetch("page-that-redirects.com/");
// if (response.status === 404) {
//   let newResponse = await fetch(response.url + "?token=" + token);
//   /* do something */
// }
