console.log("===== PRACTICE ON ES6 FEATURES WITH TRY-CATCH HANDLING =====");

// VAR vs LET Demonstration in Loops
try {
    console.log("\n>>> VAR vs LET inside loops <<<");

    const usingVar = [];
    for (var i = 0; i < 4; i++) {
        usingVar.push(() => i);
    }
    console.log("With var:", usingVar.map(fn => fn())); // [4,4,4,4]

    const usingLet = [];
    for (let j = 0; j < 4; j++) {
        usingLet.push(() => j);
    }
    console.log("With let:", usingLet.map(fn => fn())); // [0,1,2,3]
} catch (e) {
    console.error("Issue in var/let demo:", e.message);
}

// CONST and Object.freeze demonstration
try {
    console.log("\n>>> const & Object.freeze <<<");

    const frozenObj = { level: 5 };
    frozenObj.level = 10; // allowed before freeze

    Object.freeze(frozenObj);
    frozenObj.level = 50; // ignored in strict mode

    const freezeObj = (data) => {
        Object.freeze(data);
        data.level = 99; // has no effect
    };

    const tempObj = { level: 3 };
    freezeObj(tempObj);
    console.log("After freeze:", tempObj.level);

} catch (e) {
    console.error("Freeze block error:", e.message);
}

// Shorthand Object Properties
try {
    console.log("\n>>> Shorthand Object Properties <<<");
    let p = 7, q = 9;
    const shorthand = { p, q };
    console.log(shorthand);
} catch (e) {
    console.error("Shorthand block error:", e.message);
}

// Symbols & Symbol.toPrimitive
try {
    console.log("\n>>> Symbol and toPrimitive <<<");

    const symA = Symbol("unique");
    const symB = Symbol("unique");
    console.log("Symbols equal?", symA === symB); // false

    const devObj = {
        name: "Sid",
        salary: 800,
        [Symbol.toPrimitive](hint) {
            switch (hint) {
                case "string": return "String conversion triggered";
                case "number": return this.salary;
                default: return JSON.stringify(this);
            }
        }
    };

    console.log("Default:", devObj);
    console.log("As string:", String(devObj));

} catch (e) {
    console.error("Error in symbol block:", e.message);
}

// Classes and Inheritance
try {
    console.log("\n>>> CLASSES & INHERITANCE <<<");

    class Entity {
        constructor(name, strength, group) {
            this.name = name;
            this.strength = strength;
            this.group = group;
        }
        info() {
            return `${this.name} is from ${this.group} with power ${this.strength}`;
        }
    }

    class SuperHero extends Entity {
        constructor(name, power) {
            super(name, power, "Avengers");
        }
    }

    class SuperVillain extends Entity {
        constructor(name, ability) {
            super(name, ability, "Villains");
        }
    }

    console.log(new SuperHero("Thor", "Lightning").info());
    console.log(new SuperVillain("Loki", "Deception").info());

} catch (e) {
    console.error("Class block error:", e.message);
}

// Iterators: for...in and for...of
try {
    console.log("\n>>> Iterators using for...in <<<");
    const letters = ['x', 'y', 'z'];
    for (let key in letters) {
        if (letters.hasOwnProperty(key)) process.stdout.write(key + " ");
    }
    console.log();
} catch (e) {
    console.error("Error in for...in iterator:", e.message);
}

try {
    console.log("\n>>> Iterators using for...of <<<");
    const letters2 = ['x', 'y', 'z'];
    for (let value of letters2) {
        process.stdout.write(value + " ");
    }
    console.log();
} catch (e) {
    console.error("Error in for...of iterator:", e.message);
}

// .values() iterator
try {
    console.log("\n>>> Array Iterator using .values() <<<");
    const iterator = [10, 20, 30].values();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
} catch (e) {
    console.error("Iterator .values() error:", e.message);
}

