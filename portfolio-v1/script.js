/* VARIABLE DECLARATIONS */

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('.site-nav');

/* EVENT LISTENERS */

hamburger.addEventListener('click', function (e) {
    classToggle(e.target);
    classToggle(nav);
});
hamburger.addEventListener('transitionend', transitionEnd);
nav.addEventListener('transitionend', transitionEnd);

/* FUNCTIONS */

function classToggle(t) {
    t.classList.add("animatable");
    if (!t.classList.contains("active")) {
        t.classList.add("active");
    } else {
        t.classList.remove("active");
    }
}

function transitionEnd(e) {
    e.target.classList.remove("animatable");
}










