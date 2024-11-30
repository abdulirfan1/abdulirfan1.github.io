$(document).ready(function () {
    let captions = [
        "A - Apple",
        "B - Basketball",
        "D - Dice",
        "U - Umbrella",
        "L - Lamp",
        "I - Ice Cream",
        "R - Rose",
        "F - Fork",
        "A - Anchor",
        "N - Necklace"
    ];

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
});
