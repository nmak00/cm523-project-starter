/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const ingredients = Array.from(document.getElementsByName('ingChoice')); 

const budget = Array.from(document.getElementsByName('bgtChoice'));

const diet = Array.from(document.getElementsByName('dietChoice'));

const header = document.getElementById('headerBox');
const ingredientBtn = document.getElementById('ing-btn');
const recipeBtn = document.getElementById('rec-btn');
const sections = Array.from(document.getElementsByClassName('promptcontainer'));
const firstQuestion = document.getElementById('qIngredient');

const resultBtn = document.getElementsByName('result-btn');

const nextBtn =document.getElementsByName('next-btn');



for (var i = 0 ; i < resultBtn.length; i++) {
   resultBtn[i].addEventListener('click', getResult ) ; 
}

ingredientBtn.addEventListener('click' , startIngredient);
nextBtn.addEventListener('click', clickNext) ;

function startIngredient(){
    header.classList.add('hide');
    firstQuestion.classList.remove('hide');
}


function clickNext(){
    let i =0; 
 while (i <sections.length) {
   let next = document.getElementsByClassName('promptcontainer').nextSibling;
   next.classList.remove('hide');
   next = next.nextSibling;
   i++; 
 }
}


function getResult(){
  const result = {
    ingredients:[],
    budget: [],
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
