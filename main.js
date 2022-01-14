
// Popup Box
const serviceItems = document.querySelector(".project_container");
const popup = document.querySelector(".popup-box")
// const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
   if(event.target.tagName.toLowerCase() == "button"){
      const item =event.target.parentElement.parentElement;
      console.log(item);
      const h3 = item.querySelector("h3").innerHTML;
      
      const readMoreCont = item.querySelector(".read-more-content").innerHTML;
      popup.querySelector("h3").innerHTML = h3;
      popup.querySelector(".popup-body").innerHTML = readMoreCont;
      popupBox();
   }

})

// popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
   popup.classList.toggle("open");
}

/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTION ACTIVE LINK =====*/ 
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


//Image Gallery Section
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.works__img').show('1000');
        }
        else{
            $('.works__img').not('.'+value).hide('1000');
            $('.works__img').filter('.'+value).show('1000');
        }
    })
    // Add active class on selected item
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // magnific Popup
    $('.items__container .works__link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });
})




