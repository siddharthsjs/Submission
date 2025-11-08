var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a;
var _this = this;
// Start from Slide 66 
// Slide #71
console.log("***************************************************");
console.log("Loop scoping and fresh iterations");
var vals = [];
for (var x = 0; x < 4; x += 1) {
    vals.push(function () { return x; });
}
console.log("Using vars: " + vals.map(function (x) { return x(); }));
vals = [];
var _loop_1 = function (x_1) {
    vals.push(function () { return x_1; });
};
for (var x_1 = 0; x_1 < 4; x_1 += 1) {
    _loop_1(x_1);
}
console.log("Using lets: " + vals.map(function (x) { return x(); }));
console.log("***************************************************");
console.log("Object Consts");
var obj = { par: 3 };
console.log(obj);
try {
    // obj = 4; // Would cause TypeScript compilation error
}
catch (error) {
    console.log("Error when trying setting obj to value");
}
obj.par = 12;
console.log("Even though obj is constant, we can change value", obj);
Object.freeze(obj);
obj.par = 15;
console.log("Even though obj is now frozen, we can try to change value, but it wont", obj);
Object.seal(obj);
obj.par2 = 15;
console.log("Now obj is frozen & sealed, we can try to change value or add properties, but it wont", obj);
function demoFreezeSeal(obj) {
    "use strict";
    Object.freeze(obj);
    obj.par = 15;
    console.log("Even though obj is now frozen, we can try to change value, but it wont", obj);
    Object.seal(obj);
    obj.par2 = 15;
    console.log("Now obj is frozen & sealed, we can try to change value or add properties, but it wont", obj);
}
try {
    demoFreezeSeal(obj);
}
catch (error) {
    console.log("Error will be thrown in strict mode: ", error);
}
console.log("***************************************************");
console.log("String Templates");
var myname = "Seshagiri Sriram";
console.log("Using String Templates: ", "".concat(myname));
console.log("***************************************************");
console.log("Enhanced Object Literals and fns inside Object Literals");
var quadEq = [];
for (var x_2 = 1; x_2 <= 20; x_2++) {
    quadEq.push({ x: x_2, y: 2 * x_2 * x_2 - 5 * x_2 + 3 });
}
var foo = {
    f: function (x) {
        return x + 1;
    }
};
console.log("foo.f(4) - inside fn of object literal -> ", foo.f(4));
console.log(quadEq);
console.log("***************************************************");
console.log("My Fav Subject --> overriding and overloading");
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.toString = function () {
        return "In Class A";
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.toString = function () {
        return "In class B with call to super: " + _super.prototype.toString.call(this);
    };
    return B;
}(A));
var BObj = new B();
console.log(BObj.toString());
console.log("BOBJ --> " + BObj.__proto__);
console.log("B--> extended from --> " + B.prototype);
console.log("A--> extended from --> " + A.prototype);
console.log("B--> extended from --> " + B.prototype.__proto__);
console.log("A--> extended from --> " + A.prototype.__proto__);
function myFunc() { }
var originalToString = Function.prototype.toString;
myFunc.toString = function () {
    return "Custom: " + originalToString.call(this);
};
console.log("function myFunc toString() - not class :" + myFunc.toString());
console.log("***************************************************");
console.log("Symbols");
var js_obj = (_a = {
        name: "Sriram",
        age: 60,
        salary: 100
    },
    _a[Symbol.toPrimitive] = function (hint) {
        if (hint === "number") {
            return this.age;
        }
        if (hint === "default" || hint === "string") {
            return JSON.stringify(this);
        }
        return "";
    },
    _a);
