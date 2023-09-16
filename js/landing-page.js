function updateHeightsLp() {
    const section1_leftElement = document.querySelector('.section1 .left');
    let section1_left = null;
    if (section1_leftElement)
        section1_left = section1_leftElement.offsetHeight;

    const section1_rightElement = document.querySelector('.section1 .right .picture');
    let section1_right = null;
    if (section1_rightElement)
        section1_right = section1_rightElement.offsetHeight;

    const small_picElement = document.querySelector('.section1 .right .small-picture');
    let small_pic = null;
    if (small_picElement)
        small_pic = small_picElement.offsetHeight;

    if (section1_left !== null && section1_right !== null && small_pic !== null)
        if (window.innerWidth > 900) {
            root.style.setProperty('--section1-height', `${Math.max(section1_left, section1_right) + small_pic / 4}px`);
        } else {
            root.style.setProperty('--section1-height', `${section1_left + section1_right + small_pic + 150}px`);
        }
}
updateHeightsLp();

// resize event 

window.addEventListener('resize', () => {
    updateHeightsLp();
});