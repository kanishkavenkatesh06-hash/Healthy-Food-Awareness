// Healthy Recipe Database

const recipes = [

    {
        name: "Healthy Tomato Rice",
        category: "Lunch",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
        ingredients: ["rice", "tomato", "onion"],
        description: "A simple and tasty tomato rice.",
        steps: "1. Cook the rice.\n2. Chop tomato and onion.\n3. Saute onion and tomato in a little oil.\n4. Add cooked rice and mix well."
    },

    {
        name: "Banana Oats",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600",
        ingredients: ["oats", "banana", "milk"],
        description: "A nutritious breakfast recipe.",
        steps: "1. Heat milk in a pan.\n2. Add oats and cook.\n3. Add sliced banana.\n4. Mix and serve."
    },

    {
        name: "Vegetable Egg Omelette",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
        ingredients: ["egg", "onion", "tomato"],
        description: "A protein-rich breakfast.",
        steps: "1. Beat the eggs.\n2. Chop onion and tomato.\n3. Mix vegetables with eggs.\n4. Cook in a pan until done."
    },

    {
        name: "Ragi Banana Porridge",
        category: "Breakfast",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
        ingredients: ["ragi", "milk", "banana"],
        description: "A nutritious ragi-based dish.",
        steps: "1. Mix ragi flour with water.\n2. Cook until thick.\n3. Add milk.\n4. Add mashed banana and serve."
    },

    {
        name: "Healthy Vegetable Salad",
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
        ingredients: ["carrot", "cucumber", "tomato"],
        description: "A fresh and colorful vegetable salad.",
        steps: "1. Wash all vegetables.\n2. Chop carrot, cucumber and tomato.\n3. Mix them together.\n4. Add lemon juice and serve."
    },

    {
        name: "Sprouts Salad",
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
        ingredients: ["sprouts", "onion", "tomato"],
        description: "A healthy and fiber-rich snack.",
        steps: "1. Use properly prepared cooked sprouts.\n2. Chop onion and tomato.\n3. Mix all ingredients.\n4. Add lemon juice and serve."
    },

    {
        name: "Vegetable Sandwich",
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
        ingredients: ["bread", "cucumber", "tomato", "carrot"],
        description: "A quick vegetable sandwich.",
        steps: "1. Take two slices of bread.\n2. Chop cucumber, tomato and carrot.\n3. Place vegetables between bread slices.\n4. Serve fresh."
    },

    {
        name: "Spinach Rice",
        category: "Lunch",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
        ingredients: ["rice", "spinach", "onion"],
        description: "A nutritious green rice recipe.",
        steps: "1. Cook rice.\n2. Wash and chop spinach.\n3. Cook spinach and onion in a pan.\n4. Mix with rice."
    },

    {
        name: "Fruit Salad",
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600",
        ingredients: ["apple", "banana", "orange"],
        description: "A refreshing mix of fresh fruits.",
        steps: "1. Wash the fruits.\n2. Cut apple, banana and orange.\n3. Mix them together.\n4. Serve fresh."
    },

    {
        name: "Cucumber Raita",
        category: "Lunch",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
        ingredients: ["cucumber", "curd", "onion"],
        description: "A refreshing curd-based side dish.",
        steps: "1. Grate cucumber.\n2. Chop onion.\n3. Mix with fresh curd.\n4. Add a little salt and serve."
    }
];


// Display All Recipes

function displayRecipes() {

    const recipeList = document.getElementById("recipeList");

    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {

        recipeList.innerHTML += `
            <div class="recipe-card">

                <img src="${recipe.image}" alt="${recipe.name}"
                     onerror="this.src='https://placehold.co/600x400?text=Healthy+Food'">

                <div class="recipe-content">

                    <h3>${recipe.name}</h3>

                    <p>${recipe.description}</p>

                    <p><strong>Category:</strong> ${recipe.category}</p>

                    <button onclick="showDetails(${index})">
                        View Recipe
                    </button>

                </div>

            </div>
        `;

    });
}


// Show Recipe Details

function showDetails(index) {

    const recipe = recipes[index];

    alert(
        "Recipe: " + recipe.name +
        "\n\nIngredients: " + recipe.ingredients.join(", ") +
        "\n\nPreparation:\n" + recipe.steps
    );

}


// Find Recipes Using Ingredients

function findRecipes() {

    const input = document.getElementById("ingredientInput");

    const result = document.getElementById("searchResults");

    const userIngredients = input.value
        .toLowerCase()
        .split(/[,]+/)
        .map(item => item.trim())
        .filter(item => item !== "");

    result.innerHTML = "";

    if (userIngredients.length === 0) {

        result.innerHTML = "<p>Please enter at least one ingredient.</p>";

        return;
    }

    // Find matching recipes

    const matchingRecipes = recipes
        .map(recipe => {

            const matched = recipe.ingredients.filter(
                ingredient => userIngredients.includes(ingredient)
            );

            return {
                ...recipe,
                matched: matched,
                matchCount: matched.length
            };

        })
        .filter(recipe => recipe.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount);


    // Display Results

    if (matchingRecipes.length === 0) {

        result.innerHTML = `
            <p>No matching recipes found.
            Try ingredients like rice, tomato, oats or banana.</p>
        `;

        return;
    }

    matchingRecipes.forEach(recipe => {

        const index = recipes.indexOf(recipe);

        result.innerHTML += `
            <div class="recipe-card">

                <img src="${recipe.image}"
                     alt="${recipe.name}"
                     onerror="this.src='https://placehold.co/600x400?text=Healthy+Food'">

                <div class="recipe-content">

                    <h3>${recipe.name}</h3>

                    <p>${recipe.description}</p>

                    <p>
                        <strong>Available Ingredients:</strong>
                        ${recipe.matched.join(", ")}
                    </p>

                    <p>
                        <strong>Matching Ingredients:</strong>
                        ${recipe.matchCount}
                    </p>

                    <button onclick="showDetails(${index})">
                        View Recipe
                    </button>

                </div>

            </div>
        `;

    });

}


// Contact Form

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("contactMessage").innerText =
        "Thank you " + name + "! Your feedback has been received.";

    this.reset();

});


// Load Recipes When Page Opens

displayRecipes();