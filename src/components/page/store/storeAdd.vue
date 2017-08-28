<template>  

	<div class="content-con fl">
		<div class="bg-white content-padding">
			<!-- 切换 -->
			<div class="sy-tab clearfix">
				<ul>
					<li><router-link to="store">仓库管理</router-link></li>
					<li class="on"><router-link to="storeAdd">新增</router-link></li>
				</ul>
			</div>
			
			<!-- 切换 -->
			<div class="sline"></div>
			
			<!-- 新增 -->
			<div class="add-info-form clearfix">
				<form class="layui-form" action="">
					<div class="layui-form-item">
				    	<label class="layui-form-label">仓库编号：</label>
				    	<div class="layui-input-inline">
				      		<input type="text" name="serialNumber" autocomplete="off" placeholder="请输入仓库编号" class="layui-input">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">仓库名称：</label>
				    	<div class="layui-input-inline">
				      		<input type="text" name="title" autocomplete="off" placeholder="请输入仓库名称" class="layui-input">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">仓库类型：</label>
				    	<div class="layui-input-inline">
				      		<select name="modules">
					        	<option>请选择仓库类型</option>
					            <option>米面油</option>
					            <option>休闲食品</option>
					            <option>统仓</option>					          
					        </select>
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">仓库负责人：</label>
				    	<div class="layui-input-inline">
				      		<input type="text" name="name" autocomplete="off" placeholder="请输入仓库负责人" class="layui-input">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">联系电话：</label>
				    	<div class="layui-input-inline">
				      		<input type="tel" name="title" lay-verify="phone" autocomplete="off" placeholder="请输入负责人手机号" class="layui-input">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">仓库面积（m²）：</label>
				    	<div class="layui-input-inline">
				      		<input type="text" name="name" autocomplete="off" placeholder="请填写仓库面积" class="layui-input">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">容量（吨）：</label>
				    	<div class="layui-input-inline">
				      		<input type="text" name="name" autocomplete="off" placeholder="请填写仓库容量" class="layui-input">
				    	</div>
				    </div>
					<div class="layui-form-item">
						<label class="layui-form-label">仓库地址：</label>
						<div class="layui-input-inline">
							<select name="quiz1">
								<option value="">请选择省</option>
								<option value="浙江">浙江省</option>
								<option value="你的工号">江西省</option>
								<option value="你最喜欢的老师">福建省</option>
							</select>
						</div>
						<div class="layui-input-inline">
							<select name="quiz2">
								<option value="">请选择市</option>
								<option value="杭州">杭州</option>
								<option value="宁波">宁波</option>
								<option value="温州">温州</option>
								<option value="温州">台州</option>
								<option value="温州">绍兴</option>
							</select>
						</div>
						<div class="layui-input-inline">
							<select name="quiz3">
								<option value="">请选择县/区</option>
								<option value="西湖区">西湖区</option>
								<option value="余杭区">余杭区</option>
								<option value="拱墅区">临安市</option>
							</select>
						</div>						
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label"></label>
						<div class="layui-input-inline longer">
							<textarea name="quiz4" placeholder="请输入详细地址" class="layui-textarea"></textarea>
							
						</div>
					</div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">状态：</label>
				    	<div class="layui-input-inline">
							<input type="radio" name="using" value="启用" title="启用" checked="">
						    <input type="radio" name="using" value="停用" title="停用">
				    	</div>
				    </div>
				    <div class="layui-form-item">
				    	<label class="layui-form-label">备注：</label>
						<div class="layui-input-inline">
							<input type="text" placeholder="备注" class="layui-input">
						</div>
				    </div>
				    <div class="layui-form-item">
						<div class="layui-input-block">
							<button class="layui-btn" lay-submit="" lay-filter="addInfo">提交</button>
							<!-- <button type="reset" class="layui-btn layui-btn-primary" lay-reset="" lay-filter="cancelInfo">取消</button> -->
							<a class="layui-btn layui-btn-primary" href="store-management.html">取消</a>
						</div>
					</div>
				</form>
			</div>
			<!-- 新增 -->

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