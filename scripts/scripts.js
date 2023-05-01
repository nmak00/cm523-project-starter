/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */



const ingredients = Array.from(document.getElementsByName('ingChoice')); 

const budget = Array.from(document.getElementsByName('bgtChoice'));

const diet = Array.from(document.getElementsByName('dietChoice'));

const choices = document.querySelectorAll('.checkmark');

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




for (var i = 0 ; i < resultBtn.length; i++) {     // from https://stackoverflow.com/a/32027957
   resultBtn[i].addEventListener('click', getResult ) ; 
}

for (var i = 0 ; i < choices.length; i++) {
  choices[i].addEventListener('click', highlight ) ; 
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


function highlight(item){
 
      if (item.checked){
        console.log(item.value);
        item.style.backgroundColor = "red";
      }
    
  }; 

  


function getResult(){
  const result = {
    ingredients:[],
    budget:[],
    diet:[],
  };
  
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


