const isProduction = process.env.NODE_ENV === "production";

const data = {
    layout: "page.njk",
    date: isProduction ? "git Last Modified" : "Last Modified",
};

export default data;