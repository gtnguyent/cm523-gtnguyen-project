/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* js holds the drink data, does quiz logic, renders catalog, fills in results and recipe page template */

// 30 drinks - quiz based dataset
// ingredients and recipes are not finalized. using placeholders atm


const DRINKS = [
    //calm and classic
    {
        id: "hot-chai-matcha-latte", //id to look up drink
        name: "Hot Chai Matcha Latte", // drink name displayed
        mood: "classic", // quiz question 1
        serving: "hot", // quiz question 2
        energy: "light", // quiz question 3
        category: "classic matcha", // catalog filter 
        image: "images/drinks/hot-chai-matcha-latte.png",
        description: "A warm, soothing blend of matcha and gentle chai spices.",
        pastry: "Butter Croissant",
        ingredients: [
            "1 tsp (2 g) matcha powder", 
            "2 tbsp (30 ml) hot water (170-175°F / 76-80°C)", 
            "1 cup (240 ml) milk of choice", 
            "1/2-2 tsp chai spice blend OR 1-2 tsp chai concentrate",
            "1-2 tsp (5-10g ) sweetener"],
        steps: [
            "Sift matcha into a mug or bowl.",
            "Add hot water and whisk or froth until smooth and lightly foamy.",
            "In a small pot, heat the milk with chai spices or chai concentrate until steaming (not boiling).",
            "Pour the hot spiced milk into the mug with matcha and gently stir to combine.",
        ],

        upgrades: [
            "Vanilla flavor: Add ⅛ tsp (0.5 ml) vanilla extract to the milk.",
            "Extra creamy: Add 1 tbsp (15 ml) half-and-half or sweet cream.",
            "Bolder chai: Steep a chai tea bag in the milk for 2-3 minutes",
        ],

        flavorNotes: [
            "Earthy matcha with warm, gentle chai spices ",
            "Notes of cinnamon",
        ]
    },

    {
        id: "brown-sugar-matcha-latte",
        name: "Brown Sugar Matcha Latte",
        mood: "classic",
        serving: "hot",
        energy: "bold",
        category: "classic matcha",
        image: "images/drinks/brown-sugar-matcha-latte.png",
        description: "A warm and bold matcha latte sweetened with rich brown sugar and layered with deep, caramel notes.",
        pastry: "Brown Butter Chocolate Chip Cookie",
        ingredients: [
             "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (170-175°F / 76-80°C)",
            "1 cup (240 ml) milk of choice",
            "1 tbsp (12 g) brown sugar (light or dark)",
            "1 tbsp (15 ml) water",
            "1/2-1 tsp (2-4 ml) vanilla extract (optional)",
            "Pinch of salt (optional, enhances caramel flavor)",
        
        ],
        steps: [
            "In a small pot or microwave-safe mug, combine brown sugar and water and heat just until the sugar dissolves and the mixture lightly bubbles.",
            "Optional: Stir in vanilla extract and a tiny pinch of salt to boost the caramel flavor.",
            "Add the milk to the brown sugar mixture and heat until steaming but not boiling.",
            "Sift the matcha into a separate bowl or mug to avoid clumps.",
            "Pour in 2 tbsp (30 ml) hot water and whisk or froth in a fast zig-zag motion until smooth and lightly foamy.",
            "Pour the warm brown-sugar milk into your serving mug.",
            "Add the whisked matcha to the mug and stir gently to combine into a smooth latte.",
            "Taste and adjust sweetness or intensity if needed."
        ],

         upgrades: [
            "Extra bold: Increase matcha to 1½ tsp (3 g).",
            "Richer caramel: Use dark brown sugar or add ½ tsp (2 g) molasses.",
            "Creamy finish: Add 1 tbsp (15 ml) sweet cream or half-and-half.",
            "Layered flavor: Drizzle extra brown sugar syrup on top of the foam.",
            "Toasted depth: Add a pinch of cinnamon or a shake of cinnamon sugar."
        ],

        flavorNotes: [
            "Brown sugar adds depth without overwhelming the green tea flavor.",
            "Perfect balance between earthy and sweet."
        ]
    },
    
    {
        id: "iced-matcha-latte",
        name: "Iced Matcha Latte",
        mood: "classic",
        serving: "iced",
        energy: "light",
        category: "classic matcha",
        image: "images/drinks/iced-matcha-latte.png",
        description: "A crisp, refreshing iced matcha latte, perfect for any occasion.",
        pastry: "Almond Croissant",
        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (170-175°F / 76-80°C, not boiling)",
            "1 cup (240 ml) milk of choice (dairy or plant-based)",
            "1/2-1 tsp (2-5 g) sweetener, optional (honey, sugar, or syrup)",
            "1/2 cup (120 ml) ice cubes"
        ],
        steps: [
            "Sift the matcha into a small bowl or glass to help prevent clumps.",
            "Add 2 tbsp (30 ml) hot water and whisk or froth in a fast zig-zag motion until the matcha is fully dissolved and lightly frothy.",
            "Fill a serving glass with ½ cup (120 ml) ice cubes.",
            "Pour 1 cup (240 ml) milk over the ice.",
            "Stir in sweetener if using, adjusting to taste.",
            "Slowly pour the whisked matcha over the iced milk to create a layered effect.",
            "Stir gently to combine into a smooth, refreshing iced latte."
        ],

        upgrades: [
            "To make it creamier: Add 1-2 tbsp (15-30 ml) sweet cream or oat cream.",
            "Citrus twist: Add a few drops of orange or lemon zest for brightness.",
            "Layered latte effect: Pour matcha slowly over milk for a gradient look.",
            "Extra froth: Shake the matcha shot in a small jar before adding it to the glass."
        ],

        flavorNotes: [
            "Light, earthy matcha with a refreshing cold texture.",
            "Subtle sweetness enhances the matcha flavor.",
            "Smooth, lightly creamy texture from the milk."
        ],
    
    },

    {
        id: "double-matcha-latte",
        name: "Double Matcha Latte",
        mood: "classic",
        serving: "iced",
        energy: "bold",
        category: "classic matcha",
        image: "images/drinks/double-matcha-latte.png",
        description: "A bold, invigorating iced matcha latte with a double shot of ceremonial matcha for great intensity.",
        pastry: "Dark Chocolate Almond Bar",
        ingredients: [
            "2 tsp (4 g) matcha powder (double strength)",
            "2–3 tbsp (30–45 ml) hot water (170–175°F / 76–80°C)",
            "1 cup (240 ml) milk of choice",
            "½–1 tsp (2–5 g) sweetener, optional",
            "½ cup (120 ml) ice cubes"
        ],
        steps: [
            "Sift 2 tsp (4 g) matcha into a bowl or glass to prevent clumps.",
            "Add 2–3 tbsp (30–45 ml) hot water and whisk or froth vigorously until smooth and frothy.",
            "Fill a serving glass with ½ cup (120 ml) ice cubes.",
            "Pour 1 cup (240 ml) milk over the ice and stir in sweetener if desired.",
            "Slowly pour the whisked matcha over the iced milk to create a bold, layered effect.",
            "Stir gently until fully combined into a strong, smooth iced latte."
        ],

        upgrades: [
            "Extra creamy: Add 1–2 tbsp (15–30 ml) oat cream or half-and-half.",
            "Layered visual: Pour matcha slowly over the milk for a clean gradient.",
            "Minty twist: Add fresh mint leaves or a drop of mint extract.",
            "Citrus brightness: Add a thin slice of lemon or orange peel.",
            "Foamy top: Shake the matcha shot in a jar before pouring."
        ],

        flavorNotes: [
            "Bold, earthy matcha flavor intensified by a double matcha dose.",
            "Smooth, refreshing, lightly creamy texture.",
            "Vibrant green color and full-bodied taste.",
        ]
    },

    {
        id: "matcha-cream-top",
        name: "Matcha Cream Top",
        mood: "classic",
        serving: "creamy",
        energy: "light",
        category: "classic matcha",
        image: "images/drinks/matcha-cream-top.png",
        description: "A delicate, lightly brewed matcha tea crowned with a cloud of creamy, airy foam for a gentle, elegant sip.",
        pastry: "Madeleine",
        ingredients: ["Matcha", "Milk", "Ice", "Sweetener", "Heavy Cream"],
        ingredients: [
            "1 tsp (2 g) matcha powder",
            "4 oz (120 ml) hot water (175°F / 80°C)",
            "2 tbsp (30 ml) milk or plant milk",
            "1 tbsp (15 ml) heavy cream, optional",
            "½ tsp (2 g) sweetener, optional (sugar, honey, or syrup)"
        ],

        steps: [
            "Sift 1 tsp matcha into a bowl or mug.",
            "Add 4 oz (120 ml) hot water and whisk or froth until smooth and lightly frothy.",
            "In a small cup, whisk or froth milk, optional cream, and sweetener until it becomes airy foam.",
            "Pour the matcha into a serving cup.",
            "Gently spoon the cream foam over the top.",
            "Optional: dust with a tiny pinch of matcha powder for garnish."
        ],

        upgrades: [
            "Vanilla cream foam: Add ¼ tsp (1 ml) vanilla extract before frothing.",
            "Lightly sweetened base: Add ½–1 tsp honey or maple syrup to the matcha.",
            "Flavored foam: Add a hint of cinnamon, cocoa, or extra matcha.",
            "Extra creamy: Use 2 tbsp (30 ml) heavy cream or oat cream for a richer topping."
        ],

        flavorNotes: [
            "Light, clean matcha flavor.",
            "Smooth, airy foam adds creamy contrast without heaviness.",
            "Elegant, refreshing, perfect for a calm moment.",
            "Minimal sweetness allows the natural matcha character to shine."
    ],
    },

    {
        id: "matcha-einspanner",
        name: "Matcha Einspanner",
        mood: "classic",
        serving: "creamy",
        energy: "bold",
        category: "classic matcha",
        image: "images/drinks/matcha-einspanner.png",
        description: "A bold, full-bodied matcha tea crowned with rich, velvety cream foam — indulgent yet smooth, perfect for slow sipping.",
        pastry: "Butter Croissant",
        ingredients: [
            "1½ tsp (3 g) matcha powder (bold strength)",
            "4 oz (120 ml) hot water (175°F / 80°C)",
            "½–1 tsp (2–5 g) sweetener, optional",
            "3 tbsp (45 ml) milk or plant-based milk",
            "2 tbsp (30 ml) heavy cream (for rich foam)"
        ],

        steps: [
            "Sift matcha into a bowl or mug.",
            "Add 4 oz (120 ml) hot water and whisk or froth until smooth and frothy.",
            "In a small cup, whisk or froth milk and heavy cream until thick and velvety.",
            "Pour the prepared matcha into a serving glass.",
            "Spoon the rich cream foam generously on top.",
            "Optional: Dust the foam lightly with matcha powder for garnish."
        ],

        upgrades: [
            "Extra bold: Increase matcha to 2 tsp (4 g) for a stronger infusion.",
            "Vanilla foam: Add ¼ tsp (1 ml) vanilla extract before frothing.",
            "Sweet touch: Drizzle honey, maple syrup, or brown sugar syrup.",
            "Foam art: Dust with cinnamon, cocoa, or matcha for visual flair."
        ],

        flavorNotes: [
            "Bold, earthy matcha with a velvety, thick cream topping.",
            "Smooth and indulgent, without overwhelming sweetness.",
            "Luxury café-style texture ideal for slow sipping.",
            "Rich foam contrasts beautifully with robust matcha depth."
        ],

    },

    //fruity and fresh

    {
        id: "honey-lemon-matcha-tea",
        name: "Honey Lemon Matcha Tea",
        mood: "fruity",
        serving: "hot",
        energy: "light",
        category: "fruit",
        image: "images/drinks/honey-lemon-matcha-tea.png",
        description: "A bright, soothing matcha tea infused with honey and fresh lemon — light, cozy, and perfectly uplifting.",
        pastry: "Lemon Madeleine",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "4 oz (120 ml) hot water (175°F / 80°C)",
            "1–2 tsp (5–10 g) honey",
            "1 tsp (5 ml) fresh lemon juice",
            "Optional: lemon slice for garnish"
        ],

        steps: [
            "Sift matcha into a bowl or mug.",
            "Add 4 oz (120 ml) hot water and whisk or froth until smooth and lightly frothy.",
            "Stir in honey until dissolved.",
            "Add lemon juice and adjust sweetness or citrus to taste.",
            "Pour into a mug and optionally garnish with a lemon slice."
        ],

        upgrades: [
            "Ginger boost: Add a thin slice of fresh ginger while whisking.",
            "Herbal twist: Steep a small chamomile or mint leaf in the hot water.",
            "Honey lovers: Drizzle extra honey on top for a layered flavor.",
            "Citrus punch: Add a few drops of orange or lime juice."
        ],

        flavorNotes: [
            "Bright citrus notes.",
            "Light honey sweetness enhances natural flavors.",
            "Smooth and warming while still refreshing.",
        ],

    },

    {
        id: "blueberry-matcha-latte",
        name: "Blueberry Matcha Latte",
        mood: "fruity",
        serving: "hot",
        energy: "bold",
        category: "fruit",
        image: "images/drinks/blueberry-matcha-latte.png",
        pastry: "Blueberry Muffin",

        description: "A vibrant, refreshing latte that blends earthy matcha with sweet, juicy blueberries for a colorful, naturally fruity boost.",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "Homemade blueberry syrup: ½ cup (75 g) blueberries, ¼ cup (50 g) sugar, 2 tbsp (30 ml) water",
            "OR 1–2 tbsp (15–30 ml) store-bought blueberry syrup"
        ],

        steps: [
            "Make blueberry syrup (if homemade): combine blueberries, sugar, and water in a saucepan and cook 5–7 minutes until juicy and dissolved. Mash lightly and optionally strain. Let cool.",
            "Prepare matcha: add matcha and 2 tbsp hot water to a bowl or mug, whisk or froth until smooth and frothy.",
            "Heat 1 cup (240 ml) milk until steaming.",
            "Add 1–2 tbsp blueberry syrup to the milk, or add directly to your mug.",
            "Pour the warm blueberry milk into the mug.",
            "Slowly pour matcha over the milk and gently stir to combine.",
            "Optional: garnish with a few whole blueberries."
        ],

        upgrades: [
            "Foamy latte: Froth the milk before adding for a creamy top.",
            "Extra fruity: Add 1 tsp (5 g) lemon juice to the syrup for brightness.",
            "Vanilla note: Add ¼ tsp (1 ml) vanilla extract while heating the milk."
        ],

        flavorNotes: [
            "Bold, earthy matcha balanced by sweet, fruity blueberry.",
            "Creamy texture with a gentle tart brightness.",
            "Cozy and vibrant — slightly indulgent but still refreshing."
    ],

    },

    {
        id: "strawberry-matcha",
        name: "Strawberry Matcha",
        mood: "fruity",
        serving: "iced",
        energy: "light",
        category: "fruit",
        image: "images/drinks/strawberry-matcha-latte.png",
        description: "A bright, refreshing latte that blends matcha with sweet strawberries for tart, refreshing drink.",
        pastry: "Strawberry Shortcake Biscuit or Cupcake",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
            "1 cup (240 ml) milk of choice (dairy or plant-based)",
            "Homemade strawberry puree: ½ cup (75 g) strawberries, 1–2 tsp (5–10 g) sugar, 1–2 tsp (5–10 ml) water",
            "OR 1–2 tbsp (15–30 ml) strawberry syrup, jam, or puree",
            "½ cup (120 ml) ice cubes"
        ],

        steps: [
            "Make the strawberry puree (if homemade): combine strawberries, sugar, and water in a small saucepan and cook 5–7 minutes until soft and juicy, then mash or blend. Optionally strain for a smoother syrup and let cool.",
            "Prepare the matcha: add matcha and 2 tbsp hot water to a bowl or mug and whisk or froth until fully dissolved and lightly frothy.",
            "Fill a glass with ½ cup (120 ml) ice cubes.",
            "Pour 1 cup (240 ml) milk over the ice.",
            "Stir in 1–2 tbsp (15–30 ml) strawberry puree, syrup, or jam until the milk is tinted and flavored.",
            "Slowly pour the prepared matcha over the strawberry milk to create a layered effect, then gently stir to combine as desired.",
            "Optional: garnish with a fresh strawberry slice or drizzle extra strawberry puree on top."
        ],

        upgrades: [
            "Extra creamy: Add 1–2 tbsp (15–30 ml) oat cream or sweet cream.",
            "Fruity twist: Add a few drops of lemon juice to the strawberry puree for extra brightness.",
            "Layered latte effect: Pour matcha very slowly over the milk and strawberry layer for a gradient look.",
            "Adjust sweetness: Add honey or sugar directly into the milk or matcha if you prefer a sweeter drink."
        ],

        flavorNotes: [
            "Light, refreshing, and fruity with a cool iced texture.",
            "Tart flavor compliments the boldness of the matcha.",
            "Perfect for warm days or an energizing afternoon treat."
        ],
    },

    {
        id: "yuzu-sparkling-matcha",
        name: "Yuzu Sparkling Matcha",
        mood: "fruity",
        serving: "iced",
        energy: "bold",
        category: "fruit",
        image: "images/drinks/yuzu-sparkling-matcha.png",
        description:
        "A bold and zesty sparkling matcha drink with bright yuzu citrus.",

        pastry: "Yuzu Macaron",

        ingredients: [
            "1½ tsp (3 g) matcha powder (bold strength)",
            "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
            "½ cup (120 ml) sparkling water or soda",
            "1–2 tsp (5–10 ml) yuzu juice or yuzu syrup",
            "½ cup (120 ml) ice cubes",
            "Sweetener optional: ½–1 tsp (2–5 g sugar, honey, or syrup)",
            "Optional garnish: thin yuzu or lemon slice"
        ],

        steps: [
            "Prepare the matcha: Add matcha and 2 tbsp hot water to a bowl or mug and whisk or froth vigorously until smooth and lightly frothy.",
            "Fill a glass with ½ cup (120 ml) ice cubes.",
            "Pour in ½ cup (120 ml) sparkling water.",
            "Stir in 1–2 tsp (5–10 ml) yuzu juice or syrup and sweetener if using.",
            "Slowly pour the whisked matcha over the sparkling water mixture to preserve bubbles and create a layered effect.",
            "Gently stir to combine as desired.",
            "Optional: Garnish with a thin slice of yuzu or lemon."
        ],

        upgrades: [
            "Extra citrus zing: Add a splash of orange or lemon juice.",
            "Layered effect: Pour matcha very slowly to create a striking visual gradient.",
            "Herbal twist: Add a sprig of mint or basil.",
            "Fruity sweetness: Mix in a splash of passion fruit syrup."
        ],

        flavorNotes: [
            "Bold matcha flavor complemented by bright, tart yuzu.",
            "Light, effervescent, and refreshing.",
            "Slight sweetness with a citrusy aroma.",
        ],
    },

    {
        id: "orange-cream-matcha",
        name: "Orange Cream Matcha",
        mood: "fruity",
        serving: "creamy",
        energy: "light",
        category: "fruit",
        image: "images/drinks/orange-cream-matcha.png",
        description:
        "A light and creamy matcha latte infused with bright orange flavor and topped with luscious foam for a refreshing twist.",

        pastry: "Orange Pound Cake",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional, for richer foam)",
            "½–1 tsp (2–5 g) sweetener optional",
            "1–2 tsp (5–10 ml) fresh orange juice",
            "Optional: ¼ tsp (1 ml) orange zest for garnish"
        ],

        steps: [
            "Prepare the matcha: Add matcha and 2 tbsp hot water to a bowl or mug and whisk or froth vigorously until smooth and lightly frothy.",
            "Heat 1 cup (240 ml) milk until steaming (do not boil).",
            "Froth the milk with 2 tbsp (30 ml) heavy cream until light and airy.",
            "Stir orange juice and optional sweetener into the milk mixture.",
            "Pour the orange-infused milk into a serving cup.",
            "Slowly pour the whisked matcha over the milk to keep a layered effect.",
            "Spoon foam on top.",
            "Optional: Garnish with orange zest or a small orange twist."
        ],

        upgrades: [
            "Extra creamy: Add 1–2 tbsp (15–30 ml) sweet cream or oat cream.",
            "Citrus boost: Add a few drops of lemon juice to brighten the flavor.",
            "Foam art: Sprinkle matcha or orange zest on top.",
            "Layered latte: Pour matcha slowly for a gradient effect."
        ],

        flavorNotes: [
            "Light, earthy matcha complemented by sweet, tangy orange.",
            "Smooth and creamy with airy foam.",
            "Subtle sweetness enhances natural citrus and tea flavors."
        ],
    },

    {
        id: "mango-matcha-madness",
        name: "Mango Matcha Madness",
        mood: "fruity",
        serving: "creamy",
        energy: "bold",
        category: "fruit",
        image: "images/drinks/mango-matcha-madness.png",
        description:
        "A bold, tropical fusion of rich matcha and sweet mango, topped with airy foam for a creamy, fruity explosion in every sip.",

        pastry: "Mango pudding",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "½ cup (120 g) mango chunks (fresh or frozen)",
            "1–2 tsp (5–10 g) sugar or honey (optional)",
            "1–2 tsp (5–10 ml) water for blending if needed",
            "¾ cup (180 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional, for foam)",
            "½–1 tsp (2–5 g) sweetener (optional)",
            "½ cup (120 ml) ice cubes (optional for iced version)"
        ],

        steps: [
            "Blend mango chunks with optional sugar and a splash of water until smooth; strain for a smoother puree if desired.",
            "Prepare the matcha by whisking or frothing matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat ¾ cup milk until steaming, then froth with 2 tbsp heavy cream to create airy foam; stir in sweetener if desired.",
            "In a serving glass, pour the mango puree as the base.",
            "Pour the warm milk and cream mixture gently over the mango puree.",
            "Slowly pour the whisked matcha over the milk-mango mixture to maintain layers.",
            "Top with foam and optionally garnish with mango cubes or a dusting of matcha.",
            "For an iced version, add ½ cup ice cubes before the milk step."
        ],

        upgrades: [
            "Extra fruity: Add a splash of orange or passion fruit juice to the mango puree.",
            "Creamier: Add more heavy cream to the foam mixture.",
            "Layered presentation: Pour matcha slowly over the mango-milk mixture for a vibrant gradient.",
            "Sweet touch: Drizzle honey or mango syrup on top of the foam."
        ],

        flavorNotes: [
            "Bold, earthy matcha balanced by tropical, sweet mango.",
            "Creamy, smooth texture with light foam on top.",
            "Vibrant, fruity, and indulgent.",
            "Refreshing and lightly dessert-like."
        ],
    },

    // floral and soothing 

    {
        id: "hot-jasmine-matcha-latte",
        name: "Hot Jasmine Matcha Latte",
        mood: "floral",
        serving: "hot",
        energy: "light",
        category: "floral",
        image: "images/drinks/jasmine-matcha-latte.png",
        description:
        "A delicate, floral matcha latte infused with fragrant jasmine for a soothing, light, and cozy sip.",

        pastry: "Jasmine Shortbread",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water or jasmine infusion",
            "1 cup (240 ml) milk of choice",
            "1–2 tsp (5–10 ml) jasmine syrup or jasmine tea infusion",
            "Optional: ½–1 tsp (2–5 g) sugar, honey, or syrup"
        ],

        steps: [
            "Prepare a jasmine base by either using 1–2 tsp jasmine syrup or steeping 1 tsp dried jasmine petals in 2–3 tbsp hot water for 3 minutes, then straining.",
            "Whisk or froth matcha with 2 tbsp hot water or jasmine-infused water until smooth and frothy.",
            "Heat 1 cup milk until steaming and optionally froth for a light foam; stir in jasmine syrup or sweetener if desired.",
            "Pour the milk into a serving cup.",
            "Slowly pour the whisked matcha over the milk to create a gentle layered effect.",
            "Optionally top with milk foam or a few jasmine petals for garnish."
        ],

        upgrades: [
            "Extra floral: Add a drop of rose water or orange blossom water for layered florals.",
            "Foamy latte: Froth milk for a silky, café-style texture.",
            "Sweeter balance: Add honey or vanilla syrup for warmth.",
            "Iced version: Pour over ice for a refreshing floral twist."
        ],

        flavorNotes: [
            "Delicate, earthy matcha complemented by fragrant jasmine.",
            "Light, soothing, and aromatic with a subtle floral finish.",
            "Smooth, lightly creamy texture.",
            "Cozy and relaxing — perfect for quiet moments."
        ],

    },

    {
        id: "earl-grey-matcha-latte",
        name: "Earl Grey Matcha Latte",
        mood: "floral",
        serving: "hot",
        energy: "bold",
        category: "floral",
        image: "images/drinks/earl-grey-matcha-latte.png",
        description:
        "A bold and aromatic matcha latte infused with fragrant Earl Grey tea.",

        pastry: "Earl Grey Shortbread",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water",
            "½ cup (120 ml) strong brewed Earl Grey tea",
            "½ cup (120 ml) milk of choice",
            "Optional: 2 tbsp (30 ml) heavy cream",
            "Optional: ½–1 tsp (2–5 g) sweetener"
        ],

        steps: [
            "Steep an Earl Grey tea bag or 1 tsp loose leaf in ½ cup hot water for 3–5 minutes, then remove the tea bag or strain. Sweeten lightly if desired.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and foamy.",
            "Heat ½ cup milk until steaming and optionally froth with heavy cream for a velvety foam.",
            "Pour the brewed Earl Grey tea into a serving cup and stir in the milk.",
            "Slowly pour the whisked matcha over the tea–milk mixture to create a layered latte.",
            "Optionally top with milk foam and a light dusting of matcha powder."
        ],

        upgrades: [
            "Add a thin strip of orange peel or a drop of bergamot extract for extra citrus aroma.",
            "Sweeten with honey, brown sugar, or vanilla syrup for a warm finish.",
            "Froth milk with cream for a richer foam top.",
            "Serve over ice for a refreshing iced Earl Grey matcha."
        ],

        flavorNotes: [
            "Bold, earthy matcha harmonizes with floral Earl Grey.",
            "Smooth, creamy, and warming.",
            "Aromatic and cozy with sophisticated bergamot notes.",
            "Slight sweetness enhances the tea's natural perfume."
        ],
    },

    {
    id: "coconut-matcha",
    name: "Coconut Matcha",
    mood: "floral",
    serving: "iced",
    energy: "light",
    category: "floral",
    image: "images/drinks/coconut-matcha.png",
    description:
    "A light, hydrating coconut water base topped with airy matcha foam for a tropical, refreshing sip.",

    pastry: "Coconut Macaron",

    ingredients: [
        "1 tsp (2 g) matcha powder",
        "2–3 tbsp (30–45 ml) hot water (170–175°F / 76–80°C)",
        "1 cup (240 ml) chilled coconut water",
        "1–2 tbsp (15–30 ml) milk or plant milk (for foam, optional)",
        "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
        "½ cup (120 ml) ice cubes",
        "Optional garnish: toasted coconut flakes or a thin lime slice"
    ],

    steps: [
        "Fill a serving glass with ½ cup (120 ml) ice cubes and pour in 1 cup (240 ml) chilled coconut water.",
        "Sweeten the coconut water lightly if desired and stir to combine.",
        "In a separate cup or small bowl, add matcha powder and 2–3 tbsp (30–45 ml) hot water.",
        "Add 1–2 tbsp (15–30 ml) milk or plant milk if you want a creamier foam (optional).",
        "Whisk or froth vigorously until the matcha mixture becomes thick, airy, and foamy.",
        "Gently spoon or pour the matcha foam over the top of the coconut water.",
        "Optional: Garnish with toasted coconut flakes or a thin lime slice."
    ],

    upgrades: [
        "Extra tropical: Add a splash of pineapple or lychee juice to the coconut water base.",
        "Citrus twist: Squeeze in a bit of lime for brightness.",
        "Creamier foam: Use oat or coconut milk when frothing the matcha.",
        "Layered look: Pour the matcha foam slowly so it floats distinctly on top of the clear coconut water."
    ],

    flavorNotes: [
        "Light, earthy matcha sitting over crisp, hydrating coconut water.",
        "Refreshing and tropical without feeling heavy.",
        "Subtle sweetness that lets the coconut and matcha shine.",
        "Perfect for hot days when you want something cooling and energizing."
    ],
},


    {
        id: "jasmine-matcha-sea-cream",
        name: "Jasmine Matcha Sea Cream",
        mood: "floral",
        serving: "iced",
        energy: "bold",
        category: "floral",
        image: "images/drinks/jasmine-matcha-sea-cream.png",
        description:
        "A bold iced matcha latte with fragrant jasmine and a rich, velvety sea cream topping — indulgent yet refreshing.",

        pastry: "Jasmine Macaron",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water",
            "½ cup (120 ml) strongly brewed jasmine tea",
            "½ cup (120 ml) milk of choice",
            "½ cup (120 ml) ice cubes",
            "Sea cream: 2 tbsp (30 ml) heavy cream",
            "Sea cream: 1 tbsp (15 g) sweetened condensed milk",
            "Pinch of salt",
            "Optional: ½ tsp vanilla extract"
        ],

        steps: [
            "Brew jasmine tea by steeping dried jasmine leaves or a jasmine tea bag in ½ cup hot water for 3–5 minutes; strain.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Make sea cream by whipping heavy cream, condensed milk, and a pinch of salt until thick but pourable; add vanilla if desired.",
            "Fill a glass with ice and pour in ½ cup milk and ½ cup brewed jasmine tea.",
            "Stir in the prepared matcha until fully combined.",
            "Spoon sea cream on top and garnish with matcha powder or jasmine petals if desired."
        ],

        upgrades: [
            "Add more sweetened condensed milk for a richer sea cream.",
            "Blend sea cream lightly for an extra smooth, foamy texture.",
            "Garnish with jasmine petals or edible flowers for a floral boost.",
            "Sweeten the base with honey or vanilla syrup for balance."
        ],

        flavorNotes: [
            "Bold matcha paired with fragrant jasmine.",
            "Rich, slightly sweet sea cream tops a refreshing iced base.",
            "Balanced contrast of earthy, floral, and creamy notes.",
            "Perfect for a decadent yet refreshing floral treat."
        ],
    
    },

    {
        id: "lavender-matcha-latte",
        name: "Lavender Matcha Latte",
        mood: "floral",
        serving: "creamy",
        energy: "light",
        category: "floral",
        image: "images/drinks/lavendar-matcha-latte.png",
        description:
        "A light and calming matcha latte infused with fragrant lavender, topped with silky foam for a soothing, floral sip.",

        pastry: "Lavender Shortbread",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional, for richer foam)",
            "½–1 tsp (2–5 g) honey, sugar, or syrup (optional)",
            "1–2 tsp (5–10 ml) lavender syrup",
            "Optional garnish: dried lavender buds"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and slightly frothy.",
            "Heat 1 cup milk until steaming but not boiling.",
            "Froth the warm milk with heavy cream until a light foam forms.",
            "Stir lavender syrup and optional sweetener into the milk mixture.",
            "Pour the lavender milk into a serving cup, then slowly pour in the prepared matcha.",
            "Spoon foam gently on top and garnish with a few dried lavender buds if desired."
        ],

        upgrades: [
            "Add a drop of vanilla or a few drops of rose water for layered floral notes.",
            "Use extra cream when frothing for a thicker, richer foam.",
            "Adjust honey or syrup to taste for a sweeter, dessert-like latte.",
            "Serve over ice for an iced lavender matcha variation."
        ],

        flavorNotes: [
            "Light, earthy matcha balanced by calming floral lavender.",
            "Smooth, creamy, and lightly sweetened.",
            "Gentle aroma that enhances relaxation.",
            "Cozy and soothing — ideal for self-care or wind-down moments."
        ],

    },

    {
        id: "sage-vanilla-matcha-latte",
        name: "Sage Vanilla Matcha Latte",
        mood: "floral",
        serving: "creamy",
        energy: "bold",
        category: "floral",
        image: "images/drinks/sage-vanilla-matcha-latte.png",
        description:
        "A bold matcha latte infused with earthy sage and sweet vanilla, topped with silky foam for a warming, aromatic experience.",

        pastry: "Blueberry Muffin",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional, for richer foam)",
            "½–1 tsp (2–5 g) sweetener (optional)",
            "1 tsp (1 g) finely chopped fresh sage or ½ tsp dried sage",
            "1 tsp (5 ml) vanilla extract or vanilla syrup",
            "Optional garnish: fresh sage leaf or matcha dust"
        ],

        steps: [
            "Heat milk in a saucepan over medium heat. Add sage and simmer gently for 2–3 minutes, without boiling.",
            "Strain out the sage and stir in vanilla and optional sweetener.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Froth the warm sage–vanilla milk with heavy cream until light and airy.",
            "Pour the infused milk into a serving cup, then slowly add whisked matcha.",
            "Top with foam and optionally garnish with a small sage leaf or matcha dust."
        ],

        upgrades: [
            "Add more cream for an extra rich and silky foam.",
            "Herbal boost: add a tiny pinch of dried thyme or rosemary.",
            "Sweet variety: use honey, maple syrup, or vanilla syrup.",
            "Iced version: Chill the sage-infused milk and pour over ice before adding matcha."
        ],

        flavorNotes: [
            "Bold, earthy matcha enhanced by aromatic sage.",
            "Smooth vanilla balances the herbal notes.",
            "Creamy, lightly foamy, and warming.",
        ],
    },

    // earthy & roasted

    {
        id: "oolong-matcha-latte",
        name: "Oolong Matcha Latte",
        mood: "earthy",
        serving: "hot",
        energy: "light",
        category: "earthy",
        image: "images/drinks/oolong-matcha-latte.png",
        description:
        "A light, soothing latte blending earthy matcha with the delicate roasted notes of oolong tea for a warm, calming sip.",

        pastry: "Almond Biscotti",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "½ cup (120 ml) brewed oolong tea (strong)",
            "½ cup (120 ml) milk of choice",
            "½–1 tsp (2–5 g) sweetener (optional)"
        ],

        steps: [
            "Brew oolong tea by steeping ½ tsp loose leaf or 1 tea bag in ½ cup hot water for 3–5 minutes. Sweeten lightly if desired.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat ½ cup milk until steaming; optionally froth for a smoother texture.",
            "Pour brewed oolong into a serving cup and stir in the warm milk.",
            "Slowly pour whisked matcha over the tea–milk mixture and top with optional foam or matcha dust."
        ],

        upgrades: [
            "Use roasted oolong for a deeper, earthier flavor.",
            "Add 1–2 tbsp cream for a richer, creamier texture.",
            "Sweeten with honey, brown sugar, or maple syrup.",
            "Iced version: pour over ice for a refreshing twist."
        ],

        flavorNotes: [
            "Light, earthy matcha with subtly roasted oolong aroma.",
            "Smooth, mild, and lightly sweetened.",
            "Hints of floral and nutty undertones from oolong."
        ],

    },

    {
        id: "hot-dirty-matcha",
        name: "Hot Dirty Matcha",
        mood: "earthy",
        serving: "hot",
        energy: "bold",
        category: "earthy",
        image: "images/drinks/hot-dirty-matcha.png",
        description:
        "A bold fusion of earthy matcha and rich espresso, creating a cozy, energizing latte with complex roasted flavors.",

        pastry: "Cheesecake Brownie",

        ingredients: [
            "1½ tsp (3 g) matcha powder (bold strength)",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 shot (30 ml) espresso or ½ cup (120 ml) strong brewed coffee",
            "½ cup (120 ml) milk of choice",
            "2 tbsp (30 ml) cream (optional, for richer foam)",
            "½–1 tsp (2–5 g) sweetener (optional)"
        ],

        steps: [
            "Brew 1 shot espresso or ½ cup strong coffee; optionally sweeten lightly.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and lightly foamy.",
            "Heat ½ cup milk until steaming; optionally froth with cream for a richer foam.",
            "Pour the coffee into a serving cup and add the warm milk mixture.",
            "Slowly pour the whisked matcha over the coffee–milk mixture, then top with foam and an optional dusting of matcha or cocoa."
        ],

        upgrades: [
            "Extra bold: Use a double espresso shot or increase matcha for a stronger kick.",
            "Creamier texture: Add more cream to the milk before frothing.",
            "Sweetness boost: Adjust with honey, brown sugar, or vanilla syrup.",
            "Iced version: Pour coffee, milk, and matcha over ice for a cold dirty matcha latte."
        ],

        flavorNotes: [
            "Bold, earthy matcha meets rich, roasted espresso.",
            "Smooth, creamy, and energizing with a slight pleasant bitterness.",
            "Deep roasted aroma with complex layers.",
            "Balanced by milk and optional sweetness."
        ],

    },

    {
        id: "iced-miso-matcha-latte",
        name: "Iced Miso Matcha Latte",
        mood: "earthy",
        serving: "iced",
        energy: "light",
        category: "earthy",
        image: "images/drinks/iced-miso-matcha-latte.png",
        description:
        "A light, umami-forward iced matcha latte with a hint of savory miso for a uniquely refreshing and earthy flavor.",

        pastry: "Sesame Caramel Biscuit",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
            "1 cup (240 ml) milk of choice (dairy or plant-based)",
            "½ tsp (2 g) white or yellow miso paste",
            "½–1 tsp (2–5 g) sweetener (optional: sugar, honey, or syrup)",
            "½ cup (120 ml) ice cubes"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and slightly frothy.",
            "In a small cup, dissolve the miso paste into a splash of warm milk until completely smooth.",
            "Stir in the remaining milk and optional sweetener to make the miso milk base.",
            "Fill a serving glass with ½ cup ice cubes and pour the miso milk over the ice.",
            "Slowly pour the whisked matcha on top for a layered look, then lightly stir to your preferred level of mixing."
        ],

        upgrades: [
            "Extra creamy: Use 2 tbsp cream or full-fat milk in the miso milk base.",
            "Layered presentation: Pour matcha very slowly over the miso milk to keep a clear gradient.",
            "Sweet balance: Adjust sweetness with honey or maple syrup to round out the umami.",
            "Tropical twist: Swap part of the milk for coconut milk for a subtle tropical note."
        ],

        flavorNotes: [
            "Light, earthy matcha balanced with subtle, savory umami from miso.",
            "Smooth, lightly sweetened, and refreshing.",
            "Savory-sweet complexity makes it uniquely satisfying.",
            "Perfect for a refreshing, adventurous afternoon drink."
        ],

    },

    {
        id: "iced-caramel-dirty-matcha",
        name: "Iced Caramel Dirty Matcha",
        mood: "earthy",
        serving: "iced",
        energy: "bold",
        category: "earthy",
        image: "images/drinks/iced-caramel-dirty-matcha.png",
        description:
        "A bold iced latte blending earthy matcha with rich espresso and caramel for a refreshing, indulgent pick-me-up.",

        pastry: "Salted Caramel Cookie",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 shot (30 ml) espresso or ½ cup (120 ml) strong brewed coffee",
            "½ cup (120 ml) milk of choice",
            "1–2 tsp (5–10 ml) caramel syrup",
            "2 tbsp (30 ml) cream (optional, for richness)",
            "½ cup (120 ml) ice cubes"
        ],

        steps: [
            "Prepare 1 shot espresso or ½ cup strong brewed coffee; sweeten lightly if desired.",
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Mix milk with caramel syrup (and cream if using) until combined; optionally froth lightly.",
            "Fill a serving glass with ½ cup ice and pour the caramel milk mixture over the ice.",
            "Add the espresso.",
            "Slowly pour whisked matcha on top for a layered effect; optionally drizzle caramel or dust with matcha."
        ],

        upgrades: [
            "Extra bold: Add a double espresso shot or increase matcha to 2 tsp.",
            "Creamier: Add additional cream to the milk mixture for richer foam.",
            "Layered presentation: Pour matcha slowly over the coffee-milk layer for a clean gradient.",
            "Sweet balance: Increase caramel or add a touch of brown sugar for deeper flavor."
        ],

        flavorNotes: [
            "Bold, earthy matcha meets rich, roasted espresso.",
            "Caramel adds buttery sweetness that complements deep coffee notes.",
            "Smooth, creamy, and refreshing.",
            "Balanced sweetness, earthy bitterness, and energizing warmth."
        ],
    },

    {
        id: "toasted-almond-matcha-latte",
        name: "Toasted Almond Matcha Latte",
        mood: "earthy",
        serving: "creamy",
        energy: "light",
        category: "earthy",
        image: "images/drinks/toasted-almond-matcha-latte.png",
        description:
        "A light, nutty matcha latte with toasted almond flavor and silky foam, perfect for a cozy, comforting sip.",

        pastry: "Almond Biscotti",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional for richer foam)",
            "1–2 tsp (5–10 ml) toasted almond syrup",
            "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
            "Optional garnish: slivered toasted almonds"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming; froth with heavy cream for light, creamy foam.",
            "Stir toasted almond syrup and optional sweetener into the milk.",
            "Pour milk–almond mixture into a serving cup.",
            "Slowly pour whisked matcha over the milk.",
            "Spoon foam gently on top; optionally garnish with slivered toasted almonds."
        ],

        upgrades: [
            "Extra nutty: Add a drop of almond extract for stronger almond flavor.",
            "Creamier foam: Increase cream for thicker, richer foam.",
            "Sweet balance: Adjust almond syrup or honey to taste.",
            "Iced version: Pour over ice for a refreshing almond matcha latte."
        ],

        flavorNotes: [
            "Light, earthy matcha complemented by nutty toasted almond.",
            "Smooth, creamy, and lightly sweetened.",
            "Cozy, comforting, and subtly aromatic.",
            "Perfect for nut-lovers or a gentle afternoon treat."
        ],

    
    },

    {
        id: "black-sesame-matcha-latte",
        name: "Black Sesame Matcha Latte",
        mood: "earthy",
        serving: "creamy",
        energy: "bold",
        category: "earthy",
        image: "images/drinks/black-sesame-matcha.png",
        description:
        "A bold, nutty matcha latte enriched with roasted black sesame and topped with silky foam for a rich, comforting sip.",

        pastry: "Black Sesame Cookie",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional for richer foam)",
            "1 tsp (3 g) black sesame paste or finely ground toasted black sesame",
            "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
            "Optional garnish: toasted black sesame seeds"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming and whisk in black sesame paste until fully incorporated.",
            "Froth milk (and heavy cream if using) for a light, creamy foam; stir in optional sweetener.",
            "Pour black sesame milk into a serving cup.",
            "Slowly pour whisked matcha over the milk.",
            "Spoon foam gently on top and optionally sprinkle toasted black sesame seeds."
        ],

        upgrades: [
            "Extra nutty: Add more black sesame paste for stronger roasted flavor.",
            "Creamy foam: Increase cream for thicker, richer foam.",
            "Sweet balance: Add honey, maple syrup, or brown sugar to taste.",
            "Iced version: Pour black sesame milk over ice and top with matcha foam."
        ],

        flavorNotes: [
            "Bold, earthy matcha enhanced by nutty roasted black sesame.",
            "Smooth, rich, and lightly sweetened.",
            "Cozy and indulgent — perfect for a warming treat.",
            "Subtle roasted aroma with luxurious creamy texture."
        ],
    },

    // dessert & indulgent

    {
        id: "hot-toasted-chocolate-matcha",
        name: "Hot Toasted Chocolate Matcha",
        mood: "dessert",
        serving: "hot",
        energy: "light",
        category: "dessert",
        image: "images/drinks/hot-toasted-chocolate-matcha.png",
        description:
        "A cozy, lightly sweet matcha latte blended with toasted chocolate notes for a comforting, indulgent treat.",

        pastry: "Chocolate Chip Cookie",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice (dairy or plant-based)",
            "1 tbsp (15 g) toasted chocolate powder or cocoa powder lightly toasted in a dry pan",
            "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
            "Optional: 2 tbsp (30 ml) heavy cream for foam",
            "Optional garnish: cocoa nibs or toasted chocolate shavings"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming, then whisk in toasted chocolate powder and optional sweetener until fully dissolved.",
            "Optional: Froth the chocolate milk with heavy cream for a creamy foam top.",
            "Pour the chocolate milk into a serving cup.",
            "Slowly pour whisked matcha over the chocolate milk.",
            "Optional: Spoon foam on top and garnish with cocoa nibs or toasted chocolate shavings."
        ],

        upgrades: [
            "Extra chocolatey: Add more toasted chocolate powder or drizzle chocolate syrup on top.",
            "Creamy foam: Use more cream for thicker, richer foam.",
            "Sweet balance: Adjust sweetness with honey, brown sugar, or maple syrup.",
            "Iced version: Chill milk and matcha, then serve over ice for a cold toasted chocolate matcha latte."
        ],

        flavorNotes: [
            "Light, earthy matcha complemented by warm, toasted chocolate.",
            "Smooth, lightly sweetened, and comforting.",
            "Subtle roasted aroma that deepens the chocolate flavor."
        ],

    },

    {
        id: "matcha-creme-brulee-latte",
        name: "Matcha Creme Brulee Latte",
        mood: "dessert",
        serving: "hot",
        energy: "bold",
        category: "dessert",
        image: "images/drinks/matcha-creme-brulee-latte.png",
        description:
        "A bold, decadent matcha latte inspired by crème brûlée, with caramelized sweetness and a rich, creamy finish.",

        pastry: "Crème Brûlée",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional)",
            "1 tsp (5 g) sweetener: sugar, honey, or caramel syrup (optional)",
            "1 tsp (5 ml) caramel or brûlée syrup",
            "Optional topping: 1 tsp (2 g) granulated sugar for caramelizing"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming, then stir in heavy cream and caramel/brûlée syrup until combined.",
            "Optional: Froth milk for a creamy top.",
            "Pour milk mixture into a serving cup.",
            "Slowly pour whisked matcha over the milk.",
            "Optional: Top with foam and sprinkle granulated sugar.",
            "Optional: Torch or broil the sugar lightly to create a caramelized brûlée effect."
        ],

        upgrades: [
            "Extra creamy: Add more cream or use whole milk.",
            "Extra caramel flavor: Add more brûlée syrup or caramel drizzle.",
            "Iced version: Chill both milk and matcha before assembling.",
            "Garnish with cocoa powder, matcha powder, or edible gold dust."
        ],

        flavorNotes: [
            "Bold matcha combined with rich caramel and creaminess.",
            "Smooth, indulgent, and slightly sweet.",
            "Cozy and dessert-like — perfect for treating yourself.",
            "Subtle caramelized sugar aroma."
        ],
    },

    {
        id: "iced-white-chocolate-matcha",
        name: "Iced White Chocolate Matcha",
        mood: "dessert",
        serving: "iced",
        energy: "light",
        category: "dessert",
        image: "images/drinks/iced-white-chocolate-matcha.png",
        description:
        "A refreshing iced matcha latte with creamy white chocolate sweetness, perfect for a light indulgence on a warm day.",

        pastry: "White chocolate Blondie",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "1–2 tbsp (15–30 g) white chocolate chips or white chocolate syrup",
            "Optional: ½ tsp (2 g) sugar or honey",
            "½ cup (120 ml) ice cubes"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming, then stir in white chocolate until melted and smooth.",
            "Optional: Add sweetener and chill the milk slightly for extra cold serving.",
            "Fill a glass with ½ cup ice.",
            "Pour white chocolate milk over the ice.",
            "Slowly pour whisked matcha on top for a layered look.",
            "Optional: Garnish with white chocolate shavings or a dusting of matcha powder."
        ],

        upgrades: [
            "Extra creamy: Use whole milk or add a splash of cream.",
            "Adjust sweetness: Increase or decrease the white chocolate amount, or add honey.",
            "Layered presentation: Pour matcha slowly for a gradient effect.",
            "Fruity twist: Add vanilla or a touch of orange zest for brightness."
        ],

        flavorNotes: [
            "Light, earthy matcha balanced with creamy white chocolate sweetness.",
            "Smooth, refreshing, and lightly indulgent.",
            "Perfect for warm weather or a lighter dessert drink.",
            "Subtle sweetness that enhances the natural matcha flavor."
        ],
    },

    {
        id: "matcha-tiramisu-latte",
        name: "Matcha Tiramisu Latte",
        mood: "dessert",
        serving: "iced",
        energy: "bold",
        category: "dessert",
        image: "images/drinks/matcha-tiramisu-latte.png",
        description:
        "A bold iced matcha latte inspired by tiramisu, layered with coffee, cocoa, and creamy sweetness for a decadent refreshment.",

        pastry: "Tiramisu or Coffee Cake",

        ingredients: [
            // matcha
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            // coffee
            "½ cup (120 ml) strong brewed coffee or espresso, chilled",
            // milk & cream
            "½ cup (120 ml) milk of choice",
            "2 tbsp (30 ml) cream or sweetened mascarpone-style cream (optional)",
            "Optional: 1 tsp (5 g) sugar, honey, or syrup",
            // tiramisu flavor
            "1 tsp (5 ml) coffee liqueur or coffee syrup (optional)",
            "Cocoa powder for dusting",
            "½ cup (120 ml) ice cubes"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Brew ½ cup strong coffee or espresso and chill completely.",
            "Mix milk with cream or mascarpone-style cream; add optional coffee liqueur and sweetener.",
            "Fill a glass with ½ cup ice cubes.",
            "Pour chilled coffee layer over the ice.",
            "Pour milk + cream mixture over the coffee.",
            "Slowly pour whisked matcha on top for a layered tiramisu-style gradient.",
            "Optional: Dust with cocoa powder or drizzle coffee syrup on top."
        ],

        upgrades: [
            "Extra bold: Double the matcha or espresso for stronger flavor.",
            "Creamy indulgence: Use mascarpone-style cream for tiramisu richness.",
            "Sweetness control: Adjust sugar, coffee syrup, or liqueur to taste.",
            "Layered presentation: Pour matcha very slowly for clean separation."
        ],

        flavorNotes: [
            "Bold matcha combined with rich coffee and creamy milk.",
            "Sweet, slightly bitter, and dessert-like.",
            "Refreshing yet indulgent with cocoa and coffee aromas.",
            "Perfect for a decadent iced treat."
        ],

    },

    {
        id: "ube-matcha",
        name: "Ube Matcha",
        mood: "dessert",
        serving: "creamy",
        energy: "light",
        category: "dessert",
        image: "images/drinks/ube-matcha.png",
        description:
        "A light matcha latte topped with vibrant, sweet ube foam for a colorful and indulgent treat.",

        pastry: "Ube Cake Roll or Ube Macaron",

        ingredients: [
            "1 tsp (2 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2 tbsp (30 ml) heavy cream (optional)",
            "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
            "2 tbsp (30 ml) ube halaya or ube syrup",
            "Optional garnish: toasted coconut flakes or ube powder"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming.",
            "Froth milk and heavy cream (if using) until airy.",
            "Whisk in ube halaya or syrup to create vibrant purple foam; sweeten to taste.",
            "Pour matcha latte into serving cup.",
            "Spoon ube foam gently on top.",
            "Optional: Garnish with toasted coconut flakes or a dusting of ube powder."
        ],

        upgrades: [
            "Extra ube flavor: Add more ube halaya or syrup to deepen color and sweetness.",
            "Creamier texture: Increase heavy cream in the foam.",
            "Sweetness control: Adjust honey, sugar, or syrup to taste.",
            "Iced version: Chill matcha and pour ube foam over ice for a refreshing twist."
        ],

        flavorNotes: [
            "Light, earthy matcha balanced with sweet, nutty ube.",
            "Creamy, colorful, and visually striking.",
            "Sweet yet subtle — dessert-like but not heavy.",
            "Soft, velvety foam adds an indulgent finish."
        ],
    },

    {
        id: "banana-cream-matcha",
        name: "Banana Cream Matcha",
        mood: "dessert",
        serving: "creamy",
        energy: "bold",
        category: "dessert",
        image: "images/drinks/banana-cream-matcha.png",
        description:
        "A bold matcha latte topped with luscious banana cream foam for a rich, dessert-like indulgence.",

        pastry: "Banana Bread",

        ingredients: [
            "1½ tsp (3 g) matcha powder",
            "2 tbsp (30 ml) hot water (175°F / 80°C)",
            "1 cup (240 ml) milk of choice",
            "2–3 tbsp (30–45 ml) heavy cream for foam",
            "Optional sweetener: ½–1 tsp (2–5 g) sugar, honey, or syrup",
            "2 tbsp (30 ml) banana puree or banana syrup",
            "Optional garnish: banana chips or cinnamon"
        ],

        steps: [
            "Whisk or froth matcha with 2 tbsp hot water until smooth and frothy.",
            "Heat 1 cup milk until steaming.",
            "Froth milk and heavy cream until airy.",
            "Gently fold in banana puree or banana syrup to create banana cream foam; sweeten as desired.",
            "Pour prepared matcha into a serving cup.",
            "Spoon banana cream foam on top.",
            "Optional: Garnish with banana chips, a dash of cinnamon, or a drizzle of banana syrup."
        ],

        upgrades: [
            "Extra bold: Add more matcha for a stronger flavor.",
            "Extra creamy: Increase heavy cream for a richer foam.",
            "Sweet balance: Adjust sweetness with banana syrup or honey.",
            "Iced version: Chill matcha and pour banana foam over ice for a refreshing twist."
        ],

        flavorNotes: [
            "Bold, earthy matcha balanced with sweet, creamy banana.",
            "Smooth, rich, and indulgent.",
            "Cozy and dessert-like, perfect for an afternoon treat.",
            "Banana foam adds velvety tropical creaminess."
        ],
    },

    {
    id: "eggnog-matcha-latte",
    name: "Eggnog Matcha Latte",
    mood: "",
    serving: "",
    energy: "",
    category: "seasonal",
    image: "images/drinks/eggnog-matcha-latte.png",
    description:
    "A warm, lightly sweetened matcha latte blended with cozy holiday eggnog for a creamy, festive twist.",

    pastry: "Snickerdoodle Cookie or Gingerbread",

    ingredients: [
        "1 tsp (2 g) matcha powder",
        "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
        "3/4 cup (180 ml) milk of choice",
        "1/2 cup (120 ml) eggnog",
        "1–2 tsp (5–10 g) sweetener (optional)",
        "Optional: pinch of nutmeg or cinnamon for garnish"
    ],

    steps: [
        "Sift matcha into a bowl or mug to remove clumps.",
        "Add 2 tbsp hot water and whisk or froth until smooth and lightly foamy.",
        "In a small pot, heat milk and eggnog together over medium heat until steaming (do not boil).",
        "Sweeten to taste if desired, then froth the eggnog–milk mixture for extra creaminess.",
        "Pour the warm eggnog mixture into a serving cup.",
        "Slowly add the whisked matcha and stir gently to combine.",
        "Optional: Top with foam and a pinch of nutmeg or cinnamon."
    ],

    upgrades: [
        "Extra creamy: Use more eggnog for a richer holiday flavor.",
        "Spiced version: Add a dash of cinnamon, nutmeg, or chai spice.",
        "Sweeter treat: Drizzle with maple syrup for a warm finish.",
        "Iced version: Chill the eggnog mixture and pour over ice before adding matcha."
    ],

    flavorNotes: [
        "Warm, lightly sweet, and festive.",
        "Creamy eggnog pairs perfectly with earthy matcha.",
        "Hints of nutmeg and spice add cozy seasonal depth.",
        "Smooth, comforting, and perfect for winter months."
    ],
},

