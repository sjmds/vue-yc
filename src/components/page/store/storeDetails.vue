<template>

  <div class="content-con fl">
    <div class="bg-white content-padding">
      <!-- 切换 -->
      <div class="sy-tab clearfix">
        <ul>
          <li>
            <router-link to="/store">仓库管理</router-link>
          </li>
          <li>
            <router-link to="/storeAdd">新增</router-link>
          </li>
          <li class="on">详情</li>

        </ul>
      </div>
      <!-- 切换 -->
      <div class="sline"></div>
      <!-- 新增 -->
      <div class="add-info-form clearfix">
        <el-form ref="formAdd" :model="formAdd" :rules="rules" label-width="135px">
          <el-form-item label="仓库编号：" prop="serialNumber">
            <el-input type="number" v-model="formAdd.serialNumber" placeholder="请输入仓库编号"></el-input>
          </el-form-item>
          <el-form-item label="仓库名称：" prop="title">
            <el-input v-model="formAdd.title" placeholder="请输入仓库名称"></el-input>
          </el-form-item>
          <el-form-item label="仓库类型：" prop="storeType">
            <el-select v-model="formAdd.storeType" placeholder="请选择仓库类型">
              <el-option label="米面油" value="米面油"></el-option>
              <el-option label="休闲食品" value="休闲食品"></el-option>
              <el-option label="统仓" value="统仓"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="仓库负责人：" prop="person">
            <el-input v-model="formAdd.person" placeholder="请输入仓库负责人"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="tel">
            <el-input type="tel" v-model="formAdd.tel" placeholder="请输入负责人手机号"></el-input>
          </el-form-item>
          <el-form-item label="仓库面积（m²）：" prop="area">
            <el-input type="number" v-model="formAdd.area" placeholder="请填写仓库面积"></el-input>
          </el-form-item>
          <el-form-item label="容量（吨）：" prop="dun">
            <el-input type="number" v-model="formAdd.dun" placeholder="请填写仓库容量"></el-input>
          </el-form-item>
          <el-form-item label="省份:" prop="address1">
            <el-select v-model="formAdd.address1">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="四川省" value="四川省"></el-option>
              <el-option label="浙江省" value="浙江省"></el-option>
              <el-option label="江西省" value="江西省"></el-option>
              <el-option label="福建省" value="福建省"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="市区:" prop="address2">
            <el-select v-model="formAdd.address2">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="成都市" value="成都市"></el-option>
              <el-option label="杭州" value="杭州"></el-option>
              <el-option label="宁波" value="宁波"></el-option>
              <el-option label="温州" value="温州"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="区县:" prop="address3">
            <el-select v-model="formAdd.address3">
              <el-option label="全部" value="全部"></el-option>
              <el-option label="锦江区" value="锦江区"></el-option>
              <el-option label="西湖区" value="西湖区"></el-option>
              <el-option label="余杭区" value="余杭区"></el-option>
              <el-option label="拱墅区" value="拱墅区"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="formAdd.address4" placeholder="请输入详细地址"></el-input>
          </el-form-item>
          <el-form-item label="状态：">
            <el-radio-group v-model="formAdd.state">
              <el-radio label="1">启用</el-radio>
              <el-radio label="0">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input v-model="formAdd.beizhu" placeholder="备注"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('formAdd')">保存</el-button>
            <el-button @click="resetForm('formAdd')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 新增 -->
      <!-- 详情 -->
      <div class="xline"></div>
      <!-- 仓库数量 -->
      <div class="store-keep clearfix">
        <dl>
          <dt>仓库产品数量：<span>2310</span></dt>
          <dd>
            <p><router-link to="/storeAdd">入库</router-link></p>
            <p><router-link to="/storeOut">出库</router-link></p>
            <p><router-link to="/storeKeepcheck">盘点</router-link></p>
          </dd>
        </dl>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      var checkTel = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话不能为空'));
        }
        setTimeout(() => {
          if (!/^1\d{10}$/.test(value)) {
            callback(new Error('请输入正确的手机号'));
          } else {
            callback();            
          }
        }, 1000);
      };
      return {
        formAdd: {
          serialNumber: '',
          title: '',
          storeType: '',
          person: '',
          tel: '',
          area: '',
          dun: '',
          address1: '',
          address2: '',
          address3: '',
          address4: '',
          state: '',
          beizhu: ''
        },
        rules: {
          serialNumber:[
            { required: true, message: '请输入仓库编号', trigger: 'blur' }
          ],
          title:[
            { required: true, message: '请输入仓库名称', trigger: 'blur' }
          ],
          storeType:[
            { required: true, message: '请选择仓库类型', trigger: 'change' }
          ],
          person:[
            { required: true,message: '请输入仓库负责人'}
          ],
          tel:[
            {validator:checkTel, trigger: 'blur'}
          ],
          area:[
            { required: true,message: '请填写仓库面积'}
          ],
          dun:[
            { required: true,message: '请填写仓库容量'}
          ],
          address1:[
            { required: true,message: '请选择'}
          ],
          address2:[
            {}
          ],
          address3:[ 
            {}
          ]
          
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.formAdd)
            alert('submit!');

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>