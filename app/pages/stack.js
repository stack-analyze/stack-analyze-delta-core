// modules
const { shell } = require('electron');
const { reactive, computed, defineComponent } = require('vue');
const Wappalyzer = require('wappalyzer');

module.exports = defineComponent({
  name: 'Home',
  template: `
    <main>
        <form @submit.prevent="singleStack">
          <div>
            <input id="website" v-model="url" placeholder="enter a website" type="url" />
          </div>
          <button type="submit" :disabled="validateButton">analyze website</button>
        </form>
        <button @click="reset">Reset analyze</button>
        <section>
          {{apps}}
        </section>
    </main>
    `,
  setup() {
    const url = ref('');
    const apps = ref([]);
    const stack = reactive({
      url: '',
      apps: []
    });

    const singleStack = async () => {
      const wappalyzer = new Wappalyzer();
      try {
        await wappalyzer.init();

        const { technologies } = await wappalyzer.open(url.value).analyze();
        if(technologies[0] === undefined) {
          alert('no tech-stack or no internet');
        } else {
          stack.apps = technologies;
        }
      } catch (err) {
        alert(err);
      }
      await wappalyzer.destroy();
      stack.url = '';
    };

    const reset = () => (stack.apps = []);
    
    const regex = RegExp('(http|https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');

    const validateButton = computed(() => (stack.url.match(regex) ? false : true));

    return {
      url,
      apps,
      singleStack,
      reset,
      validateButton
    };
  }
});
