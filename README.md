# weddingbook-vue-util

## 설치 
```
npm install weddingbook-vue-util
```

## 등록
main.js
```
import Vue from 'vue';
import wbUtil from 'weddingbook-vue-util';

Vue.use(wbUtil);
```

## 사용법


cookie,
platformInfo,
sortObjectByKey,
plunkSelectKey,
arrayIntersect,

### Cookies
```
this.$wbUtil.cookie.set('myCookie', 'value');
this.$wbUtil.cookie.get('myCookie'); // value
```

### Platform Info
```
this.$wbUtil.platformInfo(); // return browser name, browser version, isMobile, computer os
```

### String Util

#### Comma 
```javascript
this.$wbUtil.addComma(10000); // 10,000
this.$wbUtil.removeComma('10,000'); // 10000
```

#### only number
```javascript
this.$wbUtil.leaveOnlyNumber('123-456ab-dca7ccx8 da9'); // 123456789 
```


#### phone number
```javascript
this.$wbUtil.autoHypenPhone('01012345678'); // 010-1234-5678
```
```html
<input type="tel" v-model="tel" @keyup="e => tel = this.$wbUtil.autoHypenPhone(e.target.value)">
```
