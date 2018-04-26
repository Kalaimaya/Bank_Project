describe('Multiform e2e automation', function() {
	 beforeEach(function() {
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	    });

	    afterEach(function() {
	      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	    });
	it('e2e flow', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.manage().window().maximize();
		browser.sleep(5000);
		element(by.partialButtonText('Bank')).click();
		browser.sleep(5000);
    	element(by.buttonText('Add Customer')).click();
        browser.sleep(4000);
        element(by.model('fName')).sendKeys("Kalai");
        element(by.model('lName')).sendKeys("Maya");
        element(by.model('postCd')).sendKeys("94404");
        element(by.className('btn btn-default')).click();
		browser.switchTo().alert().accept();
        browser.sleep(4000);
        element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')).click();
        browser.sleep(4000);

    	element(by.id('userSelect')).$('[value="6"]').click();
        browser.sleep(4000);

    	element(by.id('currency')).$('[value="Dollar"]').click();
        browser.sleep(4000);

		element(by.buttonText('Process')).click();
		browser.switchTo().alert().accept();

        browser.sleep(4000);
        element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')).click();
        browser.sleep(4000);

    	element(by.id('userSelect')).$('[value="6"]').click();
        browser.sleep(4000);

    	element(by.id('currency')).$('[value="Pound"]').click();
        browser.sleep(4000);

		element(by.buttonText('Process')).click();
		browser.switchTo().alert().accept();

        browser.sleep(4000);
        element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]')).click();
        browser.sleep(4000);

    	element(by.id('userSelect')).$('[value="6"]').click();
        browser.sleep(4000);
    	element(by.id('currency')).$('[value="Rupee"]').click();
        browser.sleep(4000);

		element(by.buttonText('Process')).click();
        browser.sleep(4000);

		browser.switchTo().alert().accept();

        browser.sleep(4000);
        element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[3]')).click();
        browser.sleep(4000);
        element(by.model('searchCustomer')).sendKeys("Kalai")
        browser.sleep(4000);
    	element(by.buttonText('Delete')).click();
        browser.sleep(4000);
    	element(by.buttonText('Home')).click();
        browser.sleep(4000);
    	element(by.partialButtonText('Customer')).click();
        browser.sleep(4000);
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
		element(by.buttonText('Back')).click();		browser.sleep(4000);
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