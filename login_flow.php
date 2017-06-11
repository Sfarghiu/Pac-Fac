<?php
	require_once __DIR__ . '/vendor/autoload.php';
	session_start();
	$fb = new Facebook\Facebook([
	  'app_id' => '1366424746780074',
	  'app_secret' => 'cd53e61df3dec589ebed943bc3c1eae4',
	  'default_graph_version' => 'v2.3',
	  ]);
	 
	$helper = $fb->getJavaScriptHelper();

	try {
	  
	  //$accessToken = $fb->get('/me?fields=id,name',$_GET['access_token']);
		$accessToken = $helper->getAccessToken();
		$response = $fb->get('/me?fields=id,name', $accessToken);
	  $user = $response->getGraphUser();
	  $id= $user['id'];
		$userName= $user['name'];
	} catch(Facebook\Exceptions\FacebookResponseException $e) {
	  // When Graph returns an error
	  echo 'Graph returned an error: ' . $e->getMessage();
	  exit;
	} catch(Facebook\Exceptions\FacebookSDKException $e) {
	  // When validation fails or other local issues
	  echo 'Facebook SDK returned an error: ' . $e->getMessage();
	  exit;
	}

	if (! isset($accessToken)) {
	  echo 'No cookie set or no OAuth data could be obtained from cookie.';
	  exit;
	}

	// Logged in
	//echo '<h3>Access Token</h3>';

	//define('REDIRECT_URI',"http://localhost:8181/Pac-Fac/Game.php/?id="+$id);
	//echo 'Name: ' . $user['name'];
	//echo 'Name: ' . $user['id'];
	// OR
	// echo 'Name: ' . $user->getName();
	$playerIcon="https://graph.facebook.com/$id/picture?type=large&width=150&height=150";
	$_SESSION['accessToken'] = (string) $accessToken;
	$_SESSION['playerIcon'] =(string)$playerIcon;
	$_SESSION['userName'] =(string)$userName;
	define('REDIRECT_URI',"http://localhost:8181/Pac-Fac/Game.php");
	echo ("<script> window.location.href='".REDIRECT_URI."'</script>");
	//include 'Game.php';
?>