{
    id: "gingerbread-matcha-latte",
    name: "Gingerbread Matcha Latte",
    mood: "",
    serving: "",
    energy: "",
    category: "seasonal",
    image: "images/drinks/gingerbread-matcha-latte.png",
    description:
    "A bold gingerbread-spiced matcha latte with cozy molasses notes and a soft, creamy whipped topping.",

    pastry: "Gingerbread cookie or Molasses Spice Cookie",

    ingredients: [
        "1½ tsp (3 g) matcha powder",
        "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
        "3/4 cup (180 ml) milk of choice",
        "2–3 tbsp (30–45 ml) gingerbread syrup (or molasses + spices)",
        "Optional sweetener: 1–2 tsp (5–10 g) sugar or honey, to taste",
        "Whipped cream, for topping",
        "Optional garnish: pinch of cinnamon or nutmeg, mini gingerbread cookie"
    ],

    steps: [
        "Sift matcha into a bowl or mug to remove any clumps.",
        "Add 2 tbsp hot water and whisk or froth until smooth and lightly foamy.",
        "In a small pot, heat milk and gingerbread syrup together over medium heat until steaming but not boiling.",
        "Taste and add optional sweetener if you prefer a sweeter latte.",
        "Froth the gingerbread milk until airy and creamy.",
        "Pour the warm gingerbread milk into a serving mug.",
        "Slowly pour in the whisked matcha and stir gently to combine.",
        "Top with whipped cream and finish with a pinch of cinnamon or nutmeg; optionally add a mini gingerbread cookie on top."
    ],

    upgrades: [
        "Extra bold: Increase matcha to 2 tsp (4 g) for a stronger green tea kick.",
        "Spicier: Add an extra pinch of ginger, cinnamon, or cloves to the syrup.",
        "Sweeter dessert style: Drizzle caramel or extra gingerbread syrup over the whipped cream.",
        "Iced version: Chill the gingerbread milk, pour over ice, then add whisked matcha and top with whipped cream."
    ],

    flavorNotes: [
        "Bold, earthy matcha wrapped in warm gingerbread spices.",
        "Creamy, dessert-like texture with cozy holiday molasses notes.",
        "Sweet, spiced aroma perfect for winter evenings.",
        "Whipped topping adds a soft, cloud-like finish to each sip."
    ],
},

