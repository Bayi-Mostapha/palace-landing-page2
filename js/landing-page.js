const root = document.documentElement;
const loader = document.querySelector('.loader');

window.onload = function () {
    loader.style.display = 'none';
    document.body.classList.remove('hide-overflow');

    // ****************************** Intersection observer

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // *********************************************

    const mobileNavBtn = document.querySelector('.lp-nav-btn');
    const mobileNav = document.querySelector('.lp-mobile-nav');
    mobileNavBtn.addEventListener('click', () => {
        if (!mobileNav.classList.contains('shown')) {
            mobileNav.classList.add('shown');
            mobileNavBtn.classList.add('navbar-shown');
            document.body.classList.add('hide-overflow');
        } else {
            mobileNav.classList.remove('shown');
            mobileNavBtn.classList.remove('navbar-shown');
            document.body.classList.remove('hide-overflow');
        }
    });

    // ********************************************* Hero height

    function updateHeights() {
        const section1_left = document.querySelector('.section1 .left').offsetHeight;
        const section1_right = document.querySelector('.section1 .right .picture').offsetHeight;
        const small_pic = document.querySelector('.section1 .right .small-picture').offsetHeight;
        const h2Element = document.querySelector('.section1 h2');
        const computedStyle = getComputedStyle(h2Element, '::before');
        const quest_mark2 = parseFloat(computedStyle.height);

        if (window.innerWidth > 900) {
            root.style.setProperty('--section1-height', `${Math.max(section1_left, section1_right) + small_pic / 4}px`);
        } else {
            root.style.setProperty('--section1-height', `${section1_left + section1_right + small_pic + quest_mark2}px`);
            root.style.setProperty('--ssection-margin', `${small_pic + 150}px`);
        }
    }

    updateHeights();

    // *****************************

    // resize event 

    window.addEventListener('resize', () => {
        updateHeights();

        if (window.innerWidth > 750 && mobileNav.classList.contains('shown')) {
            mobileNav.classList.remove('shown');
            mobileNavBtn.classList.remove('navbar-shown');
            document.body.classList.remove('hide-overflow');
        }
    });

    // scroll event

    window.addEventListener('scroll', function () {
        if (window.scrollY === 0) {
            faders.forEach(fader => {
                fader.classList.remove('appear');
                appearOnScroll.observe(fader);
            });
        }
    });
};