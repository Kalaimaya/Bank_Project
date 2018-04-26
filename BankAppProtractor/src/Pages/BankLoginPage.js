var BankLogin=function(){
	
	//var radioOptions=element.all(by.model('formData.type'));
	var bank=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/div[2]/button'));
	var customer=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/div[1]/button'));
	
	
	this.clickBank=function(){
		bank.click();
		return require('./ManagerPage.js')
	}
	this.clickCustomer=function(){
		customer.click();
		return require('./CustLoginPage.js')
	}
}
module.exports=new BankLogin();