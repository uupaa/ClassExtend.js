// ClassExtend.js: Class Extends

(function(global) {

// --- define ----------------------------------------------
// --- variable --------------------------------------------
// --- interface -------------------------------------------
if (Object.defineProperty) { // [ES5]
    Object.defineProperty(Function.prototype, "extend", {
        value: ClassExtend
    });
} else {
    Function.prototype.extend = ClassExtend; // Function#extend(baseClass:Function):void
}

// --- implement -------------------------------------------
function ClassExtend(baseClass) { // @arg Function: baseClass
                                  // @help: ClassExtend
                                  // @desc: Function#extend(baseClass:Function)
    if (this.prototype.__proto__) { // [WebKit][Gecko][IE11+]
        this.prototype.__proto__ = baseClass.prototype;
    } else { // [ES3]
        var SubClass = this; // alias
        var VoidClass = function() {};

        VoidClass.prototype = baseClass.prototype;
        SubClass.prototype = new VoidClass();
        SubClass.prototype.constructor = SubClass;
    }
}

// --- export ----------------------------------------------

})(this.self || global);