{
    id: "white-chocolate-peppermint-matcha-latte",
    name: "White Chocolate Peppermint Matcha Latte",
    mood: "",
    serving: "",
    energy: "",
    category: "seasonal",
    image: "images/drinks/white-chocolate-peppermint-matcha-latte.png",
    description:
    "A cozy holiday matcha latte infused with creamy white chocolate and a refreshing hint of peppermint for a sweet, wintery treat.",

    pastry: "Peppermint Bark or White Chocolate Cranberry Cookie",

    ingredients: [
        "1 tsp (2 g) matcha powder",
        "2 tbsp (30 ml) hot water (170–175°F / 76–80°C)",
        "1 cup (240 ml) milk of choice",
        "2–3 tbsp (20–30 g) white chocolate chips or white chocolate syrup",
        "⅛–¼ tsp (1–2 ml) peppermint extract (a little goes a long way!)",
        "Optional sweetener: ½–1 tsp (2–5 g) sugar or honey",
        "Whipped cream or frothed milk, for topping",
        "Optional garnish: crushed candy cane or shaved white chocolate"
    ],

    steps: [
        "Sift matcha into a bowl or mug to prevent clumping.",
        "Add 2 tbsp hot water and whisk or froth until smooth and lightly foamy.",
        "In a small pot, heat milk until steaming; add white chocolate and stir until fully melted and creamy.",
        "Stir in peppermint extract—start with a tiny amount and adjust to taste.",
        "Optional: Add sweetener if you prefer a sweeter latte.",
        "Froth the peppermint white chocolate milk until airy and smooth.",
        "Pour the peppermint milk into a serving cup.",
        "Slowly pour in the whisked matcha and gently stir to combine.",
        "Top with whipped cream or foam and garnish with crushed candy cane or white chocolate shavings."
    ],

    upgrades: [
        "Extra creamy: Add 1–2 tbsp (15–30 ml) heavy cream to the milk while heating.",
        "Minty boost: Add an extra drop of peppermint extract for a sharper coolness.",
        "Dessert topping: Drizzle white chocolate syrup over whipped cream.",
        "Iced version: Chill the peppermint milk, pour over ice, then add whisked matcha for a frosty peppermint treat."
    ],

    flavorNotes: [
        "Sweet, creamy white chocolate blends smoothly with earthy matcha.",
        "Refreshing peppermint adds a cool holiday twist.",
        "Light, cozy, and wintery with dessert-like sweetness.",
        "Perfect balance of mint, creaminess, and gentle matcha flavor."
    ],
},



];

