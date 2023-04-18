var userPool;
var poolData = {
    UserPoolId: 'us-east-1_0Tmb6qq4M', // Update this to your user pool ID
    ClientId: '6996lif0el35rp1j5nu6j1uj1', // Update this to your app client ID
}

function signUp(username, email, password, onSuccess, onFailure) {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var attributeList = [];

    var dataEmail = {
        Name: 'email',
        Value: email
    };

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    attributeList.push(attributeEmail);

    userPool.signUp(username, password, attributeList, null, function (err, result) {
        if (err) {
            onFailure(err.message);
            return;
        }
        console.log('SignUp Result:', result);
        console.log('Email:', email);
        localStorage.setItem('signUpResult', JSON.stringify(result));
        onSuccess(result);
    });
}

function signIn(email, password, onSuccess, onFailure) {
    var authenticationData = {
        Username: email,
        Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    var poolData = {
        UserPoolId: 'us-east-1_0Tmb6qq4M', // Update this to your user pool ID
        ClientId: '6996lif0el35rp1j5nu6j1uj1', // Update this to your app client ID
    };

    userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: email,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            sessionStorage.setItem('isLoggedIn', true);
            console.log(result);
            onSuccess();
        },
        onFailure: function (err) {
            console.log(err);
            onFailure(err.message);
        },
    });
}

function verifyEmail(signUpResult, otp, onSuccess, onFailure) {
    if (!signUpResult) {
        onFailure('Cognito user not provided');
        return;
    }

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: signUpResult.username,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    console.log('Verification code entered:', otp);
    cognitoUser.confirmRegistration(otp, true, function (err, result) {
        if (err) {
            console.error("Error Details:", err);
            onFailure(err);
            return;
        }
        onSuccess(result);
    });
}
