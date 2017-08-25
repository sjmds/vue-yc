<template>
  <!-- 导航 -->
	
	<el-row class="nav-con">
	  <el-col>	    
	    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" theme="dark" router>
	      <el-menu-item index="home"><i class="icons icon-w24 ico-home"></i>首页</el-menu-item>
	      <el-submenu index="2">
	        <template slot="title"><i class="icons icon-w24 ico-storage"></i>仓储</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="store">仓库管理</el-menu-item>
	          <el-menu-item index="storeIn">入库</el-menu-item>	        
	          <el-menu-item index="storeOut">出库</el-menu-item>
	          <el-menu-item index="storeKeepcheck">库存盘点</el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="userList"><i class="icons icon-w24 ico-users"></i>用户</el-menu-item>
	      <el-submenu index="3">
	        <template slot="title"><i class="icons icon-w24 ico-agent"></i>代理商</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="agentList">代理商管理</el-menu-item>
	          <el-menu-item index="agentAudit">代理商审核</el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="4">
	        <template slot="title"><i class="icons icon-w24 ico-terminal-shop"></i>终端店</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="terminalList">终端店管理</el-menu-item>
	          <el-menu-item index="terminalAudit">终端店审核</el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="5">
	        <template slot="title"><i class="icons icon-w24 ico-goods"></i>商品</template>
	        <el-menu-item-group>	
	          <el-menu-item index="goodsList">商品管理</el-menu-item>
	          <el-menu-item index="goodsBrand">品牌管理</el-menu-item>
	          <el-menu-item index="goodsClassify">分类管理</el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="orderList"><i class="icons icon-w24 ico-order"></i>订单</el-menu-item>
	      <el-menu-item index="6"><i class="icons icon-w24 ico-after-sale"></i>售后</el-menu-item>
	      <el-submenu index="7">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="adList">广告管理</el-menu-item>
	          <el-menu-item index="advertising">广告位管理</el-menu-item>
	          <el-menu-item index="artList">文章管理</el-menu-item>
			  <el-menu-item index="appStart">APP启动页</el-menu-item>
			  <el-menu-item index="system">系统公告</el-menu-item>
			  <el-menu-item index="commenting">评论管理</el-menu-item>	
			  <el-menu-item index="userOpinion">app用户意见与反馈</el-menu-item>	
			  <el-menu-item index="userDeal">用户协议</el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="8"><i class="icons icon-w24 ico-operation"></i>运营/促销</el-menu-item>
	      <el-submenu index="9">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="settleList">结算单管理</el-menu-item>
			  <el-menu-item index="settleOnline">线上结算</el-menu-item>	
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="10"><i class="icons icon-w24 ico-statistical"></i>统计</el-menu-item>
	      <el-menu-item index="11"><i class="icons icon-w24 ico-system"></i>系统管理</el-menu-item>
	    </el-menu>
	  </el-col>
	</el-row>
</template>
<style>
.nav-con .el-menu-item-group .el-menu-item{padding-left:60px!important;}
.nav-con,.nav-con .el-menu-item,.nav-con .el-submenu__title{font-size:18px;}
.nav-con .el-menu-item{display:block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color:#ccc;}
.nav-con .icons{margin-right:10px;}
</style>

<script>
export default {
	computed: {
		defaultActive: function(){
			return this.$route.path.replace('/', '');
		}
	},
}
</script>

