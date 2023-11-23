'use strict'

window.addEventListener("DOMContentLoaded", function () {

    
    let slidesData = [
        {
            name: 'Golden Soft \nGS-200D-B для отеля',
            description: 'Замок дверной электронный Golden Soft\nGS-200Z-5 имеет роскошный глянцевый\nблеск, четкие линии, красивые формы.\n\nПодходит для установки на\nдеревянную/межкомнатную дверь.',
            oldPrice: '25 000$',
            newPrice: '28 000$',
            dotImage: '/src/imgs/slides/circle_nav.png',
            photo: "/src/imgs/slides/second_screen.jpg"
        },
        {
            name: 'Golden Soft \nGS-200D-B для офиса',
            description: 'Замок дверной электронный Golden Soft\nGS-200Z-5 имеет роскошный глянцевый\nблеск, четкие линии, красивые формы.\n\nПодходит для установки на\nдеревянную/межкомнатную дверь.',
            oldPrice: '33 000$',
            newPrice: '37 000$',
            dotImage: '/src/imgs/slides/circle_nav.png',
            photo: "/src/imgs/slides/first_screen.jpg"
        },
        {
            name: 'Golden Soft \nGS-200Z-A для офиса',
            description: 'Замок дверной электронный Golden Soft\nGS-200Z-5 имеет роскошный глянцевый\nблеск, четкие линии, красивые формы.\n\nПодходит для установки на\nдеревянную/межкомнатную дверь.',
            oldPrice: '16 000$',
            newPrice: '17 000$',
            dotImage: '/src/imgs/slides/circle_nav.png',
            photo: "/src/imgs/slides/third_screen.jpg"
        }
    ];

    let slides = document.querySelectorAll(".first-screen__slider_navigation-dot");
    let leftArrow = document.querySelector(".first-screen__slider_navigation-arrows_left");
    let rightArrow = document.querySelector(".first-screen__slider_navigation-arrows_right");
    let photoItem = this.document.querySelector(".first-screen__item-image_pic")
    let [nameItem, descrItem, oldPriceItem, newPriceItem, ] = document.querySelectorAll(".first-screen__title, .first-screen__sub-title, .first-screen__price-old, .first-screen__price-new");

    let currentSlide = 1;

    function setSlide(index) {
        
        let slideData = slidesData[index];
        nameItem.textContent = slideData.name;
        descrItem.textContent = slideData.description;
        oldPriceItem.textContent = slideData.oldPrice;
        newPriceItem.textContent = slideData.newPrice;
        photoItem.src = slideData.photo;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
        slides.forEach((slide, i) => slide.src = i === index ? slideData.dotImage : '/src/imgs/slides/dot.png');
        
        
        
    }

    leftArrow.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
        setSlide(currentSlide);

        
      
    });

    rightArrow.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slidesData.length;
        setSlide(currentSlide);
    });

    setSlide(currentSlide);
});
