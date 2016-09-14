(function(container) {

	// AWS DOCS: http://docs.aws.amazon.com/AWSiOSSDK/latest/

	var UIView = require('UIKit/UIView'),
	    UIColor = require('UIKit/UIColor'),
	    CGRectMake = require('CoreGraphics').CGRectMake;

	// Require in 3rd Party Native Classes
	var AWSCore = require('AWSCore/AWSCore'),
	    AWSS3 = require('AWSS3/AWSS3'),
	    AWSCognito = require('AWSCognito/AWSCognito'),
	    AWSCognitoIdentityProvider = require('AWSCognitoIdentityProvider/AWSCognitoIdentityProvider');
    
    AWSCore.defaultServiceManager.defaultServiceConfiguration = configuration;
    
   
    
	/*AWSCognitoCredentialsProvider *credentialsProvider = [[AWSCognitoCredentialsProvider alloc] initWithRegionType:AWSRegionUSEast1
	 identityPoolId:CognitoPoolID];

	 AWSServiceConfiguration *configuration = [[AWSServiceConfiguration alloc] initWithRegion:AWSRegionUSEast1
	 credentialsProvider:credentialsProvider];

	 AWSServiceManager.defaultServiceManager.defaultServiceConfiguration = configuration;*/

	console.log("AWSS3", AWSS3);
	var view = AWSS3.defaultS3();

	//container.add(shapeView);

})($.awss3_container);
