/*import { googleTranslateElementInit } from "./common.js"*/

gsap.registerPlugin(ScrollTrigger);


gsap.to("#subImg1", {//타겟 되는 요소
    scrollTrigger: {
        trigger: "#subImg1", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
        start: "-200 200", // 애니메이션 시작시점
        end:"bottom bottom", // 애니메이션 종료시점
        scrub: 2
    },
    duration:2,opacity:1
});

gsap.to("#subImg2", {
    scrollTrigger: {
        trigger: "#subImg2",
        start: "-200 200",
        end:"center center",
        scrub: 2
    },
   duration:2,opacity:1
});

gsap.to("#subImg3", {
    scrollTrigger: {
        trigger: "#subImg3",
        start: "-680 -100",
        end:"-150 100",
        scrub: 2
    },
    duration:2,opacity:1
});

window.addEventListener("DOMContentLoaded", () => {
    console.log(document.querySelector('#lang'));
    document.querySelector('#lang').addEventListener('change',function(event) {
        console.log(event);
        let el = event.target;
        if(!!el.value){

            const tolang = el.value; // 변경할 언어 코드 얻기
            const gtcombo = document.querySelector('.goog-te-combo');
            if (gtcombo == null) {
                //alert("Error: Could not find Google translate Combolist.");
                return false;
            }
            gtcombo.value = tolang; // 변경할 언어 적용
            gtcombo.dispatchEvent(new Event('change')); // 변경 이벤트 트리거
        }
        return false;
    });
})
/*googleTranslateElementInit();*/
