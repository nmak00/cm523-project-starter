/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


//variables 

const ingredients = Array.from(document.getElementsByName('ingChoice')); 

const budget = Array.from(document.getElementsByName('bgtChoice'));

const diet = Array.from(document.getElementsByName('dietChoice'));

const cuisine = Array.from(document.getElementsByName('cuisineChoice'));

const choices = document.querySelectorAll('.choiceBtn');
/* const dietChoice = document.getElementsByName('dietChoice');
const budgetChoice = document.getElementsByName('bgtChoice');
const cuisineChoice = document.getElementsByName('cuisineChoice'); */ 

const stCtrl = document.querySelector('.startcontrols');
const siteName = document.querySelector('#siteName');
const subhead = document.querySelector('#subheading');
const ingredientBtn = document.getElementById('ing-btn');
const recipeBtn = document.getElementById('rec-btn');
const sections = Array.from(document.getElementsByClassName('promptcontainer'));
const slideContainer = document.querySelector('.slideBox');
const slider = document.querySelector('.slider');
const resultBtn = document.getElementsByName('result-btn');
const recSlide = document .querySelector('#recSlide');




/* const body = document.getElementById("body");
body.addEventListener('click', closePrompt)

function closePrompt() {
  slider.classList.add('hide');
}
*/




for (let i = 0 ; i < choices.length; i++) {
  choices[i].addEventListener('click', function(){
    highlight(this);
  } ) ; 
}

for (let i = 0 ; i < resultBtn.length; i++) {     // from https://stackoverflow.com/a/32027957
  resultBtn[i].addEventListener('click', function(){
    getResult(this);
  } ) ; 
}





ingredientBtn.addEventListener('click' , startIngredient);
recipeBtn.addEventListener('click',startRecipe );



function startIngredient(){
    
    subhead.classList.add('hide');
    slideContainer.classList.remove('hide');
    $('.slider').slick('refresh');
    slider.style.cssText = `transform: translateY(-200px); transition: .5s`; 
    siteName.style.cssText = `opacity:50%; transition: .5s`; 
}

function startRecipe(){
  subhead.classList.add('hide');
  recSlide.classList.remove('hide');
  $('.slider').slick('refresh'); // this is a slick setting to refresh the slide after a javascript cue 
  recSlide.style.cssText = `transform: translateY(-200px); transition: .5s`; 
  siteName.style.cssText = `opacity:50%; transition: .5s`;
}


$('.slider').on('wheel', (function(e) { // allows scrolling to control slider, from https://medium.com/swlh/implementing-mouse-scroll-in-slick-js-175b5025b79
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));

$('#recSlides').on('wheel', (function(e) { 
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));




function highlight(item){
      if (item.checked){
        console.log(item.value);
        item.parentElement.classList.toggle("checked");
      }
    
  }; 

  


function getResult(item){
  const result = {
    cuisine:[],
    ingredients:[],
    budget:[],
    diet:[],
  };

  cuisine.forEach(item => {
    if(item.checked){
     result.diet.push(item.value);
    }
  });
  
ingredients.forEach(item => {
    if(item.checked){
      result.ingredients.push(item.value); 
    }
  }); 

 budget.forEach(item => {
    if(item.checked){
      result.budget.push(item.value);
    }
  }); 
 
 diet.forEach(item => {
    if(item.checked){
     result.diet.push(item.value);
    }
  }); 

  
  
  console.log(result); 


  }


