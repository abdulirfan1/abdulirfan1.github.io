$(document).ready(function () {
    let captions = [];

    $('.thumbnails img').on('click', function () {
        let index = $(this).data('index');
        updateSlide(index);
    });

    $('#next-btn').on('click', function () {
        let currentIndex = $('.slideshow img.active').index();
        let nextIndex = (currentIndex + 1) % $('.slideshow img').length;
        updateSlide(nextIndex);
    });

    $('#prev-btn').on('click', function () {
        let currentIndex = $('.slideshow img').index($('.slideshow img.active'));
        let prevIndex = (currentIndex - 1 + $('.slideshow img').length) % $('.slideshow img').length;
        updateSlide(prevIndex);
    });

    function updateSlide(index) {
        $('.slideshow img').removeClass('active').eq(index).addClass('active');
        $('.thumbnails img').removeClass('active').eq(index).addClass('active');
        $('.caption').text(captions[index]);
    }

    let zoomTimeout;

    $('.slideshow').on('mousemove', 'img.active', function (e) {
        const img = $(this);

        clearTimeout(zoomTimeout);
        zoomTimeout = setTimeout(() => {
            const rect = img[0].getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            const posX = (offsetX / rect.width) * 100;
            const posY = (offsetY / rect.height) * 100;

            img.css({
                transform: 'scale(2)',
                transformOrigin: `${posX}% ${posY}%`
            });
        }, 10); 
    });

    $('.slideshow').on('mouseout', 'img.active', function () {
        clearTimeout(zoomTimeout);
        $(this).css({
            transform: 'scale(1)',
            transformOrigin: 'center'
        });
    });
});
