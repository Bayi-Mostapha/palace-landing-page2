function updateHeights() {
    const img1Element = document.querySelector('.main .top .right .floating-img1');
    let img1 = null;
    if (img1Element)
        img1 = img1Element.offsetHeight;
    const img2Element = document.querySelector('.main .top .right .floating-img2');
    let img2 = null;
    if (img2Element)
        img2 = img2Element.offsetHeight;

    if (window.innerWidth < 650 && img1 !== null && img2 !== null) {
        root.style.setProperty('--top-height', `${Math.max(img1, img2)}px`);
    }
}

updateHeights();

// resize event 

window.addEventListener('resize', () => {
    updateHeights();
});