# Answer Key

I've included answers and explanations here. Use them wisely.
~ **NS Dawn**

## 0: here we go!

```js
const q0 = () => {
    return [] + {};
};
```
> Answer: `['object Object']`

A classic of weird Javascript. Adding an array to something coerces it into a string, and the string representation of `{}` is `['object Object']`.

## 1: in Javascript, unary operators are a plus

```js
const q1 = () => {
    return +[];
};
```
> Answer: `0`

Another classic of type coersion. Unary `+` coerces the Array into a Number, and empty arrays are mapped to `0`.

## 2: insert c joke

```js
const q2 = () => {
    let c = true;
    return c++;
};
```
> Answer: `1`.

Incrementing with `++` after a variable returns its initial value. However, `true` must be coerced into a Number before being incremented in this way.

## 3: honestly, `??` is my favorite JS operator

```js
const q3 = () => {
    return NaN ?? true == NaN;
}; 
```
> Answer: `NaN`.

`==` has precedence, and `true == NaN` evaluates to `false`. The nullish coalescing operator `??` will return the first operand if it is not nullish. `NaN` is not nullish (only `null` and `undefined` are), and thus it is returned. 

## 4: functional programming creates readable paradigms :)
```js
const q3 = () => {
   let fs = []
   let k = 0;
   for (var i = 0; i < 2; i++) {
       fs.push(function() { k += i });
   };
   fs.forEach((f) => {f()});
   return k;
};
```
> Answer: `4` (click the question number)

This one is wacky. When a function is returned holding the value of a local variable (`i`, in this case), a closure is created, holding the value at that point in time. If this were the case, when `fs.forEach(...)` is run, `k` would be incremented by `0` and then by `1`, ultimately returning `1`. However, due to the variable `i` being declared with `var`, and not `let`, the variable declaration is hoisted to the beginning of the function `q3`, causing its value to not create a closure, and instead be referenced as `2` (the final value of i after the `for` loop) both times it is called during `fs.forEach(...)`.

## 5: okay, I admit that one was a little unfair. now, just pick a color:

> Answer: `#f7df1e`

This is the JavaScript yellow.

## 6: what is this, java?

```js
const q6 = () => {
    return void 2 == '2';
};
```
> Answer: `false`

Unbeknownst to many, the keyword `void` has a ~~use~~ *completely worthless effect* in JavaScript, which is to run an expression or function, but evaluating to `undefined` instead of the return value. It takes precedence over `==`, and thus `void 2` evaluates to `undefined`, and `undefined == '2'` is `false`.

## 7: how do JavaScript developers check if a number is odd?

> Answer: `import an npm package`

Due wild wild west nature of npm packages, packages like is-odd, that are but a few lines long, are not uncommon. Additionally, due to the bundled nature of JS modules in much of modern JS development (especially with npm), and the irresponsible extent to which JS developers tend to require dependencies, packages like is-odd can have hundreds of thousands of downloads just from developers making default empty projects.

## 8: i think... i forgot to give the variable a name...

```js
const q8 = () => {
    return let = 10;
};
```
> Answer: 10

When the keywords `class`, `const`, et cetera, were introduced in ES6, they gained reserved word status (as no one in their right mind would name a variable `const`, ostensibly). However, the new keyword `let`, due to being a common enough word, was decided to not be reserved, and thus, even now, it can be used as a variable name but only if declared with `var`. In JavaScript, if a variable is assigned before being declared, JavaScript tries to help by interpreting it as if it were declared with `var`, but evaluating it as an assignment. Declarations return `undefined`, but assignments return the value assigned, thus `10`, in this case.

## 9: what is TypeScript?

> Answer: `Javascript but all variable declarations need to be suffixed with 'any'`.

TypeScript is a superset of Javascript that allows for variables, parameters, classes, and properties to be decorated with type information. By doing this, during the compilation step into JavaScript, the TS compiler can throw errors where type-unsafe behavior is possible. This adds important safety features to TS.

The joke here, is that by annotating type to be `any`, the TS compiler becomes entirely allowant of your variables to be used anywhere, and your functions used universally, circumventing any type safety provided others' well-written TS code. This is the kind of thing that a lazy, type-agnostic JS developer would do (me lol). 


## 10: let's see how much you've learned...

```js
const q10 = () => {
    return !+[]+[];
};
```
Answer: `'true'`

```js
!   +[]   +[]
!    0    +[]
  true    +[]
     'true'
```
Unary `+` evaluates first, turning `+[]` into `0`. Then, strangely, the `!` evaluates, turning `0` into `true`, coercing it into a boolean. Finally, adding an array to other data types (strangely) converts them to strings, and thus `true+[]` yields `'true'`

