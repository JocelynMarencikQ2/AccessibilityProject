const puppeteer = require('puppeteer');


    (async () => {
      const browser = await puppeteer.launch();
      console.log("first");
      const page = await browser.newPage();
      console.log("second");
      await page.setViewport({ width: 1200, height: 800 });
      await page.goto(decodeURIComponent(url));
      await page.screenshot({ path: '/images/puppeteer.png', fullPage: false});
    
      await browser.close();
      let puppeteerimage = document.querySelector(".pImage");
      puppeteerimage.getAttribute('src').replace('/','/images/puppeteer.png');
    })();