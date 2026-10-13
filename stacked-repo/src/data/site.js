// Everything editable lives here. Prices are SAMPLE prices (₱). Reviews and contact details are placeholders.
export const BUSINESS = {
  name: "STACKED", tagline: "Big Flavor. Zero Boring Bites.",
  address: "[Business address]", hours: "[Opening hours]", phone: "[Phone number]", email: "[Email address]",
  instagram: "#", facebook: "#",
  disclaimer: "Sample site: prices, reviews and details are placeholders.",
};
export const DELIVERY_FEE = 50;
export const COMBO_DISCOUNT = 30;
export const PROMO = { text: "Limited-time sample offer: any Stack Combo is ₱30 off." };
export const IMAGES = { hero: "images/hero.jpg", story: "images/story.jpg" };
export const NAV_LINKS = [{ label: "Menu", href: "#menu" }, { label: "Deals", href: "#deals" }, { label: "Our Story", href: "#story" }];
export const CATEGORIES = [
  { id: "all", label: "All" }, { id: "chicken", label: "Chicken" }, { id: "beef", label: "Beef" },
  { id: "veggie", label: "Veggie" }, { id: "breakfast", label: "Breakfast" },
];
// `best` marks sample best sellers; change it to match real sales.
export const MENU = [
  { id: "big-stack", category: "beef", name: "The Big Stack", price: 285, best: true, image: "images/big-stack.jpg", layers: ["beef", "cheese", "pickles", "onion", "lettuce"], description: "Double beef, melted cheddar, pickles, crispy onions and smoky sauce." },
  { id: "smash-melt", category: "beef", name: "Double Smash Melt", price: 325, best: true, image: "images/smash-melt.jpg", layers: ["beef", "cheese", "beef", "onion"], description: "Two smashed patties, American cheese and caramelized onions." },
  { id: "hot-chicken", category: "chicken", name: "Crispy Hot Chicken", price: 265, best: true, image: "images/hot-chicken.jpg", layers: ["chicken", "pickles", "lettuce"], description: "Crunchy fried chicken, spicy glaze, pickles and cool slaw." },
  { id: "buffalo-crunch", category: "chicken", name: "Buffalo Crunch", price: 255, image: "images/buffalo-crunch.jpg", layers: ["chicken", "tomato", "lettuce"], description: "Buffalo chicken, crisp lettuce, tomato and ranch." },
  { id: "veggie-riot", category: "veggie", name: "Veggie Riot", price: 235, image: "images/veggie-riot.jpg", layers: ["avocado", "cucumber", "tomato", "lettuce"], description: "Avocado, grilled veggies, cucumber and garlic mayo." },
  { id: "sunrise-slam", category: "breakfast", name: "Sunrise Slam", price: 225, image: "images/sunrise-slam.jpg", toasted: true, layers: ["egg", "cheese", "bacon"], description: "Fried egg, bacon, cheese and hash brown on a toasted bun." },
];
export const SIDES = [{ id: "fries", name: "Fries", price: 85 }, { id: "rings", name: "Onion rings", price: 105 }, { id: "slaw", name: "Slaw", price: 75 }];
export const DRINKS = [{ id: "tea", name: "Iced tea", price: 65 }, { id: "soda", name: "Soda", price: 60 }, { id: "lemonade", name: "Lemonade", price: 75 }];
// Deals bundle menu items (by id) with a fixed amount off.
export const DEALS = [
  { id: "duo", name: "Duo Stack", description: "The Big Stack + Crispy Hot Chicken. Share it or don't.", items: ["big-stack", "hot-chicken"], off: 50 },
  { id: "double", name: "Double Trouble", description: "Double Smash Melt + Buffalo Crunch.", items: ["smash-melt", "buffalo-crunch"], off: 60 },
  { id: "green", name: "Green & Gold", description: "Veggie Riot + Sunrise Slam, because variety wins.", items: ["veggie-riot", "sunrise-slam"], off: 40 },
];
export const BUILDER = {
  base: 120,
  groups: [
    { id: "bun", label: "Bread", type: "single", options: [{ label: "Brioche bun", price: 0 }, { label: "Sourdough", price: 15 }, { label: "Seeded bun", price: 10 }] },
    { id: "main", label: "Main", type: "single", options: [{ label: "Smash beef", price: 95 }, { label: "Crispy chicken", price: 80 }, { label: "Plant patty", price: 85 }, { label: "Egg", price: 35 }] },
    { id: "cheese", label: "Cheese", type: "single", options: [{ label: "American", price: 20 }, { label: "Cheddar", price: 25 }, { label: "Pepper jack", price: 30 }, { label: "No cheese", price: 0 }] },
    { id: "extras", label: "Stack it higher", type: "multi", options: [{ label: "Bacon", price: 40 }, { label: "Jalapeños", price: 10 }, { label: "Pickles", price: 10 }, { label: "Crispy onions", price: 20 }, { label: "Fried egg", price: 30 }] },
    { id: "sauce", label: "Sauce", type: "single", options: [{ label: "Smoky BBQ", price: 0 }, { label: "Hot honey", price: 5 }, { label: "Garlic mayo", price: 0 }, { label: "Chipotle", price: 0 }] },
  ],
};
// Placeholder reviews: replace with real customer testimonials.
export const REVIEWS = [
  { quote: "Loaded, messy and worth every napkin.", author: "Sample review, customer name" },
  { quote: "The crunch on that chicken is no joke.", author: "Sample review, customer name" },
  { quote: "Combo builder made ordering for the whole group easy.", author: "Sample review, customer name" },
];
