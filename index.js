const containerElement = document.querySelector('.container');

getRandomRecipe();

async function getRandomRecipe() {
    const response = await fetch('https://week11-reti.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

    const recipeTitle = document.createElement('h2');
    const recipeImage = document.createElement('img');
    const instructionsBlock = document.createElement('p'); 
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientLIElement = document.createElement('li');
        ingredientLIElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIElement);
        
    });
    
    recipeTitle.innerHTML = recipeName;
    recipeImage.src = imageUrl;
    instructionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 Reti. All Rights Reserved.'

    containerElement.appendChild(recipeTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instructionsBlock);
    containerElement.appendChild(footer);
    

 

    console.log(recipeName);
    console.log(imageUrl);
    console.log(recipeInstructions);

}