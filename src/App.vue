<template>
  <div id="app">
    <app-nav></app-nav>
    <app-sider></app-sider>
    <!-- <list></list> -->
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import appNav from './components/common/nav.vue'
import appSider from './components/common/sider.vue'
import List from './components/list/list.vue'

export default {
  name: 'app',
  components: {
    appNav,
    appSider,
    List
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
