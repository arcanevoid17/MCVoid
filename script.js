document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.download-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

function download(file) {
    alert("Starting download for " + file);
    const link = document.createElement('a');
    link.href = file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
