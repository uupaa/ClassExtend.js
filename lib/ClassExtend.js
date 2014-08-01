(function() {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
if (Object["defineProperty"]) { // [ES5]
    if (!Function["prototype"]["extend"]) {
        Object["defineProperty"](Function["prototype"], "extend", {
            "value": ClassExtend
        });
    }
} else if (!Function["prototype"]["extend"]) {
    Function["prototype"]["extend"] = ClassExtend; // Function#extend(baseClass:Function):void
}

// --- implements ------------------------------------------
function ClassExtend(baseClass) { // @arg Function
                                  // @desc Function.prototype.extend(baseClass:Function)
    if (this["prototype"]["__proto__"]) { // [WebKit][Gecko][IE11+]
        this["prototype"]["__proto__"] = baseClass["prototype"];
    } else { // [ES3]
        var SubClass = this; // alias
        var VoidClass = function() {};

        VoidClass["prototype"] = baseClass["prototype"];
        SubClass["prototype"] = new VoidClass();
        SubClass["prototype"]["constructor"] = SubClass;
    }
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------

})();

