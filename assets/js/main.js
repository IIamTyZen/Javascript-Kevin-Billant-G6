/*==================== Navbar ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    }) 
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.getElementById('.navigation-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== change txt ====================*/ 

let textElements = document.getElementsByTagName("span");
    let texts = ['NEW PRODUCT', 'NOUVEAU PRODUIT', 'NEUES PRODUKT', 'NOVO PRODUTO'];
    let i = 0;

    setInterval(function() {
        textElements[0].innerHTML = texts[i];
        i = (i + 1) % texts.length;
    }, 1000);

