// modules
const { ref, defineComponent } = require('vue');

// @vue/component
module.exports = defineComponent({
  name: 'Password',
  template: `
        <main>
          <p>{{generatedPassword || 'no password'}}</p>
          <button @click="genPassword">Generate</button>
          <button @click="copyPassword">Copy</button>
        </main>
    `,
  setup() {
    const generatedPassword = ref('');

    const genPassword = () => {
      const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const length = 12;
      
      let retVal = "";
      
      for (let i = 0, n = chars.length; i < length; ++i) {
        retVal += chars.charAt(Math.floor(Math.random() * n));
      }
      
      generatedPassword.value = retVal;
    };
    
    const copyPassword = async () => {
      await navigator.clipboard.writeText(generatedPassword.value)
      alert('Copied');
    };

    return {
      generatedPassword,
      genPassword,
      copyPassword
    };
  }
});
