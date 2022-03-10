<template>
  <!-- <nav>
    <router-link to="/">Home2</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>
<script>

</script>

<style lang="scss">
// @import "~@/assets/scss/vendors/bootstrap-vue/index";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  body{
    margin:0px !important;
  }
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
