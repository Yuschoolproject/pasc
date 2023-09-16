// slides.
(function() {
    var prev = document.getElementById('previous');
    var next = document.getElementById('next');

    var slidingBlocked = false;


    const onPrevClick = () => {
        controlClickHandler(-1)
    }

    const onNextClick = () => {
        controlClickHandler(1)
    }


    prev.addEventListener('click', onPrevClick);
    next.addEventListener('click', onNextClick);

    function controlClickHandler(offset) {
        var slides = document.querySelectorAll('.slide');
        var dots = document.querySelectorAll('.dot');

        if (slidingBlocked) return;
        slidingBlocked = true;

        for (var i = 0; i < slides.length; i++) {
            if (slides.item(i).classList.contains("show")) {
                var newIndex = (i + slides.length + offset) % slides.length;

                slides.item(i).classList.toggle("show");
                slides.item(i).classList.toggle("hide");
                slides.item(newIndex).classList.toggle("show");
                slides.item(newIndex).classList.toggle("hide");

                dots.item(i).classList.toggle("dot-show");
                dots.item(i).classList.toggle("dot-hide");

                dots.item(newIndex).classList.toggle("dot-show");
                dots.item(newIndex).classList.toggle("dot-hide");
                break;
            }
        }

        setTimeout(function() {
            slidingBlocked = false;
        }, 200);
    };
}());