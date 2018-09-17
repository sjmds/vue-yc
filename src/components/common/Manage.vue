<template>
  <div id="app">
    <!-- 头部导航 -->
    <head-top></head-top>
    <div class="content">
      <aside-nav></aside-nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>

import headTop from './headTop';
import asideNav from './asideNav';

export default {

  data () {
    return {


    }
  },
  components:{
    headTop,
    asideNav
  }
}
</script>
