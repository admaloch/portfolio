// main loading animation
const loader = document.querySelector('.loader');
const main = document.querySelector('#main')

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block'
        setTimeout(() => main.style.opacity = 100, 50)
    }, 1500)
}
init();

function fadeIn(item) {
    item.style.opacity = 100;
}
function fadeOut(item) {
    item.style.opacity = 0;
}


// page scroll event listener.. nav/social icons/progress bar reveal
const progressbarinner = document.querySelector('.progress-bar-inner');
const progressContainer = document.querySelector('.progress-container')
const nav = document.querySelector('nav')
const navStyle = document.querySelector('#nav-ul')
const socialIcons = document.querySelector('.social-buttons')


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        // scroll progress bar
        let h = document.documentElement;
        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        let roundedPercent = Math.floor(percent);
        progressbarinner.innerText = roundedPercent + "%";
        progressbarinner.style.width = percent + "%";
        // vert offset progress bar and nav
        if (window.pageYOffset > 100) {
            fadeIn(progressContainer)
            nav.classList.add('bg-custom-dark', 'shadow')
            navStyle.classList.add('nav-style-scroll')
            if (window.pageYOffset > 300) {
                fadeIn(socialIcons)
            }
            if (window.innerWidth < 992) {
                nav.classList.remove('bg-custom-dark', 'shadow')
                navStyle.classList.remove('nav-style-scroll')
            }
        } else {
            fadeOut(progressContainer)
            nav.classList.remove('bg-custom-dark', 'shadow')
            navStyle.classList.remove('nav-style-scroll')
            fadeOut(socialIcons)
        }
    })
})


// bootstrap make list disapear if clicked offscreen in addition to hamburger button toggle
window.onload = function() {
    document.addEventListener("click", function(event) {
      // if the clicked element isn't child of the navbar, you must close it if is open
      if (!event.target.closest(".nav-style") && document.getElementById("navbarNav").classList.contains("show")) {
        document.getElementById("burger-btn").click();
      }
    });
  }

// project section -- reveal info on button click

const projectButton = document.querySelectorAll('.project-description-btn')
const projectInfo = document.querySelectorAll('.project-info')

projectButton.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === 'More Details') {
            button.innerText = 'Close'
        } else {
            button.innerText = 'More Details'
        }
        projectInfo.forEach(info => {
            info.classList.toggle('project-info-appear')
        })
    })
})

// reset details after mouse leaves project box
const imageOverlay = document.querySelectorAll('.image-overlay')
imageOverlay.forEach(overlay => {
    overlay.addEventListener('mouseleave', () => {
        projectInfo.forEach(info => {
            info.classList.remove('project-info-appear')
        })
        projectButton.forEach(button => {
            button.innerText = 'More Details'
        })
    })
})

// contact section hover over bubble to make modal info appear
// change opacity of all contact bubbles to zero on hover

const overlay = document.querySelector('#modal-overlay')
const bubbleContainer = document.querySelectorAll('.bubble-container');
const contactBubbles = document.querySelectorAll('.row-bubbles');
const modalContainer = document.querySelector('#modal-container')
const modalTitle = document.querySelector('.modal-title')
const modalParagraph = document.querySelector('.modal-paragraph')

function classToggle(evt, find, toggle) {
    [].forEach.call(document.querySelectorAll('.' + find), function (a) {
        a.classList[evt.type === 'mouseover' ? 'add' : 'remove'](toggle);
    });
}

for (let i = 0; i < bubbleContainer.length; i++) {
    contactBubbles[i].addEventListener('mouseover', function (e) {
        classToggle(e, 'bubble-container', 'remove-opacity');
        classToggle(e, 'contact-info', 'text-dark');
    });
    contactBubbles[i].addEventListener('mouseout', function (e) {
        classToggle(e, 'bubble-container', 'remove-opacity');
        classToggle(e, 'contact-info', 'text-dark');
    });
}

//bring in modal and overlay
contactBubbles.forEach((contacts) => {
    contacts.addEventListener('mouseenter', function (e) {
        overlay.classList.add('display');
        modalContainer.classList.add('display');
        modalTitle.innerText = contacts.title;
        modalParagraph.innerText = contacts.dataset.content;
    })
    contacts.addEventListener('mouseleave', function (e) {
        overlay.classList.remove('display');
        modalContainer.classList.remove('display');
    })
})


// email contact form reveal
const emailForm = document.querySelector('.modal-bg');
const contactButton = document.querySelector('.contact-btn');
const closeButton = document.querySelector('.close-btn');


contactButton.addEventListener('click', function () {
    emailForm.classList.remove('d-none');
    nav.classList.add('d-none')
})
closeButton.addEventListener('click', function () {
    emailForm.classList.add('d-none');
    nav.classList.remove('d-none')
})

