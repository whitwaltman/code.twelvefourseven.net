// https://github.com/chasemccoy/www/blob/main/utils/filters.js

const filterTagList = (tags) => {
    return (tags || []).filter(
        (tag) => !["notes", "snippets", "patterns"].includes(tag)
    )
}

// subtypes of "notes" = "decision-log", "checklist", etc.