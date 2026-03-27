document.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-btn')) {
    const container = e.target.closest('.demo-tabs');
    const tabName = e.target.getAttribute('data-tab');

    // Remove active class from all buttons and panels in THIS container
    container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    container.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));

    // Add active class to clicked button and corresponding panel
    e.target.classList.add('active');
    container.querySelector(`.tab-panel[data-tab="${tabName}"]`).classList.add('active');
  }
});