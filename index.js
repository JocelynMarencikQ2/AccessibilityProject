const express = require('express')
const app = express()
const puppeteer = require('puppeteer');
const path = require('path');
const a11y = require('a11y');
const pa11y = require('pa11y');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'css')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/report', async function (req, res) {
  
  res.sendFile(path.join(__dirname, '/ReportPage.html'));
  
  
  let URLEnter = req.query.URLEnter;
  console.log("testing" + URLEnter);
  let url = encodeURIComponent(URLEnter);
  console.log("testing 2" + url);
  let browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto("http://" + url);
  await page.screenshot({ path: path.join(__dirname, 'public') + '/images/puppeteer.png', fullPage: false});  
  //await browser.close();
  //browser = await puppeteer.launch();
  //page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 864 });
  await page.goto("http://" + url);
  await page.screenshot({ path: path.join(__dirname, 'public') + '/images/puppeteer2.png', fullPage: false});  
  await browser.close();
  
  console.log("code completed")
  
  
})

app.get('/puppeteer/:url', async function (req, res) {
  const { url } = req.params;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto("http://" + url);
  await page.screenshot({ path: path.join(__dirname, 'public') + '/images/puppeteer.png', fullPage: true });  
  await browser.close();
  
  console.log("code completed")

  res.send('<img src="/images/puppeteer.png" />')

})

app.get('/docs', (req, res) => {

  res.sendFile(path.join(__dirname, '/Documentation.html'));

})

app.get('/a11y/:url', (req, res) => {
  
  const { url } = req.params;
  
  a11y(url, function (err, reports) {
    console.log("The url is now " + url);
    console.log(reports);
      const output = JSON.stringify(reports);
      //console.log(output);
      const audit = reports.audit; // a11y Formatted report
      const report = reports.report; // DevTools Accessibility Audit formatted report
      //res.send(output)
      res.send(output);
  });

})

app.get('/pa11y/:url', (req, res) => {
  const { url } = req.params;
  
pa11y(url).then((results) => {
  let results2 = JSON.stringify(results);
  res.send(results2);
});
  
  

})




 
app.listen(3000)