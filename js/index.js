gsap.registerPlugin(ScrollTrigger);

gsap.to("#subImg1", {
    scrollTrigger: {
        trigger: "#subImg1", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
        start: "top top", // 애니메이션 시작시점
        end:"bottom bottom", // 애니메이션 종료시점
        scrub: 2
    },
    y: -200,duration:2,opacity:1/*,
    stagger:{
        amount:0.5,from:"top top"
    }*/
});

gsap.to("#subImg2", {
    scrollTrigger: {
        trigger: "#subImg2", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
        start: "top top", // 애니메이션 시작시점
        end:"bottom bottom", // 애니메이션 종료시점
        scrub: 2
    },
    y: -250,duration:2,opacity:1
});
