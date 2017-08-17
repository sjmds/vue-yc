<template>
	<div class="login-body relative">
		<div class="login-con clearfix">
			<h1>优产到家后台管理系统</h1>
			<p>EXCELLENT HOME BACKGROUND MANAGEMENT SYSTEM</p>
			<div class="login-form relative">
				<div class="login-logo"><img width="110" height="110" src="/static/images/logo.png" alt=""></div>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="log-form">
	                <el-form-item prop="username" class="form-group">
	                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
	                </el-form-item>
	                <el-form-item prop="password" class="form-group">
	                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
	                </el-form-item>
	                <div class="login-btn form-group">
	                    <el-button type="primary" @click="submitForm('ruleForm')" class="input-sub">登陆</el-button>
	                </div>
	                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
	            </el-form>
			</div>
		</div>
		
	</div>
</template>
<style>
.input-sub{width:365px;height: 60px;
    background-color: rgba(84, 194, 43, 1);
    box-shadow: 0px 1px 10px rgba(86, 195, 43, 1);
    letter-spacing: 20px;
    font-size:18px;
    text-align: center;
    color: #fff;}
</style>
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

