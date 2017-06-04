<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width" />
  <title>Login Page</title>
  <link rel="stylesheet" type="text/css" href="login_style.css">
</head>

<body>
<div class="header">
  <img id="tuplea" src="tuplea.png" >
  <img id="buraga" src="buraga.png" >
 </div> 

    <div class="col-12 col-m-12">
      <p id="pacfac">Pac-Fac</p>
      <form method="post" action="http://localhost:8181/Pac-Fac/Game.php">
      <!--<p><input type="text" name="login"  placeholder="GitHub Username or Email"></p>
      <p><input type="password" name="password" placeholder="GitHub Password"></p>
      <p class="remember">
        <label>
         <label>
          <input type="checkbox" name="remember" id="remember">Keep me logged in
        </label>
        </label>
      </p>-->
      <button type="submit">Login with GitHub</button>
    </form>
    <!--<p class="forgot_pass">
    <p>Forgot password? <a href="#">Reset it.</a></p>
  </p>-->

  <p id="signup">Don't have a GitHub account? <a href="https://github.com/join?source=login">Sign up.</a></p><br>
  

</div>

<div class="footer">
  <img id="iftene" src="iftene.png" >
  <img id="radulescu" src="radulescu.png" >
</div>


</body>
</html>
