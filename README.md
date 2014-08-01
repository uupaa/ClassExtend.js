# ClassExtend.js [![Build Status](https://travis-ci.org/uupaa/ClassExtend.js.png)](http://travis-ci.org/uupaa/ClassExtend.js)

[![npm](https://nodei.co/npm/uupaa.classextend.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.classextend.js/)

Class extends mechanism.

## Document

- [ClassExtend.js wiki](https://github.com/uupaa/ClassExtend.js/wiki/ClassExtend)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))

## How to use

### Browser

```js
<script src="lib/ClassExtend.js">
<script>
function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
</script>
```

### WebWorkers

```js
importScripts("lib/ClassExtend.js");

function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
```

### Node.js

```js
var ClassExtend = require("lib/ClassExtend.js");

function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
```

