const Wappalyzer = require('wappalyzer');

// example for new devs replace
const form = document.getElementById('form');
const website = document.getElementById('website');
const reset = document.getElementById('reset');
const validateLink = document.getElementById('validate-link');
const apps = document.getElementById('apps');

const singleStack = async (url) => {
  const wappalyzer = new Wappalyzer();

  try {
    await wappalyzer.init();

    const { technologies } = await wappalyzer.open(url).analyze();

    apps.textContent = JSON.stringify(technologies, null, 2);
  } catch (err) {
    apps.textContent = err;
  }
  await wappalyzer.destroy();
};

website.addEventListener('keyup', () => {
  validateLink.disabled = !website.validity.valid;
});

reset.addEventListener('click', () => {
  apps.textContent = '';
});

form.addEventListener('submit', e => {
  e.preventDefault();
  singleStack(website.value);
  validateLink.disabled = true;
  form.reset();
});
