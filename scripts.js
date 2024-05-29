window.addEventListener("scroll", () => {
    let slide = document.querySelectorAll(".slide");
    let windowBotton = window.scrollY + window.innerHeight;
    slide.forEach((slides) => {
        let slideMiddle = slides.offsetTop + slides.offsetHeight / 2;
        if (slideMiddle < windowBotton){
            slides.classList.add("activ")    
        } else {
            slides.classList.remove("activ")    
        }
    });
})