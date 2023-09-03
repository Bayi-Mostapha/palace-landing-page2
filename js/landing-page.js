// ********************************************* Hero height
function updateHeights() {
    const section1_left = document.querySelector('.section1 .left').offsetHeight;
    const section1_right = document.querySelector('.section1 .right .picture').offsetHeight;
    const small_pic = document.querySelector('.section1 .right .small-picture').offsetHeight;

    if (window.innerWidth > 900) {
        root.style.setProperty('--section1-height', `${Math.max(section1_left, section1_right) + small_pic / 4}px`);
    } else {
        root.style.setProperty('--section1-height', `${section1_left + section1_right + small_pic + 150}px`);
    }
}
updateHeights();

// resize event 
window.addEventListener('resize', () => {
    updateHeights();
});