# weddingbook-vue-util

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```a# weddingbook-vue-util

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
```
this.$wbUtil.cookie.set('myCookie', 'value');
this.$wbUtil.cookie.get('myCookie'); // value
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
