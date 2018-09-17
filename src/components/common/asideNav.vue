<template>
  <!-- 导航 -->

	<el-row class="nav-con">
		<el-col>
			<el-radio-group v-model="isCollapse" style="margin: 2px 0;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
		</el-col>
	  <el-col>
	    <el-menu class="el-menu-vertical-demo" theme="dark" router
				@open="handleOpen" @close="handleClose" :collapse="isCollapse"
			>
	      <el-menu-item index="/home">
					<i class="icons icon-w24 ico-home"></i>
					<span slot="title">首页</span>
				</el-menu-item>
	      <el-submenu index="2">
	        <template slot="title">
						<i class="icons icon-w24 ico-storage"></i>
						<span>仓储</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/store">仓库管理</el-menu-item>
	          <el-menu-item index="/storeIn">入库</el-menu-item>
	          <el-menu-item index="/storeOut">出库</el-menu-item>
	          <el-menu-item index="/storeKeepcheck">库存盘点</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="/userList">
					<i class="icons icon-w24 ico-users"></i>
					<span slot="title">用户</span>
				</el-menu-item>
	      <el-submenu index="3">
	        <template slot="title">
						<i class="icons icon-w24 ico-agent"></i>
						<span>代理商</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/agentList">代理商管理</el-menu-item>
	          <el-menu-item index="/agentAudit">代理商审核</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="4">
	        <template slot="title">
						<i class="icons icon-w24 ico-terminal-shop"></i>
						<span>终端店</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/terminalList">终端店管理</el-menu-item>
	          <el-menu-item index="/terminalAudit">终端店审核</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-submenu index="5">
	        <template slot="title">
						<i class="icons icon-w24 ico-goods"></i>
						<span>商品</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/goodsList">商品管理</el-menu-item>
	          <el-menu-item index="/goodsBrand">品牌管理</el-menu-item>
	          <el-menu-item index="/goodsClassify">分类管理</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="/orderList">
					<i class="icons icon-w24 ico-order"></i>
					<span slot="title">订单</span>
				</el-menu-item>
	      <el-menu-item index="6">
					<i class="icons icon-w24 ico-after-sale"></i>
					<span slot="title">售后</span>
				</el-menu-item>
	      <el-submenu index="7">
	        <template slot="title">
						<i class="icons icon-w24 ico-details"></i>
						<span>内容</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/adList">广告管理</el-menu-item>
	          <el-menu-item index="/advertising">广告位管理</el-menu-item>
	          <el-menu-item index="/artList">文章管理</el-menu-item>
					  <el-menu-item index="/appStart">APP启动页</el-menu-item>
					  <el-menu-item index="/system">系统公告</el-menu-item>
					  <el-menu-item index="/commenting">评论管理</el-menu-item>
					  <el-menu-item index="/userOpinion">app用户意见与反馈</el-menu-item>
					  <el-menu-item index="/userDeal">用户协议</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="8">
					<i class="icons icon-w24 ico-operation"></i>
					<span slot="title">运营/促销</span>
				</el-menu-item>
	      <el-submenu index="9">
	        <template slot="title">
						<i class="icons icon-w24 ico-details"></i>
						<span>内容</span>
					</template>
	        <el-menu-item-group>
	          <el-menu-item index="/settleList">结算单管理</el-menu-item>
			  		<el-menu-item index="/settleOnline">线上结算</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      <el-menu-item index="10">
					<i class="icons icon-w24 ico-statistical"></i>统计
					<span slot="title">运营/促销</span>
				</el-menu-item>
	      <el-menu-item index="11">
					<i class="icons icon-w24 ico-system"></i>
					<span slot="title">系统管理</span>
				</el-menu-item>
	    </el-menu>
	  </el-col>
	</el-row>
</template>
<style>
.nav-con .el-menu-item-group .el-menu-item{padding-left:60px!important;}
.nav-con,.nav-con .el-menu-item,.nav-con .el-submenu__title{font-size:18px;}
.nav-con .el-menu-item{display:block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;color:#ccc;}
.nav-con .icons{margin-right:15px;}
.el-menu-item.is-active{color:#56C32B;}
.nav-con .el-menu--dark{padding-top:20px;padding-bottom:30px;}
</style>

<script>
export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
