const _import = (path) => import(`@/components/page/${path}`);

const login = () => _import('login/login');
const Manage = () => _import('manage/index');
const home = () => _import('home/home');
const store = () => _import('store/store');
const storeDetails = () => _import('store/storeDetails');
const storeAdd = () => _import('store/storeAdd');
const storeIn = () => _import('store/storeIn');
const storeOut = () => _import('store/storeOut');
const storeKeepcheck = () => _import('store/storeKeepcheck');
const userList = () => _import('user/userList');
const agentList = () => _import('agent/agentList');
const agentAudit = () => _import('agent/agentAudit');
const terminalList = () => _import('terminal/terminalList');
const terminalAudit = () => _import('terminal/terminalAudit');
const goodsList = () => _import('goods/goodsList');
const goodsBrand = () => _import('goods/goodsBrand');
const goodsClassify = () => _import('goods/goodsClassify');
const orderList = () => _import('order/orderList');
const adList = () => _import('details/adList');
const artList = () => _import('details/artList');
const advertising = () => _import('details/advertising');
const appStart = () => _import('details/appStart');
const commenting = () => _import('details/commenting');
const system = () => _import('details/system');
const userDeal = () => _import('details/userDeal');
const userOpinion = () => _import('details/userOpinion');
const settleList = () => _import('settle/settleList');
const settleOnline = () => _import('settle/settleOnline');

export default [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: login
  },
  {
    path: '/home',
    component: Manage,
    children: [{
      path: '',
      component: home,
      meta: [],
    }, {
      path: '/home',
      component: home,
      meta: [],
    }, {
      path: '/store',
      component: store,
      meta: ['仓库']
    }, {
      path: '/storeDetails/:id',
      component: storeDetails,
      meta: ['仓库详情']
    }, {
      path: '/storeAdd',
      component: storeAdd,
      meta: ['仓库新增']
    }, {
      path: '/storeIn',
      component: storeIn,
      meta: ['入库']
    }, {
      path: '/storeOut',
      component: storeOut,
      meta: ['出库']
    }, {
      path: '/storeKeepcheck',
      component: storeKeepcheck,
      meta: ['库存盘点']
    }, {
      path: '/agentList',
      component: agentList,
      meta: ['代理商']
    }, {
      path: '/agentAudit',
      component: agentAudit,
      meta: ['代理商审核']
    }, {
      path: '/terminalList',
      component: terminalList,
      meta: ['终端店']
    }, {
      path: '/terminalAudit',
      component: terminalAudit,
      meta: ['终端店审核']
    }, {
      path: '/goodsList',
      component: goodsList,
      meta: ['商品管理']
    }, {
      path: '/goodsBrand',
      component: goodsBrand,
      meta: ['品牌管理']
    }, {
      path: '/goodsClassify',
      component: goodsClassify,
      meta: ['分类管理']
    }, {
      path: '/orderList',
      component: orderList,
      meta: ['订单']
    }, {
      path: '/details',
      component: adList,
      meta: ['广告管理']
    }, {
      path: '/adList',
      component: adList,
      meta: ['广告管理']
    }, {
      path: '/artList',
      component: artList,
      meta: ['文章管理']
    }, {
      path: '/advertising',
      component: advertising,
      meta: ['广告位管理']
    }, {
      path: '/appStart',
      component: appStart,
      meta: ['APP启动页']
    }, {
      path: '/system',
      component: system,
      meta: ['系统公告']
    }, {
      path: '/commenting',
      component: commenting,
      meta: ['评论管理']
    }, {
      path: '/userOpinion',
      component: userOpinion,
      meta: ['app用户意见与反馈']
    }, {
      path: '/userDeal',
      component: userDeal,
      meta: ['用户协议']
    }, {
      path: '/settleList',
      component: settleList,
      meta: ['结算']
    }, {
      path: '/settleOnline',
      component: settleOnline,
      meta: ['线上结算']
    }, {
      path: '/userList',
      component: userList,
      meta: ['用户']
    }]
  }

]
