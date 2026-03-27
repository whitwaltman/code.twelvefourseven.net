export default {
    crib: {
        label: "crib sheets",
        description: "quick reference notes, sans explanations"
    },

    notes: {
        label: "notes",
        description: "scribblings and thoughts",
    },

    snippets: {
        label: "snippets",
        description: "code you can copy/steal to save time",

        children: {
            boilerplate: {
                label: "boilerplate",
                description: "templates + starter code"
            },

            components: {
                label: "components",
                sectionTitle: "component",
                description: "reusable building blocks that couple style and layout/functionality"
            },

            demos: {
                label: "demos",
                sectionTitle: "demo",
                description: "illustrative examples on how to use something"
            },

            eleventy: {
                label: "eleventy",
                description: "code for configuring things and doing things in Eleventy"
            },

            js: {
                label: "js",
                sectionTitle: "JavaScript",
                description: "no relation to Java"
            }
        }
    }
}