// https://github.com/11ty/11ty-website/blob/5403f2b853e09165bec8bc6f7466a6a041487bcc/src/docs/docs.11tydata.js#L5-L7

let data = {
    layout: "layouts/card.njk",
};

if (process.env.NODE_ENV === "production") {
    data.date = "git Last Modified";
}

export default data;