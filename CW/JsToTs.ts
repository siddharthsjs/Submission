// Start from Slide 66 
// Slide #71
console.log("***************************************************"); 
console.log("Loop scoping and fresh iterations"); 

let vals: Array<() => number> = [];
for (var x: number = 0; x < 4; x += 1) { 
    vals.push(() => x);
}
console.log("Using vars: " + vals.map(x => x()));

vals = []; 
for (let x: number = 0; x < 4; x += 1) { 
    vals.push(() => x);
}
console.log("Using lets: " + vals.map(x => x()));

console.log("***************************************************"); 
console.log("Object Consts"); 

interface SimpleObj {
    par: number;
    par2?: number;
}

const obj: SimpleObj = { par: 3 }; 
console.log(obj); 

try {
    // obj = 4; // Would cause TypeScript compilation error
} catch (error) { 
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

function demoFreezeSeal(obj: SimpleObj): void { 
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
} catch (error) {
    console.log("Error will be thrown in strict mode: ", error); 
} 

console.log("***************************************************"); 
console.log("String Templates"); 

const myname: string = "Seshagiri Sriram"; 
console.log("Using String Templates: ", `${myname}`); 

console.log("***************************************************"); 
console.log("Enhanced Object Literals and fns inside Object Literals");

interface QuadPoint {
    x: number;
    y: number;
}

let quadEq: QuadPoint[] = []; 
for (let x: number = 1; x <= 20; x++) {
    quadEq.push({ x, y: 2 * x * x - 5 * x + 3 });  	
}

interface FooObj {
    f(x: number): number;
}

let foo: FooObj = { 
    f(x: number): number {
        return x + 1;
    }
};

console.log("foo.f(4) - inside fn of object literal -> ", foo.f(4)); 
console.log(quadEq); 

console.log("***************************************************"); 
console.log("My Fav Subject --> overriding and overloading");

class A { 
    toString(): string { 
        return "In Class A"; 
    }
} 

class B extends A { 
    toString(): string { 
        return "In class B with call to super: " + super.toString(); 
    } 
} 

const BObj: B = new B(); 
console.log(BObj.toString()); 
console.log("BOBJ --> " + (BObj as any).__proto__); 
console.log("B--> extended from --> " + B.prototype); 
console.log("A--> extended from --> " + A.prototype); 
console.log("B--> extended from --> " + (B.prototype as any).__proto__); 
console.log("A--> extended from --> " + (A.prototype as any).__proto__); 

function myFunc(): void {}
const originalToString: Function = Function.prototype.toString;
myFunc.toString = function(): string {
    return "Custom: " + originalToString.call(this);
};
console.log("function myFunc toString() - not class :" + myFunc.toString());

console.log("***************************************************"); 
console.log("Symbols");

interface PersonObj {
    name: string;
    age: number;
    salary: number;
    [Symbol.toPrimitive](hint: string): string | number;
}

const js_obj: PersonObj = { 
    name: "Sriram", 
    age: 60, 
    salary: 100, 
    [Symbol.toPrimitive](hint: string): string | number {
        if (hint === "number") { 
            return this.age;
        } 
        if (hint === "default" || hint === "string") {
            return JSON.stringify(this);
        }
        return "";
    }
}; 

console.log("STRING: " + `${js_obj}`);
console.log("DEFAULT: ", (js_obj + ''));  
console.log("NUMBER: " + (+js_obj));
console.log("Since you gave up: ", js_obj);

console.log("***************************************************"); 
console.log("Classes and Inheritance");

class Jedi { 
    protected forceIsDark: boolean;
    private jediname: string;

    constructor(str: string) {
        this.forceIsDark = false;
        this.jediname = str; 
    }

    get name(): string { 
        return this.jediname; 
    }

    set name(str: string) {
        this.jediname = str;
    }	

    toString(): string {
        if (this.forceIsDark) {
            return `${this.jediname}: Join the dark side`; 
        }
        return `${this.jediname}: Fear is the path to the dark side`; 
    }
}

class Sith extends Jedi { 
    constructor(str: string) {
        super(str); 
        this.forceIsDark = true; 
        this.name = str; 
    }
}

let yoda: Jedi = new Jedi("Yoda");
let darth: Sith = new Sith("Darth Vader");

console.log(yoda.toString());
console.log(darth.toString());
console.log(darth.name, "is a Sith?", darth instanceof Sith);
console.log(darth.name, "is a Jedi?", darth instanceof Jedi);
console.log(yoda.name, "is a Sith?", yoda instanceof Sith);
console.log(yoda.name, "is a Jedi?", yoda instanceof Jedi);

console.log("***************************************************"); 
console.log("THE FOR LOOPS");

const arr: string[] = ['a', 'b', 'c']; 
console.log("*** ---> The bad in loop "); 
for (const i in arr) {
    if (arr.hasOwnProperty(i)) { 
        console.log(i);
    }
}

console.log("*** ---> The good of loop "); 
for (const i of arr) { 
    console.log(i);
}

console.log("*** ---> The better foreach loop "); 
arr.forEach(x => console.log(x)); 

const ratings: number[] = [5, 4, 5];
let sum: number = 0;

const asyncSumFunction = async (a: number, b: number): Promise<number> => a + b;
const syncSumFunction = (a: number, b: number): number => a + b;

ratings.forEach(async (rating: number) => {
    sum = await asyncSumFunction(sum, rating);
});
console.log("BAD async bummer: " + sum);

sum = 0; 
ratings.forEach((rating: number) => {
    sum = syncSumFunction(sum, rating);
});
console.log("Nice sync clean sum: " + sum);

const logArrayElements = (element: number, index: number): void => {
    console.log(`a[${index}] = ${element}`);
};
[2, 5, , 9].forEach(logArrayElements);

console.log("Using Spreads/Rests: " + [..."abcd"]); 
let a: string[] = [..."abcd"];
console.log("isArray A?: " + Array.isArray(a)); 

let [a1, b1]: string[] = "xy" as any; 
console.log("Destructuring: " + `${a1}, ${b1}`); 

console.log("Arrays from: " + `Array.from("12345"): ${Array.from("12345")}`); 

console.log("***************************************************"); 
console.log("Iterators.....");

let it: Iterator<number> = [1, 2, 3][Symbol.iterator](); 
let result: IteratorResult<number> = it.next(); 

while (result.done !== true) { 
    console.log(" iterator value: " + result.value + ", Done status: " + result.done); 
    result = it.next(); 
} 

function somecode(n: number): Iterable<number> { 
    return { 
        [Symbol.iterator](): Iterator<number> { 
            let i: number = 0; 
            return {
                next(): IteratorResult<number> {
                    return {
                        done: i > n ? true : false, 
                        value: i++
                    }; 
                }
            };
        } 
    }; 
} 

for (const i of somecode(10)) {
    console.log("Some code obfuscated: " + i); 
}

console.log("***************************************************"); 
console.log("Arrays..Yet Again...");

interface ArrayLike {
    [index: number]: string;
    length: number;
}

const arrayLike: ArrayLike = { 
    0: 'zero', 
    1: 'one', 
    2: 'two', 
    3: 'three',
    'length': 4 
};

console.log(Array.from(arrayLike));
console.log(Array.from(somecode(20), (x: number) => x * x));
console.log("And creating an array using of: " + Array.of(1, 3, 4, 6)); 

console.log("***************************************************"); 
console.log("Iterable keys and values"); 

let objarrit: IterableIterator<number> = ['a', 'b', 'c'].keys();
console.log("Iterators or arrays: " + objarrit); 

let resultKey: IteratorResult<number> = objarrit.next(); 
while (!resultKey.done) { 
    console.log(resultKey.value); 
    resultKey = objarrit.next(); 
} 

let objarr: number[] = [...['a', 'b', 'c'].keys()];
console.log(objarr); 

const objarritEntries: Array<[number, string]> = Array.from(['a', 'b', 'c'].entries());
console.log(objarritEntries); 

console.log("***************************************************"); 
console.log("Objects, Maps and Sets"); 

interface ObjAssign {
    a: number;
    b?: number;
}

let objAssign: ObjAssign = { a: 1 }; 
Object.assign(objAssign, { b: 2 }); 
console.log(objAssign); 

const m: Map<any, string> = new Map([[1, 'first'], [{}, 'second']]);
m.set((x: number) => x + 1, 'third').set({}, 'fourth');

const key: {} = {};
console.log(" get Key: " + m.get(key));		

m.forEach((val: string, key: any) => { 
    console.log("Key: " + key + ", Val: " + val);
});

console.log("AS JSON Full: " + JSON.stringify([...m])); 
console.log("AS JSON Keys: " + JSON.stringify([...m.keys()])); 
console.log("AS JSON Values: " + JSON.stringify([...m.values()])); 
console.log("AS JSON Entries: " + JSON.stringify([...m.entries()]));

console.log("***************************************************"); 
console.log("Generators"); 

function* genFour(): Generator<number, number, undefined> { 
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let four: Generator<number, number, undefined> = genFour();
console.log("Four = using function* = " + four); 

let resultGen: IteratorResult<number> = four.next(); 
while (!resultGen.done) { 
    console.log("From 4Gen Iterator: " + resultGen.value); 
    resultGen = four.next(); 
}
console.log("Final return value: " + resultGen.value);
console.log("******* The above is done because return sets value as well as done"); 

function* flatten(arr: any[]): Generator<any, void, undefined> {
    for (const x of arr) {
        if (x instanceof Array) { 
            yield* flatten(x);
        } else { 
            yield x;
        }
    }
}

let t: Generator<any, void, undefined> = flatten([1, 2, [3, 4]]);
console.log("Flattened: " + t); 

let resultFlat: IteratorResult<any> = t.next(); 
while (!resultFlat.done) { 
    console.log("From Yield or delegation operator: " + resultFlat.value); 
    resultFlat = t.next(); 
}

function* inner(): Generator<string, void, undefined> {
    yield 'a';
    yield 'b';
}

function* outer(): Generator<number | string, void, undefined> {
    yield 1;
    yield* inner();
    yield 2;
}

for (const val of outer()) {
    console.log("Delegating Yield => " + val);
}

console.log("***************************************************"); 
console.log("Arrow Functions"); 

function TimerV1(): void { 
    const self = this; 
    setInterval(function () {
        console.log(self); 
    }, 1000);
} 

function TimerV2(this: any): void {
    setInterval(function (this: any) {
        console.log(this);
    }.bind(this), 1000);
}

function TimerV3(this: any): void {
    setInterval(() => {
        console.log(this);
    }, 1000);
}

console.log("***** See Application --> clock.html"); 

const inc = (): number => { 
    return 7;
}
console.log("Arrow fn==>" + inc()); 

console.log("***************************************************"); 
console.log("Misc. Functions"); 

const reverse = <T>([x, ...y]: T[]): T[] =>
    (y.length > 0) ? [...reverse(y), x] : [x];

console.log(reverse([1, 2, 3, 4, 5, 6]));

let [, , ...y]: number[] = [1, 2, 3, 4, 5];
console.log(y);

function* squares(n: number): Generator<number, void, undefined> {
    for (let i: number = 1; i < n; i += 1) { 
        yield Math.pow(i, 2);
    }
}

console.log([...squares(6)]); 
console.log("Int array reverse...:" + reverse([1, 2, 3, 4])); 
console.log("String reverse...:" + reverse("sriram".split(''))); 
console.log("fn result reverse...:" + reverse([...squares(10)]));
console.log("Reverse of a number: " + reverse((57 + "").split('')));