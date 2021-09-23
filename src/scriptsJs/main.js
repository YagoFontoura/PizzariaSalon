/*Navigation*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    });
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show');
    });
}


/*Mudar o Header quando der Scroll*/



function changeHeaderWhenScroll() {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

        if(window.scrollY >= navHeight) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
    }
}


function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }else {
        backToTopButton.classList.remove('show')
    }
}







window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    
});







