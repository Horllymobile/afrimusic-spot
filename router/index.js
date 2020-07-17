import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './../src/components/Home/Home'

Vue.use(VueRouter);

var routes = [

    {path:'', component: Home, name:'home'}

]


export default new VueRouter({
    mode: 'history',
    routes
})