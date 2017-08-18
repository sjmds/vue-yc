<template>  
  <div id="app">
    <!-- 头部导航 -->  
    <head-top></head-top>  
    <div class="content">
    	<aside-nav></aside-nav>
    	<div class="content-con fl">
	    	<!-- 代理商审核 -->
			<div class="bg-white content-padding">
				<!-- 切换 -->
				<div class="sy-tab clearfix">
					<ul>
						<li class="on"><a href="agent-audit.html">申请列表</a></li>
					</ul>
				</div>
				<!-- 切换 -->
				<div class="sline"></div>
				<!-- 查询 -->
				<div class="search-form clearfix">
					<form class="layui-form" action="">
					    <div class="layui-input-inline">
					    	<label class="layui-input-inline">商户名称:</label>
					    	<div class="layui-input-inline">
	    						<input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="输入商户名" class="layui-input">
	    					</div>
					    </div>
					    <div class="layui-input-inline">
					    	<label class="layui-input-inline">用户名:</label>
					    	<div class="layui-input-inline">
	    						<input type="text" name="name" lay-verify="name" autocomplete="off" placeholder="输入用户名" class="layui-input">
	    					</div>
					    </div>
					    <div class="layui-input-inline">
					    	<label class="layui-input-inline">法人:</label>
					    	<div class="layui-input-inline">
	    						<input type="text" name="cname" lay-verify="cname" autocomplete="off" placeholder="输入法人姓名" class="layui-input">
	    					</div>
					    </div>
					    <div class="layui-inline">
					      <label class="layui-input-inline">状态:</label>
					      <div class="layui-input-inline">
					        <select name="adstate" lay-search="">
					          <option value="0">全部</option>
					          <option value="1">启用</option>
					          <option value="2">禁用</option>
					        </select>
					      </div>
					    </div>
					    <div class="layui-inline">
						    <label class="layui-input-inline">省市:</label>
						    <div class="layui-input-inline">
						      <select name="quiz1">
						        <option value="">请选择省</option>
						        <option value="浙江">浙江省</option>
						        <option value="你的工号">江西省</option>
						        <option value="你最喜欢的老师">福建省</option>
						      </select>
						    </div>
						</div>
					    <div class="layui-inline">
					      <label class="layui-input-inline">添加时间:</label>
					      <div class="layui-input-inline">
						    <input class="layui-input" name="timestart" placeholder="-年-月-日" onclick="layui.laydate({elem: this})">
						  </div>
						  <label class="layui-input-inline">~</label>
						  <div class="layui-input-inline">
						    <input class="layui-input" name="timeend" placeholder="-年-月-日" onclick="layui.laydate({elem: this})">
						  </div>
					    </div>
					    <div class="layui-inline">
							<button class="layui-btn" lay-submit="" lay-filter="sersub">查询</button>
						</div>
					</form>
				</div>
				<!-- 查询 -->
				<div class="sline"></div>
				<!-- 上下架 -->
				<div class="goodsAction clearfix">
					<ul>
						
						<li onclick="cancelGoods('all')">删除</li>
					</ul>
				</div>
				<!-- table -->
				<div class="content-table clearfix">
					<table class="layui-table">
						<thead>
							<tr>
								<td><input type="checkbox" onclick="allChoose()"></td>
								<td>序号</td>
								<td>商户名称</td>
								<td>代理商类型</td>
								<td>用户名</td>
								<td>法人</td>
								<td>法人电话</td>
								<td>注册时间</td>
								<td>商户注册地</td>
								<td>操作</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" onclick="checkmore();"></td>
								<td>1</td>
								<td>四川北大荒米业有限公司</td>
								<td>自营</td>
								<td>scbdh</td>
								<td>何桂菊</td>
								<td>13000000000</td>
								<td>2017-06-20</td>
								<td>四川 成都 高新区</td>
								<td><a class="blue" href="agent-audit-details.html">详情</a></td>
							</tr>
							<tr>
								<td><input type="checkbox" onclick="checkmore();"></td>
								<td>1</td>
								<td>四川北大荒米业有限公司</td>
								<td>自营</td>
								<td>scbdh</td>
								<td>何桂菊</td>
								<td>13000000000</td>
								<td>2017-06-20</td>
								<td>四川 成都 高新区</td>
								<td><a class="blue" href="agent-audit-details.html">详情</a></td>
							</tr>
							<tr>
								<td><input type="checkbox" onclick="checkmore();"></td>
								<td>1</td>
								<td>四川北大荒米业有限公司</td>
								<td>自营</td>
								<td>scbdh</td>
								<td>何桂菊</td>
								<td>13000000000</td>
								<td>2017-06-20</td>
								<td>四川 成都 高新区</td>
								<td><a class="blue" href="agent-audit-details.html">详情</a></td>
							</tr>
							
						</tbody>
					</table>
				</div>
				<div class="data-page" id="data-page"></div>


	    	</div>
	    </div>
    </div>
  </div> 
</template>
<script>

import headTop from '@/components/header/headTop';
import asideNav from '@/components/asideNav/asideNav';

export default {
  
  data () {
    return {
      
      
    }
  },
  components:{
  	headTop,
  	asideNav
  	
  }
}
</script>