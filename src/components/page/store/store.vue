<template>  

	<div class="content-con fl">
		<div class="bg-white content-padding">
			<!-- 切换 -->
			<div class="sy-tab clearfix">
				<ul>
					<li class="on"><router-link to="store">仓库管理</router-link></li>
					<li><router-link to="storeAdd">新增</router-link></li>
				</ul>
			</div>
			<!-- 切换 -->
			<div class="sline"></div>
			<!-- 查询 -->
			
			<div class="clearfix">
				<el-form :inline="true" :model="formStore" class="demo-form-inline">
				  
				  <el-form-item label="省份:">
				    <el-select v-model="formStore.area1">
				      <el-option label="全部" value="全部"></el-option>
				      <el-option label="四川省" value="四川省"></el-option>
				      <el-option label="浙江省" value="浙江省"></el-option>
				      <el-option label="江西省" value="江西省"></el-option>
				      <el-option label="福建省" value="福建省"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="市区:">
				    <el-select v-model="formStore.area2">
				      <el-option label="全部" value="全部"></el-option>
				      <el-option label="成都市" value="成都市"></el-option>
				      <el-option label="杭州" value="杭州"></el-option>
				      <el-option label="宁波" value="宁波"></el-option>
				      <el-option label="温州" value="温州"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="区县:">
				    <el-select v-model="formStore.area3">
				      <el-option label="全部" value="全部"></el-option>
				      <el-option label="锦江区" value="锦江区"></el-option>
				      <el-option label="西湖区" value="西湖区"></el-option>
				      <el-option label="余杭区" value="余杭区"></el-option>
				      <el-option label="拱墅区" value="拱墅区"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="仓库名称">
				    <el-input v-model="formStore.title" placeholder="请输入仓库名称"></el-input>
				  </el-form-item>
				  <el-form-item label="状态:">
				    <el-select v-model="formStore.state">
				      <el-option label="全部" value="全部"></el-option>
				      <el-option label="启用" value="启用"></el-option>
				      <el-option label="禁用" value="禁用"></el-option>				      
				    </el-select>
				  </el-form-item>
				  <el-form-item label="活动时间">
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="formStore.date1" style="width: 100%;"></el-date-picker>
				    </el-col>
				    <el-col class="date-line" :span="2">-</el-col>
				    <el-col :span="11">
				      <el-date-picker type="date" placeholder="选择日期" v-model="formStore.date2" style="width: 100%;"></el-date-picker>
				    </el-col>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="onSubmit">查询</el-button>
				  </el-form-item>
				</el-form>
			</div>
			<!-- 查询 -->
			<div class="sline"></div>
			<!-- 上下架 -->
			<div class="goodsAction clearfix">
				<ul>
					<li>启用</li>
					<li>禁用</li>
					<li>删除</li>
				</ul>
			</div>
			<!-- table -->
			<div class="clearfix">				
			  <el-table ref="multipleTable" :data="tableStore" border tooltip-effect="dark" style="width: 100%;">  
			    <el-table-column type="expand">
			      <template scope="props">
			        <el-form label-position="left" inline class="demo-table-expand" :gutter="15">
			          <el-form-item class="el-col-10" label="仓库编号：">
			            <span>{{ props.row.storeNum }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="仓库名称：">
			            <span>{{ props.row.storeTitle }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="仓库类型：">
			            <span>{{ props.row.storeType }}</span>
			          </el-form-item> 
			          <el-form-item class="el-col-10" label="仓库负责人：">
			            <span>{{ props.row.storePerson }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="联系电话：">
			            <span>{{ props.row.storeTel }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="面积（m²）：">
			            <span>{{ props.row.storeArea }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="容量（吨）：">
			            <span>{{ props.row.storeDun }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="仓库地址：">
			            <span>{{ props.row.storeAddress }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="添加时间：">
			            <span>{{ props.row.storeDate }}</span>
			          </el-form-item>
			          <el-form-item class="el-col-10" label="状态：">
			            <span>{{ props.row.storeState ? '<i class="ico-using"></i>启用':'<i class="ico-no-using"></i>禁用'}}</span>
			          </el-form-item>
			        </el-form>
			      </template>
			    </el-table-column>
			    <el-table-column type="selection"></el-table-column>
			    <el-table-column prop="storeNum" label="仓库编号"></el-table-column>
			    <el-table-column prop="storeTitle" label="仓库名称"></el-table-column>
			    <el-table-column prop="storeType" label="仓库类型"></el-table-column>
			    <el-table-column prop="storePerson" label="仓库负责人"></el-table-column>
			    <el-table-column prop="storeTel" label="联系电话"></el-table-column>
			    <el-table-column prop="storeArea" label="面积（m²）"></el-table-column>
			    <el-table-column prop="storeDun" label="容量（吨）"></el-table-column>
			    <el-table-column prop="storeAddress" label="仓库地址"></el-table-column>
			    <el-table-column prop="storeDate" label="添加时间"></el-table-column>
			    <el-table-column prop="storeState" label="状态">
			      <template scope="scope">
			      	scope.storeState ? '<i class="ico-using"></i>启用':'<i class="ico-no-using"></i>禁用'
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      <template scope="scope">
			      	<router-link class="blue" to="userDetails">详情</router-link>
			      </template>
			    </el-table-column>
			  </el-table>				
			</div>
			<div class="data-page"></div>

		</div>
	</div>

</template>
<style>

</style>
<script>

export default {
	data() {
	    return {
		    formStore: {
		    	area1:'',
		    	area2:'',
		    	area3:'',
		    	title:'',
		    	state:'',
		    	date1:'',
		    	date2:''
		    },
		    tableStore: [{
				storeNum:"001",
				storeTitle:"青白江直销库",
				storeType:"米面油",
				storePerson:"王海",
				storeTel:"13021425213",
				storeArea:"1000",
				storeDun:"100",
				storeAddress:"四川省 成都市 青白江区 某某详细街道地址",
				storeDate: '2017/5/18',
				storeState:true
			}, {
				storeNum:"002",
				storeTitle:"青白江直销库",
				storeType:"米面油",
				storePerson:"王海",
				storeTel:"13021425213",
				storeArea:"888",
				storeDun:"98",
				storeAddress:"四川省 成都市 青白江区 某某详细街道地址",
				storeDate: '2017/5/22',
				storeState:false
			}, {
				storeNum:"003",
				storeTitle:"青白江直销库",
				storeType:"米面油",
				storePerson:"王海",
				storeTel:"13021425213",
				storeArea:"978",
				storeDun:"96",
				storeAddress:"四川省 成都市 青白江区 某某详细街道地址",
				storeDate: '2017/5/31',
				storeState:true
			}, {
				storeNum:"004",
				storeTitle:"青白江直销库",
				storeType:"米面油",
				storePerson:"王海",
				storeTel:"13021425213",
				storeArea:"999",
				storeDun:"99",
				storeAddress:"四川省 成都市 青白江区 某某详细街道地址",
				storeDate: '2017/5/20',
				storeState:false
			}]
	    }
	},
	methods: {
	    onSubmit() {
	    	console.log('submit!');
	    }
	    
	}
}
</script>