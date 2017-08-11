<template>
  <div class="login-body relative">
	<div class="login-con clearfix">
		<h1>优产到家后台管理系统</h1>
		<p>EXCELLENT HOME BACKGROUND MANAGEMENT SYSTEM</p>
		<div class="login-form relative">
			<div class="login-logo"><img width="110" height="110" src="images/logo.png" alt=""></div>
			<form class="log-form" action="xxxx">
				<div class="form-group">
					<input type="text" name="user" datatype="s2-16" placeholder="请输入账号">
				</div>
				<div class="form-group">
					<input type="password" name="password" datatype="*6-15" errormsg="密码范围在6~15位之间！" placeholder="请输入密码">
				</div>
				<div class="form-group">
					<input type="submit" class="input-sub" value="登陆">
				</div>
			</form>
		</div>
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

