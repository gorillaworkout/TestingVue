<script>
// import {SideBar} from '../assets/SideNavTogglerLines.png'

export default{
    name:'SideHeader',
    data(){ // cara bikin local state
        return {
            isLoading:true
        }
    },
    methods:{ // cara bikin function
        onSideNavToggle(){
            alert('function jalan', this.isLoading)
            console.log(this.isLoading)
            
        }
    }
    

}
</script>

<template>
    <div class="side-header-container">
        <div class="main-side-header">
            <img src="../assets/sideHeader/SideNavTogglerLines.png" alt="" class="sidebaricon" @click="onSideNavToggle">
            <img src="../assets/sideHeader/Home.svg" alt="" class="icon-normal" >
            <img src="../assets/sideHeader/Warning.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Info.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Pink.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Default.svg" alt="" class="icon-normal" >
            <img src="../assets/sideHeader/Primary.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Success.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/infoRound.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Calendar.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Separator.svg" alt="" class="icon-separator">
            <img src="../assets/sideHeader/DText.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/spaceship.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/Foundation.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/switchBlack.svg" alt="" class="icon-normal">
            <img src="../assets/sideHeader/infoRoundBlack.svg" alt="" class="icon-normal">
        </div>
    </div>
</template>



<style lang="scss">
    @import '../scss/SideHeader.scss';

</style>
