require('dotenv').config();

const puppeteer = require('puppeteer');
let config = require('../config/config.json');

let run = async function () {

    // set up Puppeteer
    const browser = await puppeteer.launch({
        // headless: config.settings.headless,
        headless: config.settings.headless,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    // Load Instagram
    await page.goto('https://www.instagram.com');
    await page.waitFor(2500);
    await page.click(config.selectors.home_to_login_button);
    await page.waitFor(2500);

    // Login
    await page.click(config.selectors.username_field);
    await page.keyboard.type(process.env.IG_USER);
    await page.click(config.selectors.password_field);
    await page.keyboard.type(process.env.IG_PASS);

    await page.click(config.selectors.login_button);
    await page.waitForNavigation();
    page.setViewport({width: 1200, height: 764});
    
    // Close browser
    // browser.close();
};

module.exports = run;