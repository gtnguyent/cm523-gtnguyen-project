/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

// 30 drinks - quiz based dataset
// ingredients and recipes are not finalized. using placeholders atm

const DRINKS = [
    //calm and classic
    {
        id: "hot-matcha-latte",
        name: "Hot Matcha Latte",
        mood: "classic",
        serving: "hot",
        energy: "light",
        category: "classic matcha",
        description: "A cozy, familiar hot matcha latte with gentle sweetness.",
        pastry: "Butter croissant",
        ingredients: ["Matcha", "Milk", "Hot water", "Sweetener"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Steam milk with sweetener",
            "Combine in a mug and stir."
        ]
    },

    {
        id: "brown-sugar-matcha-latte",
        name: "Brown Sugar Matcha Latte",
        mood: "classic",
        serving: "hot",
        energy: "bold",
        category: "classic matcha",
        description: "A richer hot matcha latte sweetened with caramelized brown sugar.",
        pastry: "Cinnamon roll",
        ingredients: ["Matcha", "Milk", "Hot water", "Brown sugar syrup"],
        steps: [
            "Stir brown sugar syrup into a mug.",
            "Whisk matcha with hot water.",
            "Steam milk and pour over the brown sugar layer and matcha."
        ]
    },
    
    {
        id: "iced-matcha-latte",
        name: "Iced Matcha Latte",
        mood: "classic",
        serving: "iced",
        energy: "light",
        category: "classic matcha",
        description: "Classic iced matcha latte that's light and refreshing.",
        pastry: "Shortbread cookie",
        ingredients: ["Matcha", "Milk", "Ice", "Sweetener"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Fill a glass with ice and milk.",
            "Pour matcha over and stir"
        ]
    },

    {
        id: "double-matcha-latte",
        name: "Double Matcha Latte",
        mood: "classic",
        serving: "iced",
        energy: "bold",
        category: "classic matcha",
        description: "Extra-strong iced matcha latte for full intensity",
        pastry: "Almond biscotti",
        ingredients: ["Matcha", "Milk", "Ice", "Sweetener"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Fill a glass with ice and milk.",
            "Pour matcha over and stir"
        ]
    },

    {
        id: "matcha-cream-top",
        name: "Matcha Cream Top",
        mood: "classic",
        serving: "creamy",
        energy: "light",
        category: "classic matcha",
        description: "Iced matcha topped with a light milk foam cap.",
        pastry: "Madeleine",
        ingredients: ["Matcha", "Milk", "Ice", "Sweetener", "Heavy Cream"],
        steps: [
            "Prepare iced matcha in a glass cup.",
            "Froth a small amount of milk",
            "Spoon foam over the top"
        ]
    },

    {
        id: "matcha-einspanner",
        name: "Matcha Einspanner",
        mood: "classic",
        serving: "creamy",
        energy: "bold",
        category: "classic matcha",
        description: "Classic iced matcha latte that's light and refreshing.",
        pastry: "Shortbread cookie",
        ingredients: ["Matcha", "Milk", "Ice", "Sweetener"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Fill a glass with ice and milk.",
            "Pour matcha over and stir"
        ]
    },

    //fruity and fresh

    {
        id: "honey-matcha-lemonade",
        name: "Honey Matcha Lemonade",
        mood: "fruity",
        serving: "hot",
        energy: "light",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "hot-honey-lemon-matcha",
        name: "Hot Honey Lemon Matcha",
        mood: "fruity",
        serving: "hot",
        energy: "bold",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        mood: "fruity",
        serving: "iced",
        energy: "light",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "yuzu-sparkling-matcha",
        name: "Yuzu Sparkling Matcha",
        mood: "fruity",
        serving: "iced",
        energy: "bold",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "mango-matcha",
        name: "Mango Matcha",
        mood: "fruity",
        serving: "creamy",
        energy: "light",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "orange-cream-matcha",
        name: "Orange Cream Matcha",
        mood: "fruity",
        serving: "creamy",
        energy: "bold",
        category: "fruit",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    // floral and soothing 

    {
        id: "hot-jasmine-matcha-latte",
        name: "Hot Jasmine Matcha Latte",
        mood: "floral",
        serving: "hot",
        energy: "light",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "earl-grey-matcha-latte",
        name: "Earl Grey Matcha Latte",
        mood: "floral",
        serving: "hot",
        energy: "bold",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "jasmine-matcha-latte",
        name: "Jasmine Matcha Latte",
        mood: "floral",
        serving: "iced",
        energy: "light",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "rose-matcha-latte",
        name: "Rose Matcha Latte",
        mood: "floral",
        serving: "iced",
        energy: "bold",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "lavender-matcha-latte",
        name: "Lavender Matcha Latte",
        mood: "floral",
        serving: "creamy",
        energy: "light",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "sage-vanilla-matcha-latte",
        name: "Sage Vanilla Matcha Latte",
        mood: "floral",
        serving: "creamy",
        energy: "bold",
        category: "floral",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    // earthy & roasted

    {
        id: "oolong-matcha-latte",
        name: "Oolong Matcha Latte",
        mood: "earthy",
        serving: "hot",
        energy: "light",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "hot-dirty-matcha",
        name: "Hot Dirty Matcha",
        mood: "earthy",
        serving: "hot",
        energy: "bold",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "iced-hojicha-latte",
        name: "Iced Hojicha Latte",
        mood: "earthy",
        serving: "iced",
        energy: "light",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "iced-dirty-matcha",
        name: "Iced Dirty Matcha",
        mood: "earthy",
        serving: "iced",
        energy: "bold",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "toasted-almond-matcha-latte",
        name: "Toasted Almond Matcha Latte",
        mood: "earthy",
        serving: "creamy",
        energy: "light",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "black-sesame-matcha-latte",
        name: "Black Sesame Matcha Latte",
        mood: "earthy",
        serving: "creamy",
        energy: "bold",
        category: "earthy",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    // dessert & indulgent

    {
        id: "hot-white-chocolate-matcha",
        name: "Hot White Chocolate Matcha",
        mood: "dessert",
        serving: "hot",
        energy: "light",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "matcha-creme-brulee-latte",
        name: "Matcha Creme Brulee Latte",
        mood: "dessert",
        serving: "hot",
        energy: "bold",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "iced-white-chocolate-matcha",
        name: "Iced White Chocolate Matcha",
        mood: "dessert",
        serving: "iced",
        energy: "light",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "matcha-tiramisu-latte",
        name: "Matcha Tiramisu Latte",
        mood: "dessert",
        serving: "iced",
        energy: "bold",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "ube-matcha",
        name: "Ube Matcha",
        mood: "dessert",
        serving: "creamy",
        energy: "light",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

    {
        id: "banana-cream-matcha",
        name: "Banana Cream Matcha",
        mood: "dessert",
        serving: "creamy",
        energy: "bold",
        category: "dessert",
        description: "Insert Description",
        pastry: "Insert Pairing",
        ingredients: ["Matcha", "1", "2", "3"],
        steps: [
            "Whisk matcha with hot water until smooth",
            "Step 2",
            "Step 3"
        ]
    },

];

function setSelectedDrinkId(id) {
    localStorage.setItem("selectedDrinkId", id);
}

function getSelectedDrink() {
    const id = localStorage.getItem("selectedDrinkId");
    return DRINKS.find(d=> d.id === id) || null;
}

//quiz

function initQuizPage() {
    const form = document.getElementById("flavor-quiz");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const data = new FormData(form);
        const mood = data.get("mood");
        const serving = data.get("serving");
        const energy = data.get("energy");

        const drink = chooseDrinkFromQuiz({ mood, serving, energy});
        setSelectedDrinkId(drink.id);

        window.location.href = "result.html";
    });
}

function chooseDrinkFromQuiz({mood, serving, energy}) {
    let match = DRINKS.find(
        (d) => d.mood === mood && d.serving === serving && d.energy === energy 
    );

    if (!match) match = DRINKS.find(d => d.mood === mood && d.serving === serving);
    if (!match) match = DRINKS.find(d => d.mood === mood);
    if (!match) match = DRINKS [0];

    return match;
}

//results

function initResultPage() {
    const drink = getSelectedDrink();
    if (!drink) return;

    document.getElementById("result-drink-name").textContent = drink.name;
    document.getElementById("result-drink-description").textContent = drink.description;
    document.getElementById("result-category").textContent = formatCategory(drink.category);
    document.getElementById("result-serving").textContent = capitalize(drink.serving);
    document.getElementById("result-energy").textContent = drink.energy === "light" ? "Light" : "Bold";
    document.getElementById("result-pastry").textContent = drink.pastry;

    document.getElementById("view-recipe-btn").addEventListener("click", () => {
    window.location.href = "recipe.html";
  });        
}

//catalog

function initCatalogPage() {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;

    renderCatalog("all");

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCatalog(btn.dataset.filter);
        });
    });
}

