var ManagerPage=function(){
	
	var addCust=element(by.xpath('html/body/div[3]/div/div[2]/div/div[1]/button[1]'));
	
	
	
	this.clickAddCust=function(){
		addCust.click();
		return require('./AddCustPage.js')
	}
}
module.exports=new ManagerPage();