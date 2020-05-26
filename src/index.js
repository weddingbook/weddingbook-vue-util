import cookie from './cookie';
import platformInfo from './platform';
import {
	sortObjectByKey,
	plunkSelectKey,
	arrayIntersect
} from './object';
import {
	addComma,
	removeComma,
	leaveOnlyNumber,
	autoHypenPhone,
	isPhoneNumber,
	escapeHtml
} from './string';

const install = (Vue, buildOptions = {}) => {
	Vue.prototype.$wbUtil = {
		cookie,
		platformInfo,
		sortObjectByKey,
		plunkSelectKey,
		arrayIntersect,
		addComma,
		removeComma,
		leaveOnlyNumber,
		autoHypenPhone,
		isPhoneNumber,
		escapeHtml
	};
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}
export default install;
