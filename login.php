<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width" />
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="login_style.css">
</head>

<body>

<div id="fb-root"></div>
<script>

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
    } else {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';

       
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if(response.status==="connected"){
		  access_token = response.authResponse.accessToken;
	  window.location.replace("login_flow.php");}
      else
      login();
      //smt();
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1366424746780074',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    status:true,
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  FB.getLoginStatus(function(response) {
   
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function smt(){
  window.location.replace("https://www.facebook.com/v2.9/dialog/oauth?client_id=1366424746780074&redirect_uri=http://localhost:8181/Pac-Fac/login_flow.php/");
}
 function login() {
    status=
    FB.login(function(response) {

      if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       access_token = response.authResponse.accessToken; //get access token
       user_id = response.authResponse.userID; //get FB UID
	   console.log(access_token);
       user_email = response.email;
       console.log(user_id); 
     
      FB.api('/me', function(response) {
          //window.location.replace("login_flow.php?access_token="+access_token);
          window.location.replace("login_flow.php");
          console.log('Good to see you, ' + response.name + '.');

        });  

     } else {
    console.log('User cancelled login or did not fully authorize.');
  }
}, {
  scope: 'public_profile', auth_type: 'reauthenticate'
});
  }

  function logout()
  {
    FB.logout(function(response) {
      console.log('Bye, ' + response.name + '.');
});
  }
  
</script>

<div class="header">
  <img id="tuplea" src="tuplea.png" >
  <img id="buraga" src="buraga.png" >
 </div> 

    <div class="col-12 col-m-12">
      <p id="pacfac">Pac-Fac</p>
      <button type="submit" onclick="checkLoginState();"">Login with Facebook</button>
<div id="status"></div>

<!--onlogin="window.location='http://localhost:8181/Pac-Fac/Game.php'"-->
  <p id="signup">Don't have a Facebook account? <a href="https://www.facebook.com/r.php">Sign up.</a></p><br>
  

</div>

<div class="footer">
  <img id="iftene" src="iftene.png" >
  <img id="radulescu" src="radulescu.png" >
</div>


</body>
</html>
