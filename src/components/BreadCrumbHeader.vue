<template>
    <div class="container-breadcrumb">
        <div class="bc-left">
            <p>Default</p>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="bc-detail"><a href="#"> <img src="../assets/topHeader/HomeBC.svg" alt=""> </a></li>
                    <li class="breadcrumb-item active bc-detail" aria-current="page">Dashboards</li>
                    <li class="breadcrumb-item active bc-detail" aria-current="page">Default</li>
                </ol>
            </nav>
        </div>
        <div class="bc-right">
            <div class="btn-new">
                New
            </div>
             <div class="btn-filters">
                Filters
            </div>
        </div>
    </div>
</template>


<script>
// import Vue from 'Vue'
// import { BBreadcrxumb } from 'bootstrap-vue'
// import { BBreadcrumb } from 'bootstrap-vue'
// Vue.component('b-breadcrumb', BBreadcrumb)


export default {
    name:'BreadCrumbHeader',

}
</script>


<style lang="scss">
@import '../scss/BreadCrumbHeader.scss';
</style>