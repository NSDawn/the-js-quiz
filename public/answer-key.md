# Answer Key

I've included answers and explanations here. Use them wisely.
~ **NS Dawn**

## 1: here we go!

```js
const q0 = () => {
    return [] + {};
};
```

A classic of weird Javascript. Adding an array to something coerces it into a string, and the string representation of `{}` is `['object Object']`.

## 1: in Javascript, unary operators are a plus

```js
const q1 = () => {
    return +[];
};
```

Another classic of type coersion. Unary `+` coerces the Array into a Number.

