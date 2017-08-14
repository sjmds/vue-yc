<template>
	<div class="login-body relative">
		<div class="login-con clearfix">
			<h1>优产到家后台管理系统</h1>
			<p>EXCELLENT HOME BACKGROUND MANAGEMENT SYSTEM</p>
			<div class="login-form relative">
				<div class="login-logo"><img width="110" height="110" src="/static/images/logo.png" alt=""></div>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm layui-form">
	                <el-form-item prop="username">
	                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
	                </el-form-item>
	                <el-form-item prop="password">
	                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
	                </el-form-item>
	                <div class="login-btn">
	                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
	                </div>
	                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
	            </el-form>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
    data: function(){
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            const self = this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    localStorage.setItem('ms_username',self.ruleForm.username);
                    self.$router.push('/home');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

