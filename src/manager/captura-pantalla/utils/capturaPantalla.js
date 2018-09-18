'use strict';

const puppeteer = require('puppeteer');

module.exports = async ( url ) => {

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.goto(url);

    const path = `captura.png`;

    await page.screenshot({path});

    await browser.close();

    return path;
};
