// navigation menu.

document.addEventListener("DOMContentLoaded", () => {
    const revealerNav = window.revealer({
        revealElementSelector: ".nav-js",
        options: {
            anchorSelector: ".nav-btn-js",
        },
    });

    const actionBtn = document.querySelector(".nav-btn-js");

    actionBtn.addEventListener("click", () => {
        actionBtn.classList.toggle("fa-bars")
        actionBtn.classList.toggle("fa-xmark")
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false);
        }
    });
});



// nav background for mobile.

(function() {

    const header = document.querySelector("header");

    var elementHeight = 200;


    window.addEventListener("scroll", event => {
        if (header.offsetWidth <= 900) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            var opacity = 1 - (elementHeight - scrollTop) / elementHeight;
            if (opacity >= .5) {
                opacity = .5
            }
            header.style.backgroundColor = 'rgba(0,0,0,' + opacity + ')';
        }
    });

}());