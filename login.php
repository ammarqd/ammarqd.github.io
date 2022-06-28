<!DOCTYPE html>
<html lang="en">
<head>
  <title>AQDesign</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Share+Tech+Mono" rel="stylesheet">
</head>
<body>
<div id="main-wrapper">
  <main>
    <h3>Log in</h3>
    <section >
    <form id="login-form" action="includes/login.inc.php" method="post">
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" minlength="4" required><br>
        <div id="button-group">
          <input type="submit" value="Login" class="button">
          <input type="reset" value="Clear" class="button">
        </div>
    </form> 
    </section>
  </main>
  <header>
    <?php include_once "navigation.php" ?>
  </header>
</div>
</body>
</html>