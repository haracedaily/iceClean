document.querySelector(".fix_btn").addEventListener("click", function() {
    location.href="/reservation.html";
})
window.addEventListener("load", function() {
    window.addEventListener("scroll", scrollTrigger);

    function scrollTrigger() {
        let header_nav = document.querySelector('#header_navBar');
        let header_lang = document.querySelector('#lang');
        let header_name=document.querySelector("#header_name");
        if(document.documentElement.scrollTop==0){
            header_nav.style.backgroundColor="white";
            header_nav.style.color="black";
            header_lang.style.color="black";
            header_name.children[0].style.color="black";
        }else{
            header_nav.style.backgroundColor="rgba(0,0,0,0.6)";
            header_nav.style.color="white";
            header_lang.style.color="white";
            header_name.children[0].style.color="white";
        }
        var sc = document.body.clientHeight - window.innerHeight - document.documentElement.scrollTop;
        if (sc < 0.3) {
            $downBtn.classList.add("none");
            $upBtn.classList.remove("none");
        }else{
            $downBtn.classList.remove("none");
            $upBtn.classList.add("none");
        }
    }
})
