var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
driver.get("http://localhost:8081/index/index");
driver.findElement(By.id('pramise_count')).click();
driver.quit();