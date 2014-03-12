ClassExtend.js
=========

Class extends mechanism.

# Document

https://github.com/uupaa/ClassExtend.js/wiki/ClassExtend

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

# for Developers

1. Install development dependency tools

    ```sh
    $ brew install closure-compiler
    $ brew install node
    $ npm install -g plato
    ```

2. Clone Repository and Install

    ```sh
    $ git clone git@github.com:uupaa/ClassExtend.js.git
    $ cd ClassExtend.js
    $ npm install
    ```

3. Build and Minify

    `$ npm run build`

4. Test

    `$ npm run test`

5. Lint

    `$ npm run lint`

