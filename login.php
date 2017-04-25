<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
	<link rel="stylesheet" type="text/css" href="login_style.css">
</head>

<body>
<div class="container">
  <div class="login">
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

     <p id="signup">Don't have a GitHub account? <a href="https://github.com/join?source=login">Sign up.</a></p>
 
  </div>
 <img src="pac-man.jpg" alt="Pac-Man">
</div>

</body>
</html>
