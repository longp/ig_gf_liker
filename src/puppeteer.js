const puppeteer = require('puppeteer');
let config = require('../config/config.json');

let run = async function () {

    // set up Puppeteer
    const browser = await puppeteer.launch({
        headless: conf.settings.headless,
        args: ['--no-sandbox']
    });

    const page = await browser.newPage();
    page.setViewport({width: 1200, height: 764});
    
    // Close browser
    browser.close();
};

module.exports = run;