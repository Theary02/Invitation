const btn = document.getElementById('btn');
const details = document.getElementById('details');

btn.addEventListener('click', () => {
    details.classList.toggle('hidden');
    btn.textContent = details.classList.contains('hidden')
        ? 'See more'
        : 'See less';
});