window.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#search-modal");
    const openBtn = document.querySelector("#search-open");
    const closeBtn = document.querySelector("#search-close");

    new PagefindUI({
        bundlePath: "/pagefind/",
        element: "#search",
        pageSize: 8,
        showSubResults: true,
        showImages: false,
        excerptLength: 50,
    });

    const openModal = () => {
        modal.showModal();
        setTimeout(() => {
            document.querySelector(".pagefind-ui__search-input").focus();
        }, 100);
    };

    openBtn.addEventListener("click", openModal);

    closeBtn.addEventListener("click", () => modal.close());

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && !modal.open) {
            e.preventDefault();
            openModal();
        }
    });
});
