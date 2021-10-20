const { createApp } = require('vue');

const App = require('./app');

const router = require('./router');

const app = createApp(App);

app.use(router);

app.mount('#app');
