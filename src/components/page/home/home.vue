<template>  
  <div class="content-con fl">
    <!-- say-hello -->
    <div class="say-hello bg-white">
      <p><strong>Hi!</strong></p>
      <p>欢迎来到优产到家后台管理系统~</p>
    </div>
    <div class="nav-home clearfix">
      <dl>
        <router-link to="goodsList">
          <dt><img src="static/images/ico-goods.png"></dt>
          <dd>
            <h3>商品管理</h3>
            <p>快速查阅商品信息</p>
          </dd>
        </router-link>
      </dl>
      <dl>
        <router-link to="userList">
          <dt><img src="static/images/ico-user.png"></dt>
          <dd>
            <h3>新增用户</h3>
            <p>及时了解用户信息</p>
          </dd>        
        </router-link>
      </dl>
      <dl>
        <router-link to="store">
          <dt><img src="static/images/ico-inventory.png"></dt>
          <dd>
            <h3>库存查询</h3>
            <p>库存信息，一目了然</p>
          </dd>        
        </router-link>
      </dl>
    </div>
    <!-- say-hello -->
  </div>
</template>
<script>


export default {
  
  data () {
    return {
      
      
    }
  },
  components:{
    
  }
}
</script>

