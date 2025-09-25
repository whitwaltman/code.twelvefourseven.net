```js
const now = new Date();
const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
};
console.log(now.toLocaleString("en-US", options).replace(/,/g, "") === now.toDateString());
```