'use strict';

const puppeteer = require('puppeteer');

module.exports = async ( url ) => {

    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(url);

    const path = `capturaa.png`;

    await page.screenshot({path});

    await browser.close();

    return path;
};
