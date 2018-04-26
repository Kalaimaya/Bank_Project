var CustLoginPage=function(){
	
	var loginCust=element(by.id('userSelect')).$('[value="2"]');
	var login=element(by.buttonText('Login'));
	
	
	this.clickCust=function(){
		loginCust.click();
		return this;
	}
	this.clickLogin=function(){
		login.click();
		return require('./AccountPage.js')
	}
}
module.exports=new CustLoginPage();