var data=require(process.cwd()+'/src/utility/MultiFormData.json')
var AccountPage=function(){
	
	var Transaction=element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[1]'));
	var Deposit=element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[2]'));
	var Withdraw=element(by.xpath('html/body/div[3]/div/div[2]/div/div[3]/button[3]'));
	var amount1=element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input'));
	var depo=element(by.xpath('html/body/div[3]/div/div[2]/div/div[4]/div/form/button'));
	var withdrawAmount=element(by.buttonText('Withdraw'));
	var logout=element(by.buttonText('Logout'));
	//var back=element(by.buttonText('Back'));html/body/div[3]/div/div[2]/div/div[4]/div/form/div/input
	this.clickTrans=function(){
	     Transaction.click();
	     return require('./ListTXPage.js')
	     }
	this.clickDeposit=function(){
	    Deposit.click();
		return this;
	}
	this.enterAmount1=function(amount){
		amount1.sendKeys(amount);
		return this;
	}
	this.clickDepo=function(){
	    depo.click();
		return this;
	}
	this.clickWithdraw=function(){
		Withdraw.click();
		return this;
	//	browser.switchTo().alert().accept();
    }
	this.clickWithAmt=function(){
		withdrawAmount.click();
		return this;
	}
	this.clickLogout=function(){
	     logout.click();
	     return require('./CustLoginPage.js')
	     }
}
module.exports=new AccountPage();
