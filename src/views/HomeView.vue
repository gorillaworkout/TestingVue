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
      <div class="box-chart">
        <div class="box-title-chart"></div>
        <line-chart  art class="firstChart"  
          :download="false" 
          :dataset="{borderWidth: 5}"
          :colors="['#5E72E4']" 
          :data="{'January': 2, 'February': 5, 'March':2,'April':3,'May':1}" >
        </line-chart>
        <column-chart 
        :data="[['Sun', 32], ['Mon', 46], ['Tue', 28],['Wed', 31], ['Thurs', 47], ['Fri', 27],['Sat', 30],['set', 32], ['sot', 46], ['sit', 28]]"
          :dataset="{borderColor:'red', width:5}"
         >
        
        </column-chart>

      </div>

      <!-- <div class="belajar-store">

        <div class="btn-tambah" @click="tambahFunc('testing')">
          +
        </div>
        <div class="btn-kurang" @click="kurangFunc('testing')">
          - 
        </div>
        <div class="result">
          <p>{{resultAngka}}</p>
        </div>
      </div> -->
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
  },
  data(){
    return {
      resultAngka:0
    }
  },
 methods:{
   tambahFunc(params){
     console.log(params)
     this.resultAngka = (this.resultAngka + 1)
   },
   kurangFunc(){
     this.resultAngka = (this.resultAngka - 1)
   }
 }
  
}
</script>

<style lang="scss">
@import '../scss/HomeView.scss';
</style>
