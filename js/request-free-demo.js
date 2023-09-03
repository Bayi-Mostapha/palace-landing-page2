// ********************************************* Hero height
function updateHeights() {
    const section = document.querySelector('.main .top .right').offsetHeight;
    const img1 = document.querySelector('.main .top .right .floating-img1').offsetHeight;
    const img2 = document.querySelector('.main .top .right .floating-img2').offsetHeight;

    if (window.innerWidth < 650) {
        root.style.setProperty('--top-height', `${Math.max(img1, img2)}px`);
    }
}
updateHeights();

// resize event 
window.addEventListener('resize', () => {
    updateHeights();
});