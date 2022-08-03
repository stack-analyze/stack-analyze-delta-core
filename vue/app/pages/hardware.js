// modules
const { ref, defineComponent, onMounted } = require('vue');
const {
  cpu,
  mem,
  diskLayout,
  graphics,
  osInfo
} = require("systeminformation");

// @vue/component
module.exports = defineComponent({
  name: 'Info',
  // template
  template: `
    <main>
      <p>{{cpuInfo}}</p>
      <p>{{ramInfo}}</p>
      <p>{{osDetail}}</p>
      <p>{{diskInfo}}</p>
      <p>{{graphicsInfo}}</p>
    </main>
  `,
  setup() {
    // start states
    const cpuInfo = ref({});
    const ramInfo = ref({});
    const osDetail = ref({});
    const disksInfo = ref({});
    const graphicsInfo = ref({});

    onMounted(async () => {
      try { 
        cpuInfo.value = await cpu();
        ramInfo.value =await mem();
        disksInfo.value =await diskLayout();
        graphicsInfo.value =await graphics();
        osDetail.value = await osInfo();
      } catch(err) {
        alert(err);
      }
    });
    
    return {
      cpuInfo,
      ramInfo,
      osDetail,
      disksInfo,
      graphicsInfo
    };
  }
});

