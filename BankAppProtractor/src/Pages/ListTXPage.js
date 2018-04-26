var ListTXPage=function(){
	
var back=element(by.buttonText('Back'));
var reset=element(by.buttonText('Reset'));
	this.clickBack=function(){
	     back.click();
	     return require('./AccountPage.js')
	}
	this.clickReset=function(){
	     reset.click();
	     return this;
	}
}
module.exports=new ListTXPage();
