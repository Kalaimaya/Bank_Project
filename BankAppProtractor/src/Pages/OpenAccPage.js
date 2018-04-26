//var data=require(process.cwd()+'/src/utility/MultiFormData.json')
var OpenAccPage=function(){
	
	var CustName=element(by.id('userSelect')).$('[value="6"]');
	var CurrencyName1=element(by.id('currency')).$('[value="Dollar"]');
	var process=element(by.buttonText('Process'));
	//var openAccount=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]'));
	var CurrencyName2=element(by.id('currency')).$('[value="Pound"]');
	var CurrencyName3=element(by.id('currency')).$('[value="Rupee"]');
	var clickCustomer= element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[3]'));
	this.clickCustName=function(){
		CustName.click();
		return this;
	}
	this.clickCurrencyDollar=function(){
		CurrencyName1.click();
		return this;
	}
	this.clickProcess=function(){
		process.click();
		return this;
	}
	
	
	this.clickCurrencyPound=function(){
		CurrencyName2.click();
		return this;
	}
	this.clickCurrencyRupee=function(){
		CurrencyName3.click();
		return this;
	}
	this.clickCustButton=function(){
		clickCustomer.click();
		return require('./CustomerPage.js')
//	//	browser.switchTo().alert().accept();
//    }
		//return require('./InterestPage.js');
	//	browser.switchTo().alert().accept();

	}
}
module.exports=new OpenAccPage();