// saves chosen drink id so we can read it on other pages
function setSelectedDrinkId(id) {
    localStorage.setItem("selectedDrinkId", id);
}

// look up full drink from local storage
function getSelectedDrink() {
    const id = localStorage.getItem("selectedDrinkId");
    return DRINKS.find(d=> d.id === id) || null;
}

//quiz

function initQuizPage() {
    const form = document.getElementById("flavor-quiz");
    if (!form) return;

    const questions = Array.from(form.querySelectorAll(".quiz-question"));
    const nextBtn = document.getElementById("quiz-next");
    const prevBtn = document.getElementById("quiz-prev");
    const submitBtn = document.getElementById("quiz-submit");
    const progressBar = document.getElementById("quiz-progress-bar");

    let currentStep = 0;

    function currentStepIsValid() {
        const q = questions[currentStep];
        const anyRadio = q.querySelector('input[type="radio"]');
        if (!anyRadio) return true;

        const name = anyRadio.name;
        return !!form.querySelector(`input[name="${name}"]:checked`);
    }

    function showStep(index) {
        questions.forEach((q, i) => {
            q.classList.toggle("active", i === index);
        });

        if (prevBtn) prevBtn.style.display = index === 0 ? "none" : "inline-flex";
        if (nextBtn) nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-flex";
        if (submitBtn) submitBtn.style.display = index === questions.length - 1 ? "inline-flex" : "none";

         if (progressBar) {
            const pct = ((index + 1) / questions.length) * 100;
            progressBar.style.width = pct + "%";
        }
    }

    showStep (0);

    nextBtn?.addEventListener("click", () => {
        if (!currentStepIsValid()) {
            alert("Please choose an option before continuing.");
            return;
        }
        if (currentStep < questions.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

      prevBtn?.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!currentStepIsValid()) {
            alert("Please choose an option.");
            return;
        }

        const data = new FormData(form);
        const mood = data.get("mood");
        const serving = data.get("serving");
        const energy = data.get("energy");

        const drink = chooseDrinkFromQuiz({ mood, serving, energy });
        setSelectedDrinkId(drink.id);

        window.location.href = "result.html";
    });
}


