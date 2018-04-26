describe('Multiform e2e automation', function() {
	it('e2e flow', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.manage().window().maximize();
		
	element(by.className('btn btn-primary btn-lg')).click();
	
	browser.sleep(5000);
	element(by.id('userSelect')).$('[value="2"]').click();
	browser.sleep(4000);
	element(by.buttonText('Login')).click();
	browser.sleep(4000);
	element(by.className('btn btn-lg tab')).click();
	browser.sleep(4000)
	element(by.buttonText('Back')).click();
	browser.sleep(5000);
	element(by.id('accountSelect')).$('[value="number:1006"]').click();
	browser.sleep(7000);
	element(by.buttonText('Deposit')).click();
	browser.sleep(5000);
	element(by.model('amount')).sendKeys("2000");
	browser.sleep(5000);
	element(by.className('btn btn-default')).click();
	browser.sleep(4000);
	element(by.className('btn btn-lg tab')).click();
	browser.sleep(4000);
	element(by.buttonText('Back')).click();
	browser.sleep(4000);
	element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[3]')).click();
    browser.sleep(7000);
	element(by.model('amount')).sendKeys("2001");
	browser.sleep(4000);
	element(by.buttonText('Withdraw')).click();
	browser.sleep(4000);
	element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[3]')).click();
    browser.sleep(4000);
    element(by.model('amount')).sendKeys("1000");
    browser.sleep(4000);
    element(by.buttonText('Withdraw')).click();
    browser.sleep(4000);
    element(by.className('btn btn-lg tab')).click();
    browser.sleep(4000);
	element(by.buttonText('Reset')).click();
    browser.sleep(4000);
	element(by.buttonText('Back')).click();
    browser.sleep(4000);
    element(by.className('btn btn-lg tab')).click();
    browser.sleep(4000)
    element(by.buttonText('Logout')).click();
    browser.sleep(4000);
	
});
});