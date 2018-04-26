var data=require(process.cwd()+'/src/utility/MultiFormData.json')
var AddCustPage=function(){
	
	var firstName=element(by.model('fName'));
	var lastName=element(by.model('lName'));
	var postCode=element(by.model('postCd'));
	var addCust=element(by.xpath('html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button'));
	var openAccount=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[2]'));
	this.enterfName=function(fName){
		firstName.sendKeys(fName);
		return this;
	}
	this.enterlName=function(lName){
		lastName.sendKeys(lName);
		return this;
	}
	this.enterPostCode=function(PostCd){
		postCode.sendKeys(PostCd);
		return this;
	}
	
	this.clickAdd=function(){
		addCust.click();
		return this;
		//return require('./InterestPage.js');
	//	browser.switchTo().alert().accept();

	}
	this.clickOpenAcct=function(){
		openAccount.click();
		return require('./OpenAccPage.js')
	//	browser.switchTo().alert().accept();
    }
}
module.exports=new AddCustPage();
