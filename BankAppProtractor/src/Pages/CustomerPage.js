var data=require(process.cwd()+'/src/utility/MultiFormData.json')
var CustomerPage=function(){
	
	var searchName=element(by.model('searchCustomer'));
	var deleteName=element(by.partialButtonText('Delete'));
	var home=element(by.xpath('html/body/div[3]/div/div[1]/button[1]'));
	this.enterSearchName=function(sName){
		searchName.sendKeys(sName);
		return this;
	}
	this.clickDelete=function(){
		deleteName.click();
		return this;
	}
	
	
	this.clickHome=function(){
		home.click();
		return require('./BankLoginPage.js')
	//	browser.switchTo().alert().accept();
    }
}
module.exports=new CustomerPage();
