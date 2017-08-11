import App from '../App'

const login = r => require.ensure([], () => r(require('../page/login/login.vue')), 'login')
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const store = r => require.ensure([], () => r(require('../page/store/store.vue')), 'store')


export default [{
	path: '/',
	component: App,
  	children: [  		
  		{
			path: '/home',					   
		    component: home
		},
		{
			path: '/login',					   
		    component: login
		},
		{
			path: '/store',					   
		    component: store
		}
	]
}]

