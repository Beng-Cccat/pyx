const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section1 = document.querySelector(".section1");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section1_height = section1.offsetHeight;



window.addEventListener('scroll', () => {
    // scrooll为滚动条顶部到网页顶部的这段距离
    let scroll = window.pageYOffset;
    // 获取sectionY和contentY的大小及其相对于视口的位置
    let sectionY = section1.getBoundingClientRect();
    let contentY = content.getBoundingClientRect();
    // 这里利用forEach遍历DOM对象，对translate内的所有dom对象进行统一操作
    // 用于视差滚动
    translate.forEach(element => {
        // 获取dom中的data-speed的值
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
    opacity.forEach(element => {
        element.style.opacity = (scroll / (sectionY.top + section1_height)) * 3;
    })
    if (sectionY.top <= 50) {
        section1.style.backgroundColor = `#fff`
        content.style.color = `#151515`
        border.style.backgroundColor = `#151515`
    } else {
        section1.style.backgroundColor = `#151515`
        content.style.color = `#fff`
        border.style.backgroundColor = `#fff`
    }
    big_title.style.opacity = -scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section1_height + sectionY.top) * 300 - 100}px)`;
    image_container.style.transform = `translateY(${scroll / (section1_height + sectionY.top) * -300 + 100}px)`;
    if (contentY.bottom >= 0) {
        border.style.width = `${scroll / (sectionY.top + section1_height) * 170}%`;
    }

})