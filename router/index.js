import Vue from 'vue';
import VueRouter from 'vue-router';

// Default views
import Home from './../src/components/Home/Home';

// Views
import Premuim from './../src/components/Views/Premium';

Vue.use(VueRouter);

var routes = [

    {path:'', component: Home, name:'home'},
    {path:'/premium', component: Premuim, name:'premium'}

]


export default new VueRouter({
    mode: 'history',
    routes
})