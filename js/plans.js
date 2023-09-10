
function updateWidhts() {
    const desc = document.querySelector('.feature').offsetWidth;
    root.style.setProperty('--mini-desc', `calc(1.5rem + ${desc}px)`);

    const e1 = document.querySelector('.pack3 .pack-title').offsetHeight;
    const e2 = document.querySelector('.pack3 .pack-mini-desc').offsetHeight;
    root.style.setProperty('--c2', `calc(${e1 + e2}px + 2.5rem)`);
}

updateWidhts();

// resize event 
window.addEventListener('resize', () => {
    updateWidhts();
});