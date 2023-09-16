
function updates() {
    const descElement = document.querySelector('.feature');
    let desc = null;
    if (descElement)
        desc = descElement.offsetWidth;
    if (desc)
        root.style.setProperty('--mini-desc', `calc(1.5rem + ${desc}px)`);

    // **

    const badgeElement = document.querySelector('.badge');
    let badge = null;
    if (badgeElement)
        badge = badgeElement.offsetWidth;
    if (badge !== null) {
        root.style.setProperty('--badge-top', `${badge / 6}px`);
        root.style.setProperty('--badge-right', `${badge / -4}px`);
    }

    // **

    const packTitleElement = document.querySelector('.pack3 .pack-title');
    let packTitle = null;
    if (packTitleElement)
        packTitle = packTitleElement.offsetHeight;

    const miniDescElement = document.querySelector('.pack3 .pack-mini-desc');
    let miniDesc = null;
    if (miniDescElement)
        miniDesc = miniDescElement.offsetHeight;

    if (packTitle !== null && miniDesc !== null)
        root.style.setProperty('--c2', `calc(${packTitle + miniDesc}px + 2.5rem)`);
}

updates();

// resize event 

window.addEventListener('resize', () => {
    updates();
});