=========
ClassExtend.js
=========

![](https://travis-ci.org/uupaa/ClassExtend.js.png)

Class extends mechanism.

# Document

- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [ClassExtend.js wiki](https://github.com/uupaa/ClassExtend.js/wiki/ClassExtend)


# How to use

```js
<script src="lib/ClassExtend.js">
<script>
// for Browser
function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
</script>
```

```js
// for WebWorkers
importScripts("lib/ClassExtend.js");

function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
```

```js
// for Node.js
var ClassExtend = require("lib/ClassExtend.js");

function ClassFoo() {}
function ClassBar(arg) { ClassFoo.call(this, arg); }

ClassBar.extend(ClassFoo);
```