// mood serving energy
function chooseDrinkFromQuiz({mood, serving, energy}) {
    let match = DRINKS.find(
        (d) => d.mood === mood && d.serving === serving && d.energy === energy 
    );

    // should not need
    if (!match) match = DRINKS.find(d => d.mood === mood && d.serving === serving);
    if (!match) match = DRINKS.find(d => d.mood === mood);
    if (!match) match = DRINKS [0];

    return match;
}

//results

function initResultPage() {
    const drink = getSelectedDrink();
    if (!drink) return; // here wo quiz

    //fill in result text content
    document.getElementById("result-drink-name").textContent = drink.name;
    document.getElementById("result-drink-description").textContent = drink.description;
    document.getElementById("result-category").textContent = formatCategory(drink.category);
    document.getElementById("result-serving").textContent = capitalize(drink.serving);
    document.getElementById("result-energy").textContent = drink.energy === "light" ? "Light" : "Bold";
    document.getElementById("result-pastry").textContent = drink.pastry;

    // result image from drink.image

    const resultImg = document.getElementById("result-drink-image");
    if (resultImg && drink.image) {
        resultImg.src = drink.image;
        resultImg.alt = drink.name;
    } else if (resultImg) {
        // optional: hide img if a drink doesn't have one
        resultImg.style.display = "none";
    }

    // button from result to recipe
    document.getElementById("view-recipe-btn").addEventListener("click", () => {
    window.location.href = "recipe.html";
  });        
}

