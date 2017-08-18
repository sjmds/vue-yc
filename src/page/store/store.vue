<template>  
  <div id="app">
    <!-- 头部导航 -->  
    <head-top></head-top>  
    <div class="content">
      <aside-nav></aside-nav>
      <div class="content-con fl">
        store
      </div>
    </div>
  </div> 
</template>
<script>

import headTop from '@/components/header/headTop';
import asideNav from '@/components/asideNav/asideNav';

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