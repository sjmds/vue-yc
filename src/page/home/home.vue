<template>  
  <div id="app">
    <!-- 头部导航 -->  
    <head-top></head-top>  
    <div class="content">
    	<aside-nav></aside-nav>
    	<home-con></home-con>
    </div>
  </div> 
</template>
<script>

import headTop from '@/components/header/headTop';
import asideNav from '@/components/asideNav/asideNav';
import homeCon from '@/page/home/homeCon';
export default {
  
  data () {
    return {
      
      
    }
  },
  components:{
  	headTop,
  	asideNav,
  	homeCon
  }
}
</script>