## 11: hmm...

```js
const q11 = () => {
    return [][];
};
```
> Answer: `SyntaxError`

The `[]` syntax used to index into the array cannot index with no value. `[][1]` would have worked, yielding `undefined`.

## 12: which of the following won't throw an error?

> Answer: `print("Hi, mom!");`

- `37.toString();` => throws error because the `.` is unclear, the parser considers it a decimal point. `37..toString()` would have worked.
- `print('Hi, mom!');` => does not print to the console, (`console.log()` is used for this) but rather opens the print window in the browser. `'Hi, mom!'` is passed through superflouously. 
- `document.getElementbyClassName('hi-mom');` => spelling error missing an `s`, `document.getElementsbyClassName('hi-mom');` would return a list of elements with the class name `'hi-mom'`.
- `Math.ln(2);` => wrong function name. The natural log (log base e) function is simply `Math.log()`.

## 13: all kids know how to do is loop for, coerce type, destructure and lie

```js
const q13 = () => {
    const f = (...x, y) => {
        for (let i = x.length; i > 0; --i) {
            y -= x[i];
        }
        return y;
    }
    arr = [true, 0.5, true, false];

    return f(...arr, 2);
};
```
> Answer: `SyntaxError`

The spread parameter `...x` must be the last parameter.

## 14: as easy as 1+1...

```js
const q14 = () => {
    return 1n + 1;
};
```
> Answer: `TypeError`

`1n` invokes a BigInt, which are uncoerceable by many operations such as `+`, and will throw a `TypeError`.
 
## 15: minmaxing

```js
const q15 = () => {
    let a = Math.min();
    let b = Math.max();
    if (a == b) return null;
    return a > b;
};
```
> Answer: `true`

`Math.min()` with no parameters returns `Infinity`, and `Math.max()` returns `-Infinity`.

## 16: time to do some sums!

```js
const q16 = () => {
    let m = new Map();
    m.set   ( 1,  10);
    m.set   (-1, -30);
    m.set   ( 0,   2);
    m.set   ( 1, -12);
    m.set   ( 2,  20);
    m.set   ( 3,   7);

    let sum = 1;
    m.forEach((k, v) => {
        if (k > 0) sum += v;
    });
    return sum;
};
```
> Answer: `6`

A `forEach()` loop run on a map takes in the defines the arguments in the order (value, key), and thus `k` represents values `v` represents the keys. Summing up all keys greater than 0 yields `6`.

## 17: for what input does q17() return true?

```js
const q17 = (v) => {
    return v == !v;
};
```
> Answer: `[]`

All objects/arrays, when coerced into a boolean, yield `true`. However, uniquely, empty arrays are considered falsy by the `==` operator, bypassing type coersion. Therefore, `![]` evaluates to `false`, which is equal to `[]` by `==`.

## 18: what does q18() do, given integer inputs?

```js
const q18 = (v) => {
    return !!parseInt(null, v);
};
```
> Answer: `tests if an input is greater than 24 and less than 37`

`parseInt()`'s second parameter specifies the base to which the first argument is interpreted. The first parameter is coerced into a string, and thus the character (N)`u`(ll) must be a valid digit under that base, and thus the base must be at least `24`. `parseInt()` cannot handle bases above `37`. 

## 19: more from parseInt()!

```js
const q19 = () => {
    const integers = [
        0.0001, 0.00001, 0.000001, 0.0000001, 0.00000001
    ];

    return integers.reduce((acc, v) =>
        {return acc + parseInt(v)},
        0
    );
};
```
> Answer: `2`

`parseInt()`'s first parameter is implicitly coerced into a string. It understands numbers such as `0.0001`, which becomes `'0.0001'` to be `0` as an integer, but numbers at the order of magnitude of `0.0000001` or lower, get converted to scientific notation, in this case, `'1e-6'`, which are understood by `parseInt()` as `1`. As only `0.0000001` and `0.00000001` are low enough for this to occur, the answer is `2`.

## 20: why do JavaScript developers make great best friends?

> Answer: `they understand the importance of closure`

These are puns.
- `they always keep their promises` => referencing promises, which occur in asynchronous JavaScript, notably irritating to handle in JavaScript.
- `they'll never treat you like an object` => referencing objects, which would be untrue of JavaScript developers as almost everything in JavaScript seems to mysteriously be an object. (try `typeof null`!) 
- `they understand the importance of closure` => closure is an important feature of JavaScript, occuring when a context containing a local variable is returned from a function.
- `they're experts at manipulation and coersion` => referencing type manipulation and coersion, which is true of JavaScript, but not an aspect of a great best friend lol.

