const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('nav');
const navigation = document.querySelector(".navigation");
const exitbutton = document.querySelector('#xbutton');
const ham = document.querySelector('#ham');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    // mainnav.classList.toggle("hidden-left");
    navigation.classList.toggle("hidden-left");
    exitbutton.classList.toggle('hidden');
    ham.classList.toggle('hidden');
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) {
        mainnav.classList.remove('responsive');
        exitbutton.classList.add("hidden");
        ham.classList.remove("hidden");
    }
};

