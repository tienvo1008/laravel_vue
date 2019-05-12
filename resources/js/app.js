
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import Dashboard from './components/auth/Dashboard.vue';
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue'

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent.vue';

// const router = new VueRouter({
//     routes: [{
//             name: 'home',
//             path: '/',
//             component: HomeComponent
//         },
//         {
//             name: 'create',
//             path: '/create',
//             component: CreateComponent
//         },
//         { 
//             name: 'edit',
//             path: '/edit/:id',
//             component: EditComponent
//         },
//         {
//             name: 'posts',
//             path: '/posts',
//             component: IndexComponent
//         },
//         {
//             name: 'register',
//             path: '/register',
//             component: Register,
//             meta: {
//                 auth: false
//             }
//         },
//         {
//             name: 'login',
//             path: '/login',
//             component: Login,
//             meta: {
//                 auth: false
//             }
//         },
//         {
//             name: 'dashboard',
//             path: '/dashboard',
//             comments: Dashboard,
//             meta: {
//                 auth: true
//             }
//         }
//     ]
// });
const routes  = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    { 
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        comments: Dashboard,
        meta: {
            auth: true
        }
    }

];
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.use(require('@websanova/vue-auth'), {
   auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
   http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
   router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
