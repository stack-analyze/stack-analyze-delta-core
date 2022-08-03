const { createRouter, createWebHashHistory } = require('vue-router');

// pages
const Stack = require('./pages/stack');
const Hardware = require('./pages/hardware');
const Password = require('./pages/password')

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { 
    path: '/', 
    component: Stack,
    name: 'Tech Stack'
  },
  { 
    path: '/info', 
    component: Hardware,
    name: 'Hardware Information'
  },
  { 
    path: '/password', 
    component: Password,
    name: 'Password Generator'
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

module.exports = router;
