```js
export default async function (config) {
    const isProduction = process.env.NODE_ENV === "production";

    config.addGlobalData("isProduction", isProduction);
    config.addGlobalData("layout", "base.njk");
}
```