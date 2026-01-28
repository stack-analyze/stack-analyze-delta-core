const { defineComponent } = require('vue');

// @vue/component
const App = defineComponent({
  template: `
    <nav>
      <menu>
        <li>
          <router-link to="/">tech stack</router-link>
        </li>
        <li>
          <router-link to="/info">hardware Information</router-link>
        </li>
        <li>
          <router-link to="/password">password generator</router-link>
        </li>
        <li>
          <a href="/magicball">magic ball</a>
        </li>
      </menu>
    </nav>
    <router-view></router-view>
    `
});

module.exports = App;
