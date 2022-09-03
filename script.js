const toggleSwitch = document.querySelector('input[type= "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or light images
function imagemode(color){
    image1.src =` img/undraw_date_night_bda8_${color}.svg`;
    image2.src = `img/undraw_light_the_fire_gt58_${color}.svg`;
    image3.src = `img/undraw_beach_day_cser_${color}.svg`;
}

// Dark mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    toggleIcon.children[0].textContent= 'Dark Mode'; /* we're targeting the span*/
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imagemode('dark');
}
//  Light mode styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent= 'Light Mode'; /* we're targeting the span*/
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imagemode('light')
}

// Switch theme dynamically
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark'); /* blue returns the elemnet that is the root element of the document ( <html> element for HTML document for exp)*/
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}
//  event listener
toggleSwitch.addEventListener('change', switchTheme);
// check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme); 
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}