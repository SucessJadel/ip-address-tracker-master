const apiip = new Apiip();

// const ui = new UI();

document.addEventListener("DOMContentLoaded", getIpAddress);

function getIpAddress() {
  apiip
    .getIp()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
