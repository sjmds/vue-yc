import App from '../App'

const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const store = r => require.ensure([], () => r(require('@/page/store/store')), 'store')

export default [
	{
		path: '/',
		component: home,	  	
	},
	{
		path: '/login',			
	    component: login
	},
	{
		path: '/home',					   
	    component: home,	   
		children: [{
			path: '',
			component: home,
			meta: ['首页']
		},
		{
			path: '/store',					   
	    	component: store,
			meta: ['仓库']
		}]
	}
	
]

