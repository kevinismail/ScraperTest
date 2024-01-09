import puppeteer from "puppeteer";

const getIngredients = async () => {
    // commencer pupetter session avec visible browser
    // no defaut viewport
    const browser = await puppeteer.launch({
        headless : false,
        defaultViewport: null,
    });

    //Ouvrir une nouvelle page 

    const page = await browser.newPage();

// sur cette page ouvrir le site  et attendre  que le contenu soit chargé
await page.goto("https://www.hellofresh.be/recipes/chakchouka-traditionnelle-a-loeuf-593167e33bddb56e503ee9a8?locale=fr-BE",{
    waitUntil: "domcontentloaded",
});

// Sélectionner les éléments <p> contenant les instructions
const ingredientsEls = await page.$$('p[type="body-sm-regular"]');  

 // Extraire le texte de chaque élément 
 const ingredients = [];

 for(let el of ingredientsEls) {
   let text = await el.evaluate(el => el.innerText);
   ingredients.push(text); 
 }
//afficher le resultat 
console.log(ingredients);

 return ingredients;
}

//commencer le scraping !!!!!
getIngredients();