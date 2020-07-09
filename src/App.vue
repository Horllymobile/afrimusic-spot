<template>
  <div id="app">
    <app-header/>

      <router-view class="main"></router-view>

    <app-footer/>
  </div>
</template>

<script>
import Header from './components/Header_Footer/Header';
import Footer from './components/Header_Footer/Footer';
// import Home from './components/Home';
export default {
  name: 'App',
  components: {
    //appHome:Home,
    appHeader:Header,
    appFooter:Footer
  }
}
</script>

<style>
@import url('assets/styles/main.css');
</style>
