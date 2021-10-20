const { defineComponent } = require('vue');

// @vue/component
const App = defineComponent({
  template: `
    <nav>
      <div>
      <ul>
            <li>
              <router-link to="/">tech stack</router-link>
            </li>
            <li>
              <router-link to="/info">hardware Information</router-link>
            </li>
      </ul>
      </div>
    </nav>
    <router-view></router-view>
    `
});

module.exports = App;
