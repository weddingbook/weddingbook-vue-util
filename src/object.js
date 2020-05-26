const ArrayProto = Array.prototype;
const ObjProto = Object.prototype;

//object
const sortObjectByKey = (obj, order) => {
	// key값을 기준으로 sort하여 key와 value값을 가진 배열로 리턴
	const keys = Object.keys(obj);
	const result = [];

	sort(keys, order);
	keys.forEach(key => {
		result.push([ key, obj[key] ]);
	});
	return result;
}
const sort = (array, order) => {
	// compare callback function 기본으로 적용된 sort
	const fnc = function(a, b) {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	}
	const sorted = array.sort(fnc);
	if (order === 'desc') return sorted.reverse();

	return sorted;
}
const plunkSelectKey = (array, key) => {
	// object가 담긴 배열에서 특정 키값의 value를 추출
	const result = [];
	array.forEach(v => {
		result.push(v[key]);
	});
	return result;
}
const arrayIntersect = () => {
	// 배열들의 각 요소들 중 중복 값 배열을 반환
	if (arguments.length < 2) {
		throw new TypeError('need' + 2 - arguments.length + ' more argument ');
	}
	for (let al = 0; al < arguments.length; al++) {
		if (!isArray(arguments[al])) {
			throw new TypeError('arguments[' + al + '] is not array');
		}
	}
	const arrs = ArrayProto.slice.call(arguments);
	const result = arrs.shift().filter(v => {
		return arrs.every(a => {
			return a.indexOf(v) !== -1;
		});
	});
	return result;
}

export {
	sortObjectByKey,
	plunkSelectKey,
	arrayIntersect
}
