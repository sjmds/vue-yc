<template>
  <!-- 导航 -->
	<div class="nav-con fl">
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

