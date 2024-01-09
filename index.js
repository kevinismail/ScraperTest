import puppeteer from "puppeteer";

const getQuotes = async () => {
    // commencer pupetter session avec visible browser
    // no defaut viewport
    const browser = await puppeteer.launch({
        headless : false,
        defaultViewport: null,
    });

    //Ouvrir une nouvelle page 

    const page = await browser.newPage();

// sur cette page ouvrir le site  et attendre  que le contenu soit chargé
await page.goto("http://quotes.toscrape.com/",{
    waitUntil: "domcontentloaded",
});

};

//commencer le scraping !!!!!
getQuotes();