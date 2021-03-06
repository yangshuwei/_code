import createMatcher from './create-matcher';
import HashHistory from './history/hash';
import BowserHistory from './history/history';
import install from './install';

class VueRouter {
	constructor(options) {
		this.matcher = createMatcher(options.routes || []);
		options.mode = options.mode || 'hash';
		switch (options.mode) {
			case 'hash':
				this.history = new HashHistory(this)
				break;

			case 'history':
				this.history = new BowserHistory(this);
				break;
		}
		this.beforeHooks = [];
	}
	push(to) {
		this.history.push(to)
	}
	match(location) {
		return this.matcher.match(location)
	}
	init(app) {

		const history = this.history;
		// 监听hash值变化 默认跳转到对应的路径中

		// 监听路由变化 hashchange
		const setUpHashListener = () => {
			history.setupListener(); // 监听路由变化 hashchange
		}
		// 初始化 会先获得当前hash值 进行跳转, 并且监听hash变化
		history.transitionTo(
			history.getCurrentLocation(), // 获取当前的位置
			setUpHashListener //监听路由变化，变了就跳转路由
		)

		history.listen((route) => { // 每次路径变化 都会调用此方法  订阅
			app._route = route;
		})
		// setupListener  放到hash里取
		// transitionTo  放到base中 做成公共的方法
		// getCurrentLocation // 放到自己家里  window.location.hash / window.location.path
	}
	beforeEach(fn) {

		this.beforeHooks.push(fn) //订阅
	}
}
VueRouter.install = install;
export default VueRouter;


