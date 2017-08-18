<template>
  <!-- 导航 -->
	
	<el-row class="nav-con">
	  <el-col>	    
	    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
	      <el-menu-item index="1"><a href="#home"><i class="icons icon-w24 ico-home"></i>首页</a></el-menu-item>
	      <el-submenu index="2">
	        <template slot="title"><i class="icons icon-w24 ico-storage"></i>仓储</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="2-1"><a href="#store">仓库管理</a></el-menu-item>
	          <el-menu-item index="2-2"><a href="#store/storeIn">入库</a></el-menu-item>	        
	          <el-menu-item index="2-3"><a href="#store/storeOut">出库</a></el-menu-item>
	          <el-menu-item index="2-4"><a href="#store/storeKeepcheck">库存盘点</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="3"><a href="#userList"><i class="icons icon-w24 ico-users"></i>用户</a></el-menu-item>
	      <el-submenu index="4">
	        <template slot="title"><i class="icons icon-w24 ico-agent"></i>代理商</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="4-1"><a href="#agentList">代理商管理</a></el-menu-item>
	          <el-menu-item index="4-2"><a href="#agentList/agentAudit">代理商审核</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="5">
	        <template slot="title"><i class="icons icon-w24 ico-terminal-shop"></i>终端店</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="5-1"><a href="#terminalList">终端店管理</a></el-menu-item>
	          <el-menu-item index="5-2"><a href="#terminalList/terminalAudit">终端店审核</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="6">
	        <template slot="title"><i class="icons icon-w24 ico-goods"></i>商品</template>
	        <el-menu-item-group>	
	          <el-menu-item index="6-1"><a href="#goodsList">商品管理</a></el-menu-item>
	          <el-menu-item index="6-2"><a href="#goodsList/goodsBrand">品牌管理</a></el-menu-item>
	          <el-menu-item index="6-3"><a href="#goodsList/goodsClassify">分类管理</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="7"><a href="#order"><i class="icons icon-w24 ico-order"></i>订单</a></el-menu-item>
	      <el-menu-item index="8"><a href=""><i class="icons icon-w24 ico-after-sale"></i>售后</a></el-menu-item>
	      <el-submenu index="9">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="9-1"><a href="#details/adList">广告管理</a></el-menu-item>
	          <el-menu-item index="9-2"><a href="#details/advertising">广告位管理</a></el-menu-item>
	          <el-menu-item index="9-3"><a href="#details/artList">文章管理</a></el-menu-item>
			  <el-menu-item index="9-4"><a href="#details/appStart">APP启动页</a></el-menu-item>
			  <el-menu-item index="9-5"><a href="#details/system">系统公告</a></el-menu-item>
			  <el-menu-item index="9-6"><a href="#details/commenting">评论管理</a></el-menu-item>	
			  <el-menu-item index="9-7"><a href="#details/userOpinion">app用户意见与反馈</a></el-menu-item>	
			  <el-menu-item index="9-8"><a href="#details/userDeal">用户协议</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="10"><a href=""><i class="icons icon-w24 ico-operation"></i>运营/促销</a></el-menu-item>
	      <el-submenu index="11">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="11-1"><a href="#settleList">结算单管理</a></el-menu-item>
			  <el-menu-item index="11-2"><a href="#settleOnline">线上结算</a></el-menu-item>	
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="12"><a href=""><i class="icons icon-w24 ico-statistical"></i>统计</a></el-menu-item>
	      <el-menu-item index="13"><a href=""><i class="icons icon-w24 ico-system"></i>系统管理</a></el-menu-item>
	    </el-menu>
	  </el-col>
	</el-row>
</template>
<style>
.nav-con .el-menu-item-group .el-menu-item{padding-left:60px!important;}
.nav-con,.nav-con .el-menu-item,.nav-con .el-submenu__title{font-size:18px;}
.nav-con a{display:block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color:#ccc;}
.nav-con .icons{margin-right:10px;}
</style>

<script>
export default {
  
	data () {
		return {
		  
		}
	}
}
</script>

