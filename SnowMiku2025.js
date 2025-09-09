/*JS CODE*/

/* Reload page when clicking on the logo*/
const reloadpage = document.getElementById("header-img");
reloadpage.addEventListener("click", () => {
    location.reload();
});

/* Ticket purchase message display simulation*/
function showMessage(messageBox, textBox){

    messageBox.textContent = textBox;
    messageBox.hidden = false;

    setTimeout(() => {
        messageBox.hidden = true;}, 2000);
}
   
document.querySelectorAll('.buttonTicket').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.Card1, .Card2, .Card3');
        const titlecard = card.querySelector('h2').textContent.trim() || 'Ticket';
        const messageBox = card.querySelector('.message');
        showMessage(messageBox,`You purchased the ${titlecard} successfully!`);
    });
});

/* Image Slider */
const slides = document.querySelectorAll('.slides img');
let indexSlide = 0; /*To keep track of the displayed images*/
let intervalId = null; /*Timer that will automatically show the slides*/

/*EventLister to check when the DOM is fully loaded*/
document.addEventListener("DOMContentLoaded", initializeSlider);

/* Function to start the slider images automatically */
function initializeSlider(){
    
    if(slides.length > 0){
        slides[indexSlide].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

/* Function to initialize the slider*/
function showSlide(index){

    clearInterval(intervalId);

    if(index >= slides.length){
        indexSlide= 0;
    }else if(index < 0){
        indexSlide = slides.length - 1;
    }else{
        indexSlide = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[indexSlide].classList.add("displaySlide");

    intervalId = setInterval(nextSlide, 5000);
}

/* Manual controls functions*/
function lastSlide(){ 

    showSlide(indexSlide - 1);
}

function nextSlide(){

    showSlide(indexSlide + 1);
}