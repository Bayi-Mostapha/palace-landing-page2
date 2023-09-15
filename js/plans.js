
function updates() {
    const desc = document.querySelector('.feature').offsetWidth;
    root.style.setProperty('--mini-desc', `calc(1.5rem + ${desc}px)`);

    const badge = document.querySelector('.badge').offsetWidth;
    root.style.setProperty('--badge-top', `${badge / 6}px`);
    root.style.setProperty('--badge-right', `${badge / -4}px`);

    const e1 = document.querySelector('.pack3 .pack-title').offsetHeight;
    const e2 = document.querySelector('.pack3 .pack-mini-desc').offsetHeight;
    root.style.setProperty('--c2', `calc(${e1 + e2}px + 2.5rem)`);
}

updates();

// resize event 
window.addEventListener('resize', () => {
    updates();
});