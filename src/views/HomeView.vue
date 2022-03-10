<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <div class="home-container">
    <SideHeader/>
    <div class="main-body-home">
      <TopHeader/>
      <BreadCrumbHeader/>
      <BoxSmallDashboard/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SideHeader from '@/components/SideHeader.vue'
import TopHeader from '@/components/TopHeader.vue'
import BreadCrumbHeader from '@/components/BreadCrumbHeader.vue'
import BoxSmallDashboard from '@/components/BoxSmallDashboard.vue'

export default {
  name: 'HomeView',
  components: {
    SideHeader,
    TopHeader,
    BreadCrumbHeader,
    BoxSmallDashboard
    // HelloWorld
  }
}
</script>

<style lang="scss">
@import '../scss/HomeView.scss';
</style>
