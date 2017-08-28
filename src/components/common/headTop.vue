<template>
  <div class="header clearfix">
	<div class="logo fl">
		<router-link to="home">
			<img src="/static/images/logo.png" alt="">
			<h1>优产到家后台管理系统</h1>
			<p>EXCELLENT HOME BACKGROUND MANAGEMENT SYSTEM</p>
		</router-link>
	</div>
	<div class="login-user fr clearfix">
		<router-link to="home" class="user-admin"><i class="icons icon-w40 ico-user"></i>admin</router-link>
		<router-link to="login" class="user-login-out"><i class="icons icon-w40 ico-login-out"></i>退出</router-link>
	</div>
	
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      
    }
  }
}
</script>

