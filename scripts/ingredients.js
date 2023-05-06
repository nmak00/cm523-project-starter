/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */





// ingredient data

var data = [
  {
      "id": "white fish",
      "ingredient": "dashi",
      "budget": "2",
      "diet": "keto",
      "exclude": "vegetarian",
      
    },

    {
      "id": "liquid aminos",
      "ingredient": "soy sauce",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "soyfree", 
    },
    {
      "id": "hoisin sauce",
      "ingredient": "oyster sauce",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "soyfree", 
    },
    {
      "id": "worcestershire sauce",
      "ingredient": "oyster sauce",
      "budget": "1",
      "diet": "keto", 
      "exclude": "vegetarian", 
    },
    {
      "id": "maggi seasoning",
      "ingredient": "oyster sauce",
      "budget": "1",
      "diet": "soyfree", 
      "exclude": "", 
    },
    {
      "id": "mushroom sauce",
      "ingredient": "soy sauce",
      "budget": "3",
      "diet": "vegetarian", 
      "exclude": "", 
    },
    {
      "id": "water chestnuts",
      "ingredient": "bamboo",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "nutfree", 
    },
    {
      "id": "turnip",
      "ingredient": "bamboo",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "", 
    }, 
    {
      "id": "celery",
      "ingredient": "bamboo",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "", 
    }, 
    {
      "id": "tempeh",
      "ingredient": "tofu",
      "budget": "1",
      "diet": "vegetarian", 
      "exclude": "soyfree", 
    }, 
    {
      "id": "seitan",
      "ingredient": "tofu",
      "budget": "3",
      "diet": "vegetarian", 
      "exclude": "keto", 
    }, 
    {
      "id": "chickpeas",
      "ingredient": "tofu",
      "budget": "1",
      "diet": "vegetarian", 
      "exclude": "", 
    }, 

    {
      "id": "cornmeal",
      "ingredient": "rice",
      "budget": "1",
      "diet": "vegetarian", 
      "exclude": "keto", 
    }, 
    {
      "id": "quinoa",
      "ingredient": "rice",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "keto", 
    }, 
    {
      "id": "buckwheat",
      "ingredient": "rice",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "keto", 
    }, 

    {
      "id": "zucchini noodles",
      "ingredient": "noodles",
      "budget": "2",
      "diet": "vegetarian", 
      "exclude": "", 
    }, 

    {
      "id": "rice noodles",
      "ingredient": "noodles",
      "budget": "1", 
      "diet": "vegetarian", 
      "exclude": "keto", 
    }, 

    {
      "id": "glass noodles",
      "ingredient": "noodles",
      "budget": "2", 
      "diet": "keto", 
      "exclude": "", 
    }, 
    {
      "id": "beansprouts",
      "ingredient": "noodles",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 
  
    {
      "id": "oyster mushrooms",
      "ingredient": "squid",
      "budget": "2", 
      "diet": "vegan", 
      "exclude": "", 
    }, 

    {
      "id": "eggplant",
      "ingredient": "squid",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 
    {
      "id": "fried tofu",
      "ingredient": "squid",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "soyfree", 
    }, 

    {
      "id": "sriracha",
      "ingredient": "gochujang",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 

    {
      "id": "harissa",
      "ingredient": "gochujang",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 
    {
      "id": "sambal oelek",
      "ingredient": "gochujang",
      "budget": "1", 
      "diet": "keto", 
      "exclude": "vegan", 
    }, 
    {
      "id": "vegemite",
      "ingredient": "fish sauce",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 

    {
      "id": "soy sauce",
      "ingredient": "fish sauce",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "soy-free", 
    }, 
 
    {
      "id": "vegetable stock",
      "ingredient": "dashi",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "soy-free", 
    }, 
    {
      "id": "seaweed",
      "ingredient": "dashi",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 
    {
      "id": "seaweed",
      "ingredient": "dashi",
      "budget": "1", 
      "diet": "vegan", 
      "exclude": "", 
    }, 

  ];



//variables 

let userInput = JSON.parse(localStorage.getItem('result')); // localStorage can only store strings. JSON has to parse the string

console.log(userInput); 

const container = document.getElementById('resultcontainer');
const subGrid = document.getElementsByName('subGrid');
const ingResult = document.getElementsByName("ingResult");


function getSubs(){  // get list of substitute ingredients (wow.. i cant believe i actually solved this myself :') ) 
  const subList = {};
  let a = userInput.ingredients; 
 
let html = "";
a.forEach(sub => {
  subList[sub] = []; 
  let subNames="";
  for (let i = 0; i< data.length; i++){
    
    if ( data[i].ingredient == sub && userInput.budget > data[i].budget && userInput.diet!== data[i].exclude) {
            
        
       subList[sub].push(data[i].id);   
       subNames += `<label class = "subName" > ${data[i].id}   </label>`;       
    } 
  }
  html+= `<div class = "ingResult">
  <h3 class="mealName"> ${sub} </h3>
  <div class="btn-grid ingGrid">
    ${subNames}
  </div>
</div>
`; 

});


console.log(subList);
container.innerHTML = html;


}


getSubs();



