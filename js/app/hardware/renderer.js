const {
  cpu,
  mem,
  diskLayout,
  graphics,
  osInfo
} = require("systeminformation");

// replace all for new developing

const cpuInfo = document.querySelector('#cpu-info');
const ramInfo = document.querySelector('#ram-info');
const osDetail = document.querySelector('#os-detail');
const diskInfo = document.querySelector('#disks-info');
const graphicsInfo = document.querySelector('#graphics-info');

cpu()
  .then(data => (cpuInfo.textContent = JSON.stringify(data, null, 2)))
  .catch(err => (cpuInfo.textContent = err));

mem()
  .then(data => (ramInfo.textContent = JSON.stringify(data, null, 2)))
  .catch(err => (ramInfo.textContent = err));

diskLayout()
  .then(data => (diskInfo.textContent = JSON.stringify(data, null, 2)))
  .catch(err => (diskInfo.textContent = err));


graphics()
  .then(data => (graphicsInfo.textContent = JSON.stringify(data, null, 2)))
  .catch(err => (graphicsInfo.textContent = err));

osInfo()
  .then(data => (osDetail.textContent = JSON.stringify(data, null, 2)))
  .catch(err => (osDetail.textContent = err));
