<template>
  <div id="app">
     <!-- 头部导航 -->  
    <head-top></head-top>  
    <div class="content">
    	<aside-nav></aside-nav>
    	<store>{{msg}}</store>
    </div>
    
  </div>
</template>

<script>
import store from '@/page/store/store';
export default {
  
  data () {
    return {
      msg: '仓库管理'
    }
  },
  components:{
  	headTop,
  	store
  }
}
</script>

