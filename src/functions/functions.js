import maatje from '../media/maatje-mockup.jpg';
import delivar from '../media/delivar-mockup.jpg';
import inflite from '../media/inflite-mockup.jpg';
import drwd from '../media/drwd-mockup.jpg';

window.onload=function(){    

    // const mobileNav = document.querySelector('.nav');
    // const navToggle = document.querySelector('.nav-toggle-mobile');

    // navToggle.addEventListener('click', (e) => {
    //     const visibility = mobileNav.getAttribute('data-visible');
        
    //     if (visibility === 'false') {
    //         mobileNav.setAttribute('data-visible', true);
    //         navToggle.setAttribute('aria-expanded', true);
    //         navToggle.innerText = 'CLOSE';
    //     } else if (visibility === 'true') {
    //         mobileNav.setAttribute('data-visible', false);
    //         navToggle.setAttribute('aria-expanded', false);
    //         navToggle.innerText = 'MENU';
    //     }
    // });

    const workThumbnail = document.querySelector('.work-thumbnail-image');
    const itemOne = document.querySelector('.work-item-1');
    const itemTwo = document.querySelector('.work-item-2');
    const itemThree = document.querySelector('.work-item-3');
    const itemFour = document.querySelector('.work-item-4');

    itemOne.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', maatje);
    });

    itemTwo.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', delivar);
    });

    itemThree.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', inflite);
    });

    itemFour.addEventListener('mouseover', (e) => {
        workThumbnail.setAttribute('src', drwd);
    });
};

export default Function;