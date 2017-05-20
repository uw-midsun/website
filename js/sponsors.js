$( document ).ready(function() {
    setTimeout(function() {

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 2,
            spaceBetween: 50,
            loop: true,
            autoplay: 5000,
            breakpoints: {
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 40
                }
            }
        });
    }, 1000);
});