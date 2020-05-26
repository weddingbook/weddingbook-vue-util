

/**
 * @typedef platform
 * @type {Object}
 * @property {string} name 브라우저 이름
 * @property {string} ver 브라우저 버전
 * @property {boolean} isMobile 모바일 체크
 * @property {string} os os 이름
 */

/**
 * @description 브라우저 정보, os 정보 등 객체 반환하는 함수
 * @return {platform}
 */
const platformInfo = () => {
	var ua = navigator.userAgent.toLowerCase(),
		av = navigator.appVersion,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
		isMobile,
		osName = 'Unknown';


	// mobile 체크
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
		isMobile = true;
	} else {
		isMobile = false;
	}

	// os 체크
	if (!isMobile) {
		if (/Win/i.test(av)) {
			osName = 'Windows';
		}
		if (/Mac/i.test(av)) {
			osName = 'MacOS';
		}
		if (/X11/i.test(av)) {
			osName = 'UNIX';
		}
		if (/Linux/i.test(av)) {
			osName = 'Linux';
		}
	} else {
		if (/Android/i.test(av)) {
			osName = 'android';
		}
		if (/iPhone|iPad|iPod/i.test(av)) {
			osName = 'ios';
		}
		if (/BlackBerry/i.test(av)) {
			osName = 'BlackBerry'
		}
	}

	// ie 체크 support 9+
	if (/trident/i.test(ua)) {
		var ver;

		if (ua.indexOf('Trident/7.0') > 0) {
			ver = '11';
		} else if (ua.indexOf('Trident/6.0') > 0) {
			ver = '10';
		} else if (ua.indexOf('Trident/5.0') > 0) {
			ver = '9';
		} else if (ua.indexOf('Trident/4.0') > 0) {
			ver = '8';
		} else {
			ver = 'Unknown';  // not IE8, 9, 10, 11
		}

		return {
			name: 'IE',
			version: ver,
			isMobile: isMobile,
			os: osName
		};
	}

	// opera 체크
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR|Edge\/(\d+)/)
		if (tem != null) {
			return {
				name: 'Opera',
				version: tem[1],
				isMobile: isMobile,
				os: osName
			};
		}
	}

	M = M[2] ? [M[1], M[2]] : [navigator.appName, av, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		M.splice(1, 1, tem[1]);
	}

	return {
		name: M[0],
		version: M[1],
		isMobile: isMobile,
		os: osName
	};
}

export default platformInfo;
