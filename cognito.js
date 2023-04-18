// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Update this to your region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1_0Tmb6qq4M', // Update this to your identity pool ID
});

// Initialize the Amazon Cognito service object
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
