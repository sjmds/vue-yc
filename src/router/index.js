import App from '../App'

const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const store = r => require.ensure([], () => r(require('@/page/store/store')), 'store')
const agentList = r => require.ensure([], () => r(require('@/page/agent/agentList')), 'agentList')
const terminalList = r => require.ensure([], () => r(require('@/page/terminal/terminalList')), 'terminalList')
const goodsList = r => require.ensure([], () => r(require('@/page/goods/goodsList')), 'goodsList')
const orderList = r => require.ensure([], () => r(require('@/page/order/orderList')), 'orderList')
const adList = r => require.ensure([], () => r(require('@/page/details/adList')), 'adList')
const artList = r => require.ensure([], () => r(require('@/page/details/artList')), 'artList')
const settleList = r => require.ensure([], () => r(require('@/page/settle/settleList')), 'settleList')
const userList = r => require.ensure([], () => r(require('@/page/user/userList')), 'userList')


export default [
	{
		path: '/',
		component: login,	  	
	},
	{
		path: '/home',					   
	    component: home,
	    name:'',   
		children: [{
			path: '',
			component: home,
			meta: []
		},{
			path: '/store',					   
	    	component: store,
			meta: ['仓库']
		},{
			path: '/agentList',					   
	    	component: agentList,
			meta: ['代理商']
		},{
			path: '/terminalList',					   
	    	component: terminalList,
			meta: ['终端店']
		},{
			path: '/goodsList',					   
	    	component: goodsList,
			meta: ['商品']
		},{
			path: '/details',					   
	    	component: adList,
			meta: ['内容'],
			children: [{
				path: 'adList',					   
		    	component: adList,
				meta: ['内容','广告管理']
			},{
				path: 'artList',					   
		    	component: artList,
				meta: ['内容','文章管理']
			}]
		},{
			path: '/settleList',					   
	    	component: settleList,
			meta: ['结算']
		},{
			path: '/userList',					   
	    	component: userList,
			meta: ['用户']
		}]
	}
	
]

