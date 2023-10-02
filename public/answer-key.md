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