//catalog

function initCatalogPage() {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;

    //all drinks by default
    renderCatalog("all");

    // catalog filters
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCatalog(btn.dataset.filter);
        });
    });
}


// create drink cards based on filter
function renderCatalog(filter) {
    const grid = document.getElementById("catalog-grid");
    grid.innerHTML = "";

    const drinks = filter === "all"
    ? DRINKS
    : DRINKS.filter(d => d.category.includes(filter));

    drinks.forEach(drink => {
        const card = document.createElement("article");
        card.className = "drink-card";
        card.dataset.category = drink.category;

    // front: image + name, back: description + meta
    card.innerHTML = `
      <div class="drink-front">
        <img
          src="${drink.image}"
          alt="${drink.name}"
          class="drink-image"
        />
        <h3>${drink.name}</h3>
      </div>

      <div class="drink-back">
        <h3>${drink.name}</h3>
        <p>${drink.description}</p>
        <p class="result-meta">
          ${formatCategory(drink.category)} · ${capitalize(drink.serving)}
        </p>
      </div>
    `;

    // click card - saves drink and goes to recipe
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

    // main text
    document.getElementById("recipe-name").textContent = drink.name;
    document.getElementById("recipe-description").textContent = drink.description;
    document.getElementById("recipe-category").textContent = formatCategory(drink.category);
    document.getElementById("recipe-serving").textContent = capitalize(drink.serving);
    document.getElementById("recipe-energy").textContent = drink.energy === "light" ? "Light" : "Bold";
    document.getElementById("recipe-pastry").textContent = drink.pastry;

    //ingredients and steps
    const ingList = document.getElementById("recipe-ingredients");
    const stepsList = document.getElementById("recipe-steps");

    // li items
    ingList.innerHTML = drink.ingredients.map(i => `<li>${i}</li>`).join("");
    stepsList.innerHTML = drink.steps.map(s => `<li>${s}</li>`).join("");

    const upgradesSection = document.getElementById("recipe-upgrades-section");
    const upgradesList = document.getElementById("recipe-upgrades");
    const flavorSection = document.getElementById("recipe-flavor-section");
    const flavorList = document.getElementById("recipe-flavor-notes");

    // hides if no upgrades
    if (drink.upgrades && drink.upgrades.length) {
    upgradesList.innerHTML = drink.upgrades.map(u => `<li>${u}</li>`).join("");
    upgradesSection.style.display = "block";
    } else {
    upgradesSection.style.display = "none";
    }

    if (drink.flavorNotes && drink.flavorNotes.length) {
    flavorList.innerHTML = drink.flavorNotes.map(n => `<li>${n}</li>`).join("");
    flavorSection.style.display = "block";
    } else {
    flavorSection.style.display = "none";
}

    // image placeholder
        // recipe image
    const recipeImg = document.getElementById("recipe-image");
    if (recipeImg && drink.image) {
        recipeImg.src = drink.image;
        recipeImg.alt = drink.name + " illustration";
    } else if (recipeImg) {
        // If a drink somehow has no image, hide the box
        recipeImg.style.display = "none";
    }
}


//home

function initHomePage() {
    // featured drinks
    document.querySelectorAll(".view-recipe-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setSelectedDrinkId(btn.dataset.drinkId);
            window.location.href = "recipe.html";
        });
    });