// Custom iterator with Symbol.iterator
function numberGen(n = 10) {
    try {
        if (typeof n !== "number") throw new Error("Input must be numeric!");

        const sequence = {
            [Symbol.iterator]() {
                let i = 0;
                return {
                    next() {
                        return { value: i++, done: i > n };
                    }
                };
            }
        };

        process.stdout.write("Numbers: ");
        for (let val of sequence) process.stdout.write(val + " ");
        console.log();
    } catch (e) {
        console.error("Generator error:", e.message);
    }
}

numberGen(5);
numberGen("abc");

// Async vs Sync example
const ratings = [5, 4, 5];
let total = 0;
const asyncAdd = async (x, y) => x + y;

try {
    ratings.forEach(async (r) => {
        total = await asyncAdd(total, r);
    });
    console.log("Async total:", total); // Still 0
} catch (e) {
    console.error("Async block error:", e.message);
}

const ratingsSync = [5, 4, 5];
let totalSync = 0;
const addSync = (x, y) => x + y;

try {
    ratingsSync.forEach(r => totalSync = addSync(totalSync, r));
    console.log("Sync total:", totalSync); // 14
} catch (e) {
    console.error("Sync block error:", e.message);
}

// forEach logging with try/catch
try {
    console.log("\n>>> Logging Array Elements <<<");
    const elements = [11, 22, 33];
    elements.forEach((el, idx, arr) => {
        try {
            console.log(`Element: ${el}, Index: ${idx}, Array: ${arr}`);
        } catch (err) {
            console.error("Log error:", err.message);
        }
    });
} catch (e) {
    console.error("forEach block error:", e.message);
}

// Array.from()
try {
    console.log("\n>>> Array.from() Usage <<<");
    const arr = [1, 2, 3];
    const copy = Array.from(arr);
    console.log("Original:", arr);
    console.log("Duplicate:", copy);
} catch (e) {
    console.error("Array.from error:", e.message);
}

// keys() method
try {
    console.log("\n>>> Array.keys() Example <<<");
    const iteratorKeys = ['p', 'q', 'r'].keys();
    process.stdout.write("Keys: ");
    for (let k of iteratorKeys) process.stdout.write(k + " ");
    console.log();
} catch (e) {
    console.error("Keys() block error:", e.message);
}

// MAP in JavaScript
try {
    console.log("\n>>> MAP Example <<<");
    const myMap = new Map([...`abcd`].map(c => [c, c + c]));
    console.log("Map:", JSON.stringify([...myMap]));
    console.log("Keys:", JSON.stringify([...myMap.keys()]));
    console.log("Values:", JSON.stringify([...myMap.values()]));
} catch (e) {
    console.error("Map block error:", e.message);
}

// SET in JavaScript
try {
    console.log("\n>>> SET Example <<<");
    const mySet = new Set(['red', 'green']);
    mySet.add('blue');
    mySet.add('red'); // duplicate ignored
    console.log(mySet);
} catch (e) {
    console.error("Set block error:", e.message);
}

// Generators
try {
    console.log("\n>>> Generators Example <<<");

    function* generateSeq() {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    }

    const g = generateSeq();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
} catch (e) {
    console.error("Generator function error:", e.message);
}

// yield* example
try {
    console.log("\n>>> yield* Recursive Flatten <<<");

    function* flatten(arr) {
        for (let val of arr) {
            if (Array.isArray(val)) yield* flatten(val);
            else yield val;
        }
    }

    const flat = flatten([1, 2, [3, 4]]);
    console.log([...flat]);
} catch (e) {
    console.error("Flatten generator error:", e.message);
}

// Destructuring
try {
    console.log("\n>>> Object Destructuring <<<");

    const demo = { a: 1, b: 2 };
    const { a: alpha, b: beta } = demo;
    console.log("alpha:", alpha, "| beta:", beta);

    const { b } = demo;
    console.log("b =", b);

    console.log("\nDestructuring Function Example:");

    const reverseArray = ([first, ...rest]) =>
        rest.length ? [...reverseArray(rest), first] : [first];

    console.log(reverseArray([1, 2, 3, 4]));
    console.log(reverseArray(["a", "b", "c"]));

} catch (e) {
    console.error("Destructuring block error:", e.message);
}
