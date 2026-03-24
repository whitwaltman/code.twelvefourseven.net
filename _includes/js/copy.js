document.addEventListener("click", async (event) => {
    // only trigger if clicked element is copy button
    if (!event.target.classList.contains('copy-code-button')) return;

    const button = event.target;
    const pre = button.parentElement;
    const code = pre.querySelector('code');
    const text = code.innerText;

    try {
        await navigator.clipboard.writeText(text);

        // visual feedback
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = "Copy";
        }, 1000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
});