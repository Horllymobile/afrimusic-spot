import Vue from 'vue'
import App from './App.vue'
import router from './../router/index';

Vue.config.productionTip = false;

window.onscroll = () => {scroll()};
function scroll(){
  var nav = document.querySelector('nav');
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    nav.classList.replace('bg-transparent', 'scrolled');
    console.log("Black live matters");

  }else{
    //var nav = document.querySelector('nav');
    nav.classList.replace('scrolled', 'bg-transparent');
    console.log("Black live matters");
  }
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
