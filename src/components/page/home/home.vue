<template>
  <div class="content-con fl">
    <!-- say-hello -->
    <div class="say-hello bg-white">
      <p><strong>Hi!</strong></p>
      <p>{{ title }}</p>
    </div>
    <div class="nav-home clearfix">
      <dl v-for="item in navList" :key="item.url">
        <router-link :to="item.url">
          <dt><img :src="item.avatar"></dt>
          <dd>
            <h3>{{ item.title }}</h3>
            <p>{{ item.disc }}</p>
          </dd>
        </router-link>
      </dl>
    </div>
    <!-- say-hello -->
  </div>
</template>
<script>

import md5 from 'js-md5';
const a= md5('zhibangda2018-03-14 14:32:41');
console.log(a)
export default {

  data () {
    return {
      title: '欢迎来到优产到家后台管理系统~',
      navList: [{
        url: 'goodsList',
        avatar: 'static/images/ico-goods.png',
        title: '商品管理',
        disc: '快速查阅商品信息',
      }, {
        url: 'userList',
        avatar: 'static/images/ico-user.png',
        title: '新增用户',
        disc: '及时了解用户信息',
      }, {
        url: 'store',
        avatar: 'static/images/ico-inventory.png',
        title: '库存查询',
        disc: '库存信息，一目了然',
      }]
    }
  },
  components:{

  }
}
</script>
