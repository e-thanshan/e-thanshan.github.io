window.addEventListener('scroll', () => {
    const header = document.querySelector('#nav');
    ['bg-white', 'border-b', 'border-gray-200'].map((v) => header.classList.toggle(v, window.scrollY > 0));
});