// --- hero drink image rotation ---
    const heroImg = document.getElementById("hero-drink");
    if (!heroImg) return; // safety if we're not on the home page

    const heroImages = [
        "images/drinks/banana-cream-matcha.png",
        "images/drinks/black-sesame-matcha.png",
        "images/drinks/blueberry-matcha-latte.png",
        "images/drinks/coconut-matcha.png",
        "images/drinks/double-matcha-latte.png",
        "images/drinks/earl-grey-matcha-latte.png",
        "images/drinks/honey-lemon-matcha-tea.png",
        "images/drinks/hot-chai-matcha-latte.png",
        "images/drinks/hot-dirty-matcha.png",
        "images/drinks/hot-toasted-chocolate-matcha.png",
        "images/drinks/iced-caramel-dirty-matcha.png",
        "images/drinks/iced-matcha-latte.png",
        "images/drinks/iced-miso-matcha-latte.png",
        "images/drinks/iced-white-chocolate-matcha.png",
        "images/drinks/jasmine-matcha-latte.png",
        "images/drinks/jasmine-matcha-sea-cream.png",
        "images/drinks/lavendar-matcha-latte.png",
        "images/drinks/mango-matcha-madness.png",
        "images/drinks/matcha-cream-top.png",
        "images/drinks/matcha-creme-brulee-latte.png",
        "images/drinks/matcha-einspanner.png",
        "images/drinks/matcha-tiramisu-latte.png",
        "images/drinks/oolong-matcha-latte.png",
        "images/drinks/orange-cream-matcha.png",
        "images/drinks/sage-vanilla-matcha-latte.png",
        "images/drinks/strawberry-matcha-latte.png",
        "images/drinks/toasted-almond-matcha-latte.png",
        "images/drinks/ube-matcha.png",
        "images/drinks/yuzu-sparkling-matcha.png",
        
    ];

    let currentIndex = 0;
    const changeEveryMs = 3500; // 3.5 seconds

    heroImg.style.opacity = "1";

    setInterval(() => {
        // fade out
        heroImg.style.opacity = "0";

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % heroImages.length;
            heroImg.src = heroImages[currentIndex];
            heroImg.style.opacity = "1";
        }, 300); // match CSS transition time
    }, changeEveryMs);
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