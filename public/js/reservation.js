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

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // 요소가 보이면 show 추가
            }
        });
    }, { threshold: 0.3 }); // 30% 이상 보이면 동작

    // 감지할 요소 선택
    const elements = document.querySelectorAll(".hidden");
    elements.forEach(el => observer.observe(el));
});
