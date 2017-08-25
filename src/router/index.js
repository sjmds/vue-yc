import App from '../App'

const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/page/home/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const store = r => require.ensure([], () => r(require('@/page/store/store')), 'store')
const storeIn = r => require.ensure([], () => r(require('@/page/store/storeIn')), 'storeIn')
const storeOut = r => require.ensure([], () => r(require('@/page/store/storeOut')), 'storeOut')
const storeKeepcheck = r => require.ensure([], () => r(require('@/page/store/storeKeepcheck')), 'storeKeepcheck')
const userList = r => require.ensure([], () => r(require('@/page/user/userList')), 'userList') 
const agentList = r => require.ensure([], () => r(require('@/page/agent/agentList')), 'agentList')
const agentAudit = r => require.ensure([], () => r(require('@/page/agent/agentAudit')), 'agentAudit')
const terminalList = r => require.ensure([], () => r(require('@/page/terminal/terminalList')), 'terminalList')
const terminalAudit = r => require.ensure([], () => r(require('@/page/terminal/terminalAudit')), 'terminalAudit')
const goodsList = r => require.ensure([], () => r(require('@/page/goods/goodsList')), 'goodsList')
const goodsBrand = r => require.ensure([], () => r(require('@/page/goods/goodsBrand')), 'goodsBrand')
const goodsClassify = r => require.ensure([], () => r(require('@/page/goods/goodsClassify')), 'goodsClassify')
const orderList = r => require.ensure([], () => r(require('@/page/order/orderList')), 'orderList')
const adList = r => require.ensure([], () => r(require('@/page/details/adList')), 'adList')
const artList = r => require.ensure([], () => r(require('@/page/details/artList')), 'artList')
const advertising = r => require.ensure([], () => r(require('@/page/details/advertising')), 'advertising')
const appStart = r => require.ensure([], () => r(require('@/page/details/appStart')), 'appStart')
const commenting = r => require.ensure([], () => r(require('@/page/details/commenting')), 'commenting')
const system = r => require.ensure([], () => r(require('@/page/details/system')), 'system')
const userDeal = r => require.ensure([], () => r(require('@/page/details/userDeal')), 'userDeal')
const userOpinion = r => require.ensure([], () => r(require('@/page/details/userOpinion')), 'userOpinion')
const settleList = r => require.ensure([], () => r(require('@/page/settle/settleList')), 'settleList')
const settleOnline = r => require.ensure([], () => r(require('@/page/settle/settleOnline')), 'settleOnline')



export default [
	{
		path: '/',
		redirect: '/login'	  	
	},{
		path: '/login',
		component:login	  	
	},
	{
		path: '/manage',					   
	    component: manage,	    
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/store',					   
	    	component: store,
			meta: ['仓库']
		},{
			path: '/storeIn',					   
	    	component: storeIn,
			meta: ['入库']
		},{
			path: '/storeOut',					   
	    	component: storeOut,
			meta: ['出库']
		},{
			path: '/storeKeepcheck',					   
	    	component: storeKeepcheck,
			meta: ['库存盘点']			
		},{
			path: '/agentList',					   
	    	component: agentList,
			meta: ['代理商']
		},{
			path: '/agentAudit',					   
	    	component: agentAudit,
			meta: ['代理商审核']			
		},{
			path: '/terminalList',					   
	    	component: terminalList,
			meta: ['终端店']
		},{
			path: '/terminalAudit',					   
	    	component: terminalAudit,
			meta: ['终端店审核']		
		},{
			path: '/goodsList',					   
	    	component: goodsList,
			meta: ['商品管理']
		},{
			path: '/goodsBrand',					   
	    	component: goodsBrand,
			meta: ['品牌管理']
		},{
			path: '/goodsClassify',					   
	    	component: goodsClassify,
			meta: ['分类管理']			
		},{
			path: '/orderList',					   
	    	component: orderList,
			meta: ['订单']
		},{
			path: '/details',					   
	    	component: adList,
			meta: ['广告管理']
		},{
			path: '/adList',					   
	    	component: adList,
			meta: ['广告管理']
		},{
			path: '/artList',					   
	    	component: artList,
			meta: ['文章管理']
		},{
			path: '/advertising',					   
	    	component: advertising,
			meta: ['广告位管理']
		},{
			path: '/appStart',					   
	    	component: appStart,
			meta: ['APP启动页']
		},{
			path: '/system',					   
	    	component: system,
			meta: ['系统公告']
		},{
			path: '/commenting',					   
	    	component: commenting,
			meta: ['评论管理']
		},{
			path: '/userOpinion',					   
	    	component: userOpinion,
			meta: ['app用户意见与反馈']
		},{
			path: '/userDeal',					   
	    	component: userDeal,
			meta: ['用户协议']			
		},{
			path: '/settleList',					   
	    	component: settleList,
			meta: ['结算']
		},{
			path: 'settleOnline',					   
	    	component: settleOnline,
			meta: ['线上结算']			
		},{
			path: '/userList',					   
	    	component: userList,
			meta: ['用户']
		}]
	}
	
]