## 21: i'm making a function 🐈(), and i'm still not sure what to call it. which class name wouldn't work?

```js
class 🐈 {
    constructor(display_name, breed) {
        this.display_name = display_name; 
        this.breed = breed;
    }
    meow() {
        console.log(`${this.display_name} says, 'Meow, world!'.`);
    }
}
```
> Answer: `🐈()` (click within the question prompt)

Strangely, almost all unicode characters are permissible to be in function names, with the notable exception of emoji. 

## 22: okay, i think i've implemented the class correctly...
```js
const q22 = () => {

    class 猫 {
        consturctor(display_name, breed, weight) {
            this.display_name = display_name;
            this.weight = parseInt(weight);
            this.breed = breed;
        }
        meow() {
            console.log(`${this.display_name} says, 'Meow, world!'`)
        }
    }

    return new 猫(2, 'tabby').breed;
};
```
> Answer: `undefined`

`constructor(...)` is misspelled as `consturctor(...)`. Therefore, the parameters `2` and `'tabby'` are passed in superfluously, and accessing `.breed` on `猫` yields `undefined`.

## 23: always remember to comment your code! code is undefined without comments!

```js
const q23 = () => {
    // setting i to 1
    let i = 0;

    // this code decrements i
    <!-- i++ -->; i++;
    i++;

    // this is a for loop
    return i;
};
```
> Answer: `1`

For backwards-compatability reasons, HTML comments (`<!-- -->`) are permissible in JavaScript, but unlike their behavior in HTML, an opening `<!--` will comment out the whole line, and `-->` has no effect. Because of this, both `i++;` on the line with `<!--...` are ignored, and only the `i++;` on the next line runs. Therefore, returning `i` gives `1`.

## 24: don't be alarmed. this one is easy...

```js
const q24 = () => {
    let a = true
    a = false;

    return a;
};
```
> Answer: `false`

Lol.

## 25: if at first you don't succeed...

```js
const q25 = () => {
    try {
        return 1;
    } catch {
        return 2;
    } finally {
        return 3;
    }
};
```

Strangely, even if the `try` block does not raise an error, but instead contains a `return`, it will proceed to the `finally` block if available.

## 26: string manip

```js
const q26 = () => {
    const f = (int, str) => {
        for (let i = 0; i < str; i++) {
            int = int.replace('a', 'ava')
        };
        return int;
    };

    return f('JavaScript', 2)
};
```
> Answer: `JavavavaScript`

The `.replace()` method replaces *only the first* occurence of a substring in a string. The `for` loop will run twice, rendering `JavavavaScript`. 

## 27: owo,,,?

```js
const q27 = () => {
    return 'owo'.split().join('w');
};
```
> Answer: `owo` (click within the question prompt)

The `.split()` method, when run without any parameters, returns a new array with the entire string as the sole element. Therefore, because `.join('w')` only places a substring between elements, the `.split().join('w')` will have no effect on the string. 

## 28: how bitshift?

```js
const q28 = () => {
    return 256 << -!!{};
};
```
> Answer: `0`

`-!!{}` evaluates to `-1`, because `!!` coerces its operand to a boolean, and thus `!!{}` yields `1`. Oddly, when the bitshift second operand is negative, `0` is returned regardless of the first operand.

## 29: i got 4294967296 problems, and bitshifting is definitely one of them.

```js
const q29 = () => {
    (1 << 30); // -> 1073741824
    return ((1 << 30) * 2) + (1 << 31);
};
```
> Answer: `0`

This one is strange. `(1 << 30) * 2` evaluates to `1073741824 * 2`, returning `2147483648`. However, `1 << 31` flips the sign bit, strangely returning `-2147483648`. Therefore, the return value becomes `0`.

## 30: naming variables is hard...

```js
const q30 = () => {
    let integer = [];
    let arr = (integer.push(1) + integer);
    let boolean = parseInt(arr, ++integer);
    boolean += arr;

    return boolean;
};
```
> Answer: `311`

This question draws from the facts about type coersion shown in previous questions. 
The second line evaluates as the following.
```js
    let arr = (integer.push(1) + integer);
                   1              [1]
                        '11'
```
The third line proceeds.
```js
    let boolean = parseInt(arr, ++integer);
                            2      ++[1]
                           '11'     2
                               3
```
The fourth line.
```js
    boolean += arr;
      3        '11'
      '311'
```

## 31: so... which language is best, most versatile, fastest and most beautiful?

> Answer: `'JavaScript'` (Hover over `JS` in `The JS Quiz`, until it morphs into `JavaScript`)

All the options are expressions that do not exactly evaluate to `'JavaScript'`
