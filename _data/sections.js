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
                label: "component",
                description: "reusable building blocks that couple style and layout/functionality"
            },

            eleventy: {
                label: "eleventy",
                description: "code for configuring things and doing things in Eleventy"
            },

            js: {
                label: "JavaScript",
                description: "no relation to Java"
            }
        }
    }
}