// init ip object
const ip = new Ipify("197.210.77.240");
ip.getIpAddress()
  .then()
  .catch((err) => console.log(err));
