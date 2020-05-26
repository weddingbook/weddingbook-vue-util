const addComma = num => {
	return ('' + num).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
// 숫자에 ',' 삭제하여 number형태로 return
const removeComma = str => {
	return parseInt(str.replace(/,/g, ''), 10);
}
// 숫자를 제외하고 전부 삭제해서 return
const leaveOnlyNumber = (val, except) => {
	const r = new RegExp( '[^0-9' + (except ? '\\' + except : '') + ']', 'gi' );
	return val.replace(r, '');
}
/**
 * @description 핸드폰 번호 자동으로 하이픈 처리
 * @param  {string} str 전화번호
 * @return {string}
 */
const autoHypenPhone = str => {
	str = str.replace(/[^0-9]/g, '');
	let result = '';
	if (str.length < 4) {
		return str;
	} else if (str.length < 7) {
		result += str.substr(0, 3);
		result += '-';
		result += str.substr(3);
		return tmp;
	} else if (str.length < 11) {
		result += str.substr(0, 3);
		result += '-';
		result += str.substr(3, 3);
		result += '-';
		result += str.substr(6);
		return tmp;
	} else {
		result += str.substr(0, 3);
		result += '-';
		result += str.substr(3, 4);
		result += '-';
		result += str.substr(7);
		return tmp;
	}
}

/**
 * @description 휴대폰 번호 정규식 체크
 * @param {string} str 전화번호
 * @return {boolean}
 */
const isPhoneNumber = str => {
	var reg = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;
	return reg.test(str);
}

/**
 * @description 특정 기호 convert
 * @param  {string} str 문자열
 * @return {string}     컨비팅 된 문자열
 */
const escapeHtml = (str, arr) => {
	const entityMap = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
		'/': '&#47;',
		'`': '&#96;',
		'=': '&#61;'
	};
	return str.replace(/[&<>"'`=\/]/g, s => {
		if( !!arr && arr.indexOf(s) === -1 ) {
			return s;
		}
		return entityMap[s];
	});
}

export {
	addComma,
	removeComma,
	leaveOnlyNumber,
	autoHypenPhone,
	isPhoneNumber,
	escapeHtml
}
