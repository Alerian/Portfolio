
const barParent = document.querySelector('.burgerMenu');
const listhold = document.querySelector('.listHolder');

const myWork = document.querySelector('.secondsection');
const myWorkjBut = document.querySelector('#myWorkButton');

const myCont = document.querySelector('.thirdsection');
const myContBut = document.querySelector('#myContactButton');

barParent.addEventListener('click', () => {
    if (listhold.style.display === "none") {
        listhold.style.display = "block";
    } else {
    listhold.style.display = "none";
    }
});
    
myWorkjBut.addEventListener('click', () => {
    myWork.scrollIntoView({behavior: 'smooth'});
});

myContBut.addEventListener('click', () => {
    myCont.scrollIntoView({behavior: 'smooth'});
});