console.log("STRING: " + "".concat(js_obj));
console.log("DEFAULT: ", (js_obj + ''));
console.log("NUMBER: " + (+js_obj));
console.log("Since you gave up: ", js_obj);
console.log("***************************************************");
console.log("Classes and Inheritance");
var Jedi = /** @class */ (function () {
    function Jedi(str) {
        this.forceIsDark = false;
        this.jediname = str;
    }
    Object.defineProperty(Jedi.prototype, "name", {
        get: function () {
            return this.jediname;
        },
        set: function (str) {
            this.jediname = str;
        },
        enumerable: false,
        configurable: true
    });
    Jedi.prototype.toString = function () {
        if (this.forceIsDark) {
            return "".concat(this.jediname, ": Join the dark side");
        }
        return "".concat(this.jediname, ": Fear is the path to the dark side");
    };
    return Jedi;
}());
var Sith = /** @class */ (function (_super) {
    __extends(Sith, _super);
    function Sith(str) {
        var _this = _super.call(this, str) || this;
        _this.forceIsDark = true;
        _this.name = str;
        return _this;
    }
    return Sith;
}(Jedi));
var yoda = new Jedi("Yoda");
var darth = new Sith("Darth Vader");
console.log(yoda.toString());
console.log(darth.toString());
console.log(darth.name, "is a Sith?", darth instanceof Sith);
console.log(darth.name, "is a Jedi?", darth instanceof Jedi);
console.log(yoda.name, "is a Sith?", yoda instanceof Sith);
console.log(yoda.name, "is a Jedi?", yoda instanceof Jedi);
console.log("***************************************************");
console.log("THE FOR LOOPS");
var arr = ['a', 'b', 'c'];
console.log("*** ---> The bad in loop ");
for (var i in arr) {
    if (arr.hasOwnProperty(i)) {
        console.log(i);
    }
}
console.log("*** ---> The good of loop ");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
console.log("*** ---> The better foreach loop ");
arr.forEach(function (x) { return console.log(x); });
var ratings = [5, 4, 5];
var sum = 0;
var asyncSumFunction = function (a, b) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, a + b];
}); }); };
var syncSumFunction = function (a, b) { return a + b; };
ratings.forEach(function (rating) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, asyncSumFunction(sum, rating)];
            case 1:
                sum = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
