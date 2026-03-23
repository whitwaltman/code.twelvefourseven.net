document.body.classList.add("js-enabled");

const containers = document.querySelectorAll(".note-container");

const toggleNote = (el) => {
    const isExpanded = el.getAttribute("aria-expanded") === "true";
    el.setAttribute("aria-expanded", !isExpanded);
}

containers.forEach((el) => {
    el.addEventListener("click", () => toggleNote(el));
    el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleNote(el);
        }
    });
});