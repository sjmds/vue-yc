<template>
  <div class="content-con fl">
    <div class="bg-white content-padding">
      <!-- 切换 -->
      <div class="sy-tab clearfix">
        <ul>
          <li class="on">
            <router-link to="store">仓库管理</router-link>
          </li>
          <li>
            <router-link to="storeAdd">新增</router-link>
          </li>
        </ul>
      </div>
      <!-- 切换 -->
      <div class="sline"></div>
      <!-- 查询 -->
      <div class="clearfix">
        <el-form ref="formStore" :inline="true" :model="formStore" :rules="rules" class="demo-form-inline" label-width="110px">
          <el-form-item label="省份:" prop="address1"> 
            <el-select v-model="formStore.address1">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="四川省" value="四川省"></el-option>
              <el-option label="浙江省" value="浙江省"></el-option>
              <el-option label="江西省" value="江西省"></el-option>
              <el-option label="福建省" value="福建省"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="市区:" prop="address2">
            <el-select v-model="formStore.address2">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="成都市" value="成都市"></el-option>
              <el-option label="杭州" value="杭州"></el-option>
              <el-option label="宁波" value="宁波"></el-option>
              <el-option label="温州" value="温州"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="区县:" prop="address3">
            <el-select v-model="formStore.address3">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="锦江区" value="锦江区"></el-option>
              <el-option label="西湖区" value="西湖区"></el-option>
              <el-option label="余杭区" value="余杭区"></el-option>
              <el-option label="拱墅区" value="拱墅区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="仓库名称" prop="title">
            <el-input v-model="formStore.title" placeholder="请输入仓库名称"></el-input>
          </el-form-item>
          <el-form-item label="状态:" prop="state">
            <el-select v-model="formStore.state">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="启用" value="启用"></el-option>
              <el-option label="禁用" value="禁用"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="formStore.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="date-line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker type="date" placeholder="选择日期" v-model="formStore.date2" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formStore')">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 查询 -->
      <div class="sline"></div>
      <!-- 上下架 -->
      <div class="goodsAction clearfix">
        <ul>
          <li @click="startUse">启用</li>
          <li @click="disableUse">禁用</li>
          <li @click="delUse(tableStore)">删除</li>
        </ul>
      </div>
      <!-- table -->
      <div class="clearfix">
        <el-table ref="multipleTable" :data="tableStore"  @selection-change="handleSelectionChange" border tooltip-effect="dark" style="width: 100%;">
          <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand" :gutter="15">
                <el-form-item label="仓库编号：">
                  <span>{{ props.row.storeNum }}</span>
                </el-form-item>
                <el-form-item label="仓库名称：">
                  <span>{{ props.row.storeTitle }}</span>
                </el-form-item>
                <el-form-item label="仓库类型：">
                  <span>{{ props.row.storeType }}</span>
                </el-form-item>
                <el-form-item label="仓库负责人：">
                  <span>{{ props.row.storePerson }}</span>
                </el-form-item>
                <el-form-item label="联系电话：">
                  <span>{{ props.row.storeTel }}</span>
                </el-form-item>
                <el-form-item label="面积（m²）：">
                  <span>{{ props.row.storeArea }}</span>
                </el-form-item>
                <el-form-item label="容量（吨）：">
                  <span>{{ props.row.storeDun }}</span>
                </el-form-item>
                <el-form-item label="仓库地址：">
                  <span>{{ props.row.storeAddress }}</span>
                </el-form-item>
                <el-form-item label="添加时间：">
                  <span>{{ props.row.storeDate }}</span>
                </el-form-item>
                <el-form-item label="状态：">
                  <span v-if="props.row.storeState"><i class="ico-using"></i>启用</span>
                  <span v-else="props.row.storeState"><i class="ico-no-using"></i>禁用</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column> 
          <el-table-column type="selection" @selection-change="handleSelectionChange(val)"></el-table-column>
          <el-table-column prop="storeNum" label="仓库编号" sortable></el-table-column>
          <el-table-column prop="storeTitle" label="仓库名称" sortable></el-table-column>
          <el-table-column prop="storeType" label="仓库类型" sortable></el-table-column>
          <el-table-column prop="storePerson" label="仓库负责人" sortable></el-table-column>
          <el-table-column prop="storeDate" label="添加时间" sortable></el-table-column>
          <el-table-column prop="storeState" label="状态" sortable>
            <template scope="scope">
              <span v-if="scope.row.storeState"><i class="ico-using"></i>启用</span>
              <span v-else="scope.row.storeState"><i class="ico-no-using"></i>禁用</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120" align="center">
            <template scope="scope">             
              <el-button @click="storeDetails(scope.$index, scope.row)" type="text" size="small">详情</el-button>
              <el-button class="color-danger"
                @click.native.prevent="deleteRow(scope.$index, tableStore)"
                type="text" size="small"
                >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="data-page">
        <el-pagination @current-change="handleCurrentPage" layout="total,prev,pager, next, jumper" :total="100">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

</style>
<script>
export default {
  data() {
    return {
      formStore: {
        address1: '',
        address2: '',
        address3: '',
        title: '',
        state: '',
        date1: '',
        date2: ''        
      },
      rules: {
        address1:[
          { required: true, trigger: 'change' }
        ],
        address2:[
          { required: true, trigger: 'change' }
        ],
        address3:[
          { required: true, trigger: 'change' }
        ],
        title:[
          { required: true, trigger: 'blur' }
        ],
        state:[
          { required: true, trigger: 'change' }
        ],
        date1:[
          { required: true, type: 'date', trigger: 'change' }
        ],
        date2:[
          { required: true, type: 'date', trigger: 'change' }
        ]
      },
      //数据总数
      totalStore:'100',
      //要提交的数据
      multipleSelection:[],
      //表格数据
      tableStore: [{
        storeNum: "001",
        storeTitle: "青白江直销库1",
        storeType: "米面油1",
        storePerson: "王海1",
        storeTel: "13021425213",
        storeArea: "1000",
        storeDun: "100",
        storeAddress: "四川省 成都市 青白江区 某某详细街道地址",
        storeDate: '2017/5/18',
        storeState: true
      }, {
        storeNum: "002",
        storeTitle: "青白江直销库2",
        storeType: "米面油2",
        storePerson: "王海2",
        storeTel: "13021425212",
        storeArea: "888",
        storeDun: "98",
        storeAddress: "四川省 成都市 青白江区 某某详细街道地址",
        storeDate: '2017/5/22',
        storeState: false
      }, {
        storeNum: "003",
        storeTitle: "青白江直销库3",
        storeType: "米面油3",
        storePerson: "王海3",
        storeTel: "13021425211",
        storeArea: "978",
        storeDun: "96",
        storeAddress: "四川省 成都市 青白江区 某某详细街道地址",
        storeDate: '2017/5/31',
        storeState: true
      }, {
        storeNum: "004",
        storeTitle: "青白江直销库4",
        storeType: "米面油4",
        storePerson: "王海4",
        storeTel: "13021425210",
        storeArea: "999",
        storeDun: "99",
        storeAddress: "四川省 成都市 青白江区 某某详细街道地址",
        storeDate: '2017/5/20',
        storeState: false
      }],
      selectTableStore:null
    }
  },
  computed:{
    
  },
  methods: {
    addIndex(){
      const self=this;
      self.tableStore.forEach(function(item,index,arr){
        item.index=index;
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }, 
    storeDetails(index,row) {        
      this.$router.push({ path: 'storeDetails/'+row.storeNum});
    },
    deleteRow(index,rows) {
      this.$confirm('确定删除该数据吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {        
        let r=rows.splice(index, 1);
        console.log(r)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(val){
      this.selectTableStore=val;
    },
    handleCurrentPage(val) {
      console.log(`当前页:${val}`)
    },
    startUse(){     
      const self=this; 
      if(!self.selectTableStore){
        self.$message({
          message: '请先选择你要操作的仓库',
          type: 'warning'
        });  
      }else{    
        self.selectTableStore.forEach(function(item,index){
          item.storeState=true;
        });
      }

    },
    disableUse(){
      const self=this;       
      if(!self.selectTableStore){
        self.$message({
          message: '请先选择你要操作的仓库',
          type: 'warning'
        });  
      }else{
        self.selectTableStore.forEach(function(item,index){
          item.storeState=false;
        });
      } 
    },
    delUse(rows){      
      const self=this; 
      if(!self.selectTableStore){
        self.$message({
          message: '请先选择你要操作的仓库',
          type: 'warning'
        });  
      }else{  
        self.selectTableStore.forEach(function(item,index,arr){
          
          self.deleteRow(index,rows)
          
        });
      }
    }
    
   
  }
}

</script>