console.log("BAD async bummer: " + sum);
sum = 0;
ratings.forEach(function (rating) {
    sum = syncSumFunction(sum, rating);
});
console.log("Nice sync clean sum: " + sum);
var logArrayElements = function (element, index) {
    console.log("a[".concat(index, "] = ").concat(element));
};
[2, 5, , 9].forEach(logArrayElements);
console.log("Using Spreads/Rests: " + __spreadArray([], "abcd", true));
var a = __spreadArray([], "abcd", true);
console.log("isArray A?: " + Array.isArray(a));
var _b = "xy", a1 = _b[0], b1 = _b[1];
console.log("Destructuring: " + "".concat(a1, ", ").concat(b1));
console.log("Arrays from: " + "Array.from(\"12345\"): ".concat(Array.from("12345")));
console.log("***************************************************");
console.log("Iterators.....");
var it = [1, 2, 3][Symbol.iterator]();
var result = it.next();
while (result.done !== true) {
    console.log(" iterator value: " + result.value + ", Done status: " + result.done);
    result = it.next();
}
function somecode(n) {
    var _a;
    return _a = {},
        _a[Symbol.iterator] = function () {
            var i = 0;
            return {
                next: function () {
                    return {
                        done: i > n ? true : false,
                        value: i++
                    };
                }
            };
        },
        _a;
}
for (var _c = 0, _d = somecode(10); _c < _d.length; _c++) {
    var i = _d[_c];
    console.log("Some code obfuscated: " + i);
}
console.log("***************************************************");
console.log("Arrays..Yet Again...");
var arrayLike = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    'length': 4
};
console.log(Array.from(arrayLike));
console.log(Array.from(somecode(20), function (x) { return x * x; }));
console.log("And creating an array using of: " + Array.of(1, 3, 4, 6));
console.log("***************************************************");
console.log("Iterable keys and values");
var objarrit = ['a', 'b', 'c'].keys();
console.log("Iterators or arrays: " + objarrit);
var resultKey = objarrit.next();
while (!resultKey.done) {
    console.log(resultKey.value);
    resultKey = objarrit.next();
}
var objarr = __spreadArray([], ['a', 'b', 'c'].keys(), true);
console.log(objarr);
var objarritEntries = Array.from(['a', 'b', 'c'].entries());
console.log(objarritEntries);
console.log("***************************************************");
console.log("Objects, Maps and Sets");
var objAssign = { a: 1 };
Object.assign(objAssign, { b: 2 });
console.log(objAssign);
var m = new Map([[1, 'first'], [{}, 'second']]);
m.set(function (x) { return x + 1; }, 'third').set({}, 'fourth');
var key = {};
console.log(" get Key: " + m.get(key));
m.forEach(function (val, key) {
    console.log("Key: " + key + ", Val: " + val);
});
console.log("AS JSON Full: " + JSON.stringify(__spreadArray([], m, true)));
console.log("AS JSON Keys: " + JSON.stringify(__spreadArray([], m.keys(), true)));
console.log("AS JSON Values: " + JSON.stringify(__spreadArray([], m.values(), true)));
console.log("AS JSON Entries: " + JSON.stringify(__spreadArray([], m.entries(), true)));
console.log("***************************************************");
console.log("Generators");
function genFour() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/, 4];
        }
    });
}
var four = genFour();
console.log("Four = using function* = " + four);
var resultGen = four.next();
while (!resultGen.done) {
    console.log("From 4Gen Iterator: " + resultGen.value);
    resultGen = four.next();
}
console.log("Final return value: " + resultGen.value);
console.log("******* The above is done because return sets value as well as done");
function flatten(arr) {
    var _i, arr_2, x_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, arr_2 = arr;
                _a.label = 1;
            case 1:
                if (!(_i < arr_2.length)) return [3 /*break*/, 6];
                x_3 = arr_2[_i];
                if (!(x_3 instanceof Array)) return [3 /*break*/, 3];
                return [5 /*yield**/, __values(flatten(x_3))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, x_3];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6: return [2 /*return*/];
        }
    });
}
var t = flatten([1, 2, [3, 4]]);
console.log("Flattened: " + t);
var resultFlat = t.next();
while (!resultFlat.done) {
    console.log("From Yield or delegation operator: " + resultFlat.value);
    resultFlat = t.next();
}
function inner() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 'a'];
            case 1:
                _a.sent();
                return [4 /*yield*/, 'b'];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function outer() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [5 /*yield**/, __values(inner())];
            case 2:
                _a.sent();
                return [4 /*yield*/, 2];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
for (var _e = 0, _f = outer(); _e < _f.length; _e++) {
    var val = _f[_e];
    console.log("Delegating Yield => " + val);
}
console.log("***************************************************");
console.log("Arrow Functions");
function TimerV1() {
    var self = this;
    setInterval(function () {
        console.log(self);
    }, 1000);
}
function TimerV2() {
    setInterval(function () {
        console.log(this);
    }.bind(this), 1000);
}
function TimerV3() {
    var _this = this;
    setInterval(function () {
        console.log(_this);
    }, 1000);
}
console.log("***** See Application --> clock.html");
var inc = function () {
    return 7;
};
console.log("Arrow fn==>" + inc());
console.log("***************************************************");
console.log("Misc. Functions");
var reverse = function (_a) {
    var x = _a[0], y = _a.slice(1);
    return (y.length > 0) ? __spreadArray(__spreadArray([], reverse(y), true), [x], false) : [x];
};
console.log(reverse([1, 2, 3, 4, 5, 6]));
var _g = [1, 2, 3, 4, 5], y = _g.slice(2);
console.log(y);
function squares(n) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i < n)) return [3 /*break*/, 4];
                return [4 /*yield*/, Math.pow(i, 2)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i += 1;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
console.log(__spreadArray([], squares(6), true));
console.log("Int array reverse...:" + reverse([1, 2, 3, 4]));
console.log("String reverse...:" + reverse("sriram".split('')));
console.log("fn result reverse...:" + reverse(__spreadArray([], squares(10), true)));
console.log("Reverse of a number: " + reverse((57 + "").split('')));
