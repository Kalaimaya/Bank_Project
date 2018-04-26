// An example configuration file.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	directConnect : true,
	capabilities : {
		'browserName' : 'chrome'
	},

	framework : 'jasmine',

	specs :['./src/AllScripts/E2EBank.js'] ,
	jasmineNodeOpts: {
	      showColors: true,
	      includeStackTrace: true,
	      defaultTimeoutInterval: 1440000
	     },
//	jasmineNodeOpts : {
//		defaultTimeoutInterval : 30000
//	},
	     onPrepare: function() {
	 		//browser.manage().window().maximize();
	 	    jasmine.getEnv().addReporter(
	 	      new Jasmine2HtmlReporter({
	 	        savePath: 'target/screenshots',
	 	        takeScreenshots: true,
	 	       // takeScreenshotsOnlyOnFailures: true
	 	      })
	 	    );
	 },
		
	
};