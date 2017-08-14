<template>
  <!-- 导航 -->
	<!--<div class="nav-con fl">
		<ul class="layui-nav layui-nav-tree" lay-filter="NavCon">
			<li class="layui-nav-item">
				<a href="index.html"><i class="icons icon-w24 ico-home"></i>首页</a>				
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-storage"></i>仓储</a>
				<dl class="layui-nav-child">
					<dd><a href="store-management.html">仓库管理</a></dd>
					<dd><a href="store-instore.html">入库</a></dd>
					<dd><a href="store-outstore.html">出库</a></dd>
					<dd><a href="store-keepcheck.html">库存盘点</a></dd>
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href="user-management.html"><i class="icons icon-w24 ico-users"></i>用户</a>				
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-agent"></i>代理商</a>
				<dl class="layui-nav-child">
					<dd><a href="agent-management.html">代理商管理</a></dd>
					<dd><a href="agent-audit.html">代理商审核</a></dd>					
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-terminal-shop"></i>终端店</a>
				<dl class="layui-nav-child">
					<dd><a href="terminal-management.html">终端店管理</a></dd>
					<dd><a href="terminal-audit.html">终端店审核</a></dd>					
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-goods"></i>商品</a>
				<dl class="layui-nav-child">
					<dd><a href="goods-management-classify.html">分类管理</a></dd>
					<dd><a href="goods-management-brand.html">品牌管理</a></dd>
					<dd><a href="goods-management.html">商品管理</a></dd>				
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href="order-management.html"><i class="icons icon-w24 ico-order"></i>订单</a>
			</li>
			<li class="layui-nav-item">
				<a href=""><i class="icons icon-w24 ico-after-sale"></i>售后</a>
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-details"></i>内容</a>
				<dl class="layui-nav-child">
					<dd><a href="details-management.html">广告管理</a></dd>
					<dd><a href="details-advertising.html">广告位管理</a></dd>
					<dd><a href="details-article.html">文章管理</a></dd>
					<dd><a href="details-app.html">APP启动页</a></dd>
					<dd><a href="details-system.html">系统公告</a></dd>
					<dd><a href="details-comments.html">评论管理</a></dd>	
					<dd><a href="details-user-opinion.html">app用户意见与反馈</a></dd>	
					<dd><a href="details-user-deal.html">用户协议</a></dd>					
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href=""><i class="icons icon-w24 ico-operation"></i>运营/促销</a>
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;"><i class="icons icon-w24 ico-settlement"></i>结算</a>
				<dl class="layui-nav-child">
					<dd><a href="settlement.html">结算单管理</a></dd>
					<dd><a href="settlement-online.html">线上结算</a></dd>					
				</dl>
			</li>
			<li class="layui-nav-item">
				<a href=""><i class="icons icon-w24 ico-statistical"></i>统计</a>
			</li>
			<li class="layui-nav-item">
				<a href=""><i class="icons icon-w24 ico-system"></i>系统管理</a>
			</li>
		</ul>
	</div>-->
	<el-row class="nav-con">
	  <el-col>	    
	    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
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
	      <el-menu-item index="3"><a href="user-management.html"><i class="icons icon-w24 ico-users"></i>用户</a></el-menu-item>
	      <el-submenu index="4">
	        <template slot="title"><i class="icons icon-w24 ico-agent"></i>代理商</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="4-1"><a href="agent-management.html">代理商管理</a></el-menu-item>
	          <el-menu-item index="4-2"><a href="agent-audit.html">代理商审核</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="5">
	        <template slot="title"><i class="icons icon-w24 ico-terminal-shop"></i>终端店</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="5-1"><a href="terminal-management.html">终端店管理</a></el-menu-item>
	          <el-menu-item index="5-2"><a href="terminal-audit.html">终端店审核</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-submenu index="6">
	        <template slot="title"><i class="icons icon-w24 ico-goods"></i>商品</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="6-1"><a href="goods-management-classify.html">分类管理</a></el-menu-item>
	          <el-menu-item index="6-2"><a href="goods-management-brand.html">品牌管理</a></el-menu-item>
	          <el-menu-item index="6-3"><a href="goods-management.html">商品管理</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="7"><a href="#order"><i class="icons icon-w24 ico-order"></i>订单</a></el-menu-item>
	      <el-menu-item index="8"><a href=""><i class="icons icon-w24 ico-after-sale"></i>售后</a></el-menu-item>
	      <el-submenu index="9">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="9-1"><a href="details-management.html">广告管理</a></el-menu-item>
	          <el-menu-item index="9-2"><a href="details-advertising.html">广告位管理</a></el-menu-item>
	          <el-menu-item index="9-3"><a href="details-article.html">文章管理</a></el-menu-item>
			  <el-menu-item index="9-4"><a href="details-app.html">APP启动页</a></el-menu-item>
			  <el-menu-item index="9-5"><a href="details-system.html">系统公告</a></el-menu-item>
			  <el-menu-item index="9-6"><a href="details-comments.html">评论管理</a></el-menu-item>	
			  <el-menu-item index="9-7"><a href="details-user-opinion.html">app用户意见与反馈</a></el-menu-item>	
			  <el-menu-item index="9-8"><a href="details-user-deal.html">用户协议</a></el-menu-item>
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="10"><a href=""><i class="icons icon-w24 ico-operation"></i>运营/促销</a></el-menu-item>
	      <el-submenu index="11">
	        <template slot="title"><i class="icons icon-w24 ico-details"></i>内容</template>
	        <el-menu-item-group>	         
	          <el-menu-item index="11-1"><a href="settlement.html">结算单管理</a></el-menu-item>
			  <el-menu-item index="11-2"><a href="settlement-online.html">线上结算</a></el-menu-item>	
	        </el-menu-item-group>	        
	      </el-submenu>
	      <el-menu-item index="12"><a href=""><i class="icons icon-w24 ico-statistical"></i>统计</a></el-menu-item>
	      <el-menu-item index="13"><a href=""><i class="icons icon-w24 ico-system"></i>系统管理</a></el-menu-item>
	    </el-menu>
	  </el-col>
	</el-row>
</template>
<style>
.nav-con,.nav-con .el-menu-item,.nav-con .el-submenu__title{font-size:18px;}
.nav-con a{display:block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color:#ccc;}

</style>

<script>
export default {
  
  data () {
    return {
      
    }
  }
}
</script>