function renderCatalog(filter) {
    const grid = document.getElementById("catalog-grid");
    grid.innerHTML = "";

    const drinks = filter === "all"
    ? DRINKS
    : DRINKS.filter(d => d.category.includes(filter));

    drinks.forEach(drink => {
        const card = document.createElement("article");
        card.className = "drink-card";
        card.innerHTML = `
            <h3>${drink.name}</h3>
            <p>${drink.description}</p>
            <p class="result-meta">
                 ${formatCategory(drink.category)} · ${capitalize(drink.serving)}
</p>
`;

    card.addEventListener("click", () => {
        setSelectedDrinkId(drink.id);
        window.location.href = "recipe.html";
    });

    grid.appendChild(card);
});

}

//recipe

function initRecipePage() {
    const drink = getSelectedDrink();
    if (!drink) return;

    document.getElementById("recipe-name").textContent = drink.name;
    document.getElementById("recipe-description").textContent = drink.description;
    document.getElementById("recipe-category").textContent = formatCategory(drink.category);
    document.getElementById("recipe-serving").textContent = capitalize(drink.serving);
    document.getElementById("recipe-energy").textContent = drink.energy === "light" ? "Light" : "Bold";
    document.getElementById("recipe-pastry").textContent = drink.pastry;

    const ingList = document.getElementById("recipe-ingredients");
    const stepsList = document.getElementById("recipe-steps");

    ingList.innerHTML = drink.ingredients.map(i => `<li>${i}</li>`).join("");
    stepsList.innerHTML = drink.steps.map(s => `<li>${s}</li>`).join("");

    document.getElementById("recipe-image-label").textContent = drink.name;

}

//home

function initHomePage() {
    document.querySelectorAll(".view-recipe-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setSelectedDrinkId(btn.dataset.drinkId);
            window.location.href = "recipe.html";
        });
    });

}

//other

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatCategory(cat) {
    return cat
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
}

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    if (page === "home") initHomePage();
    if (page === "quiz") initQuizPage();
    if (page === "result") initResultPage();
    if (page === "catalog") initCatalogPage();
    if (page === "recipe") initRecipePage();
});