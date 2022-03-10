<template>
    <div class="top-header-container">
        <div class="searching-box">
            <div class="searching-container">
                <img src="../assets/topHeader/magnifier.svg" alt="">
                <input type="text" class="input-searching">
            </div>
        </div>
        <div class="profile-box">
            <img src="../assets/topHeader/bell.svg" alt="">
            <img src="../assets/topHeader/Task.svg" alt="">
            <div class="box-for-profile">
                <div class="round-profile">
                    <img src="../assets/topHeader/testing_pp.jpeg" alt="">
                </div>
                <p>John Snow</p>
            </div>
        </div>
    </div>
</template>


<script>// import {SideBar} from '../assets/SideNavTogglerLines.png'
// Vue.component('b-breadcrumb', BBreadcrumb)

export default{
    name:'TopHeader',
    data(){ // cara bikin local state
        return {
            isLoading:true
        }
    }
}
</script>

<style lang="scss">
    @import '../scss/TopHeader.scss';

</style>
