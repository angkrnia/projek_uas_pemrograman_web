// onScroll Navbar
function scrollFunction() {
    if (
        document.body.scrollTop > 45 ||
        document.documentElement.scrollTop > 45
    ) {
        document.querySelector('.navbar').style.padding = '15px 30px';
        document.querySelector('.navbar').style.backgroundColor = '#cffafe';
        document.querySelector('.navbar').classList.add('shadow');
        document
            .querySelectorAll('.nav-item')
            .forEach((item) => (item.style.color = '#1e293b'));
        document.querySelector('.logo-img').width = '100';
        // document.querySelector('.logo-text').style.fontSize = '1rem';
        // document.querySelector('.logo-text').style.color = '#1e293b';
        document.querySelector('#menu').style.color = '#1e293b';
    } else {
        document.querySelector('.navbar').style.padding = '20px 40px';
        document.querySelector('.navbar').classList.remove('shadow');
        document.querySelector('.navbar').style.backgroundColor = 'transparent';
        document
            .querySelectorAll('.nav-item')
            .forEach((item) => (item.style.color = '#cffafe'));
        document.querySelector('.logo-img').width = '150';
        // document.querySelector('.logo-text').style.fontSize = '1.2rem';
        // document.querySelector('.logo-text').style.color = '#cffafe';
        document.querySelector('#menu').style.color = '#cffafe';
    }
}

window.onscroll = () => scrollFunction();

window.onload = () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 500);
};

// Swiper
let swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Toggle Menu Sidebar Collapse
function toggleMenu() {
    document.querySelector('.nav-list').classList.toggle('show');
}
document.addEventListener('click', (e) => {
    const isClose =
        !e.target.classList.contains('nav-list') &&
        !e.target.classList.contains('nav-item') &&
        !e.target.classList.contains('bi-list');
    if (isClose) {
        document.querySelector('.nav-list').classList.remove('show');
    }
});

const swiperCulture = new Swiper('.swiperCulture', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// fetch data destination from utils/destination.json

const fetchDestination = async () => {
    const data = await fetch('/utils/destinations.json');
    return await data.json();
};

const place = document.getElementById('place');
let destination = '';

console.log(data);

fetchDestination().then((response) => {
    response.forEach((data) => {
        destination += `
      <div class="card-place">
          <img src="./images/${data.image}" class="place-img">
          <div class="place-caption">
            <h1>${data.title}</h1>
            <small>${data.caption}</small>
            <a href="${data.linkDetail}">Learn more...</a>
          </div>
        </div>
      `;
    });

    setTimeout(() => {
        place.innerHTML = destination;
    }, 2000);
});
