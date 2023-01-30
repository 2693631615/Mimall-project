<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from 'components/NavHeader'
import NavFooter from 'components/NavFooter'
// @ is an alias to /src

export default {
  name: 'Home-page',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
