document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
