<template>
  <div class="header">
    <HeaderTop />
  </div>
  <div class="main-content">
    <router-view/>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import HeaderBottom from './components/HeaderBottom.vue'
import MainPage from './pages/MainPage.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderTop,
    HeaderBottom,
    MainPage,
    FooterComponent
  }
}
</script>

<style>

</style>

