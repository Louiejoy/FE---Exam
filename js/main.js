$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
})

const expandedMenu = document.getElementById("expanded-menu-id");
const scrollUp = document.getElementById("scrollUp");
const carousel = document.getElementById("carousel");

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const halfscrolled = scrollable / 2;

    console.log(scrollable);

    if (scrolled >= halfscrolled ) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
})

function scrollUpFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function toggleFunction() {
    expandedMenu.style.display = "block";
}

function toggleCloseFunction() {
    expandedMenu.style.display = "none";
}

function seeMoreFunction1() {
    const imageDiv1 = document.getElementById("image-api-div1")

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            imageDiv1.innerHTML = `<img src="${data.url}"/>`
        })
}

function seeMoreFunction2() {
    const imageDiv2 = document.getElementById("image-api-div2")

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            imageDiv2.innerHTML = `<img src="${data.url}"/>`
        })
}

function seeMoreFunction3() {
    const imageDiv3 = document.getElementById("image-api-div3")

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            imageDiv3.innerHTML = `<img src="${data.url}"/>`
        })
}

function seeMoreFunction4() {
    const imageDiv4 = document.getElementById("image-api-div4")

    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            imageDiv4.innerHTML = `<img src="${data.url}"/>`
        })
}