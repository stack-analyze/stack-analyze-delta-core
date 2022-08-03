const passwordItem = document.getElementById('password');
const btnGenerator = document.getElementById('generate');
const btnCopy = document.getElementById('copy');
const btnReset = document.getElementById('reset');

btnGenerator.addEventListener('click', () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  for (let i = 0; i <= 12; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  passwordItem.textContent = password;
});

btnCopy.addEventListener('click', async () => {
  const copyItem = navigator.clipboard;
  
  if (passwordItem.textContent === '') {
    alert('password is empty please generate password?');
  } else {
    await copyItem.writeText(passwordItem.textContent);
    alert('Copied');
  }
});

btnReset.addEventListener('click', () => {
  passwordItem.textContent = '';
});
