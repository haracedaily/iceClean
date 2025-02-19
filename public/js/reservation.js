window.addEventListener('DOMContentLoaded', () => {
    console.log(Swiper);
    <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

document.querySelector(".clean_btn").addEventListener("click", function() {
    location.href="/reservation.html";
})
