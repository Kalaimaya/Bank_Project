var data=require(process.cwd()+'/src/utility/MultiFormData.json')
var BankLogin=require(process.cwd()+'/src/Pages/BankLoginPage.js')
var AddCustPage=require(process.cwd()+'/src/Pages/AddCustPage.js')
var AccountPage=require(process.cwd()+'/src/Pages/AccountPage.js')

describe('Multiform e2e automation', function() {
	it('e2e flow', function() {
		browser.sleep(4000);
		browser.get(data.url);
		browser.sleep(4000);

		var ManagerPage=BankLogin.clickBank();
		browser.sleep(4000);
		var AddCustPage=ManagerPage.clickAddCust();
		browser.sleep(4000);
		AddCustPage.enterfName(data.userData.fName);
		browser.sleep(4000);
		AddCustPage.enterlName(data.userData.lName);
		browser.sleep(4000);
		AddCustPage.enterPostCode(data.userData.postCode);
		browser.sleep(4000);
		AddCustPage.clickAdd();
		browser.switchTo().alert().accept();
		browser.sleep(3000);
		var OpenAccPage=AddCustPage.clickOpenAcct();
		browser.sleep(3000);
		OpenAccPage.clickCustName();
		browser.sleep(3000);
		OpenAccPage.clickCurrencyDollar();
		browser.sleep(3000);
		OpenAccPage.clickProcess();
		browser.sleep(3000);
		browser.switchTo().alert().accept();
		browser.sleep(3000);
		OpenAccPage.clickCustName();
		browser.sleep(3000);
		OpenAccPage.clickCurrencyPound();
		browser.sleep(3000);
		OpenAccPage.clickProcess();
		browser.sleep(3000);
		browser.switchTo().alert().accept();
		browser.sleep(3000);
		OpenAccPage.clickCustName();
		browser.sleep(3000);
		OpenAccPage.clickCurrencyRupee();
		browser.sleep(3000);
		OpenAccPage.clickProcess();
		browser.sleep(3000);
		browser.switchTo().alert().accept();
		var CustomerPage=OpenAccPage.clickCustButton();
		browser.sleep(3000);
		CustomerPage.enterSearchName(data.userData.fName);
		browser.sleep(3000);
        CustomerPage.clickDelete();
		browser.sleep(3000);
        CustomerPage.clickHome();
		browser.sleep(3000);
		var CustLoginPage=BankLogin.clickCustomer();
		browser.sleep(4000);
		CustLoginPage.clickCust();
		browser.sleep(4000);
	    var AccountPage=CustLoginPage.clickLogin();
		browser.sleep(4000);
        var ListTXPage=AccountPage.clickTrans();
		browser.sleep(3000);
        ListTXPage.clickBack();
		browser.sleep(3000);
        AccountPage.clickDeposit();
		browser.sleep(3000);
        AccountPage.enterAmount1(data.userData.amount1);
		browser.sleep(3000);
        AccountPage.clickDepo();
		browser.sleep(3000);
        var ListTXPage1=AccountPage.clickTrans();
		browser.sleep(3000);
        var AccountPage1=ListTXPage1.clickBack();
		browser.sleep(3000);
        AccountPage1.clickWithdraw();
		browser.sleep(3000);
        AccountPage1.enterAmount1(data.userData.amount2);
        browser.sleep(3000);
        AccountPage.clickWithAmt();
        browser.sleep(3000);
        AccountPage1.enterAmount1(data.userData.amount3);
        browser.sleep(3000);
        AccountPage1.clickWithAmt();
        browser.sleep(3000);
        var ListTXPage2=AccountPage.clickTrans();
		browser.sleep(3000);
        ListTXPage2.clickReset();
		browser.sleep(3000);
        ListTXPage2.clickBack();
		browser.sleep(3000);
        var CustLoginPage1=AccountPage.clickLogout();
		browser.sleep(3000);


	});
});