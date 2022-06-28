<!DOCTYPE html>
<html lang="en">
<head>
  <title>AQDesign</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Share+Tech+Mono" rel="stylesheet">
  <script src="portfolio.js" defer></script>
</head>
<body>
<div id="main-wrapper">
  <main>
    <div id="blog-header">
      <h3>My Blog</h3>
      <?php
        if (isset($_SESSION["ID"])) {
          echo "<button id='login'><a href='logout.php'>Log Out</a></button>";
        } else {
          echo "<button id='login'><a href='login.php'>Log In</a></button>";
        }
      ?>
    </div>
    <section>
    <form id="blog-form" action="blog.inc.php" method="post">
        <input name ="title" placeholder="Title">
        <textarea name="post" placeholder="Type a message"></textarea> 
        <div id="button-group">
          <input type="submit" value="Post" class="button">
          <input type="reset" value="Clear" class="button">
        </div>
    </form> 
    <article>
      <div class="blog-post">
        <h4>This is a title.</h4>
        <small>1/1/2022</small>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod nemo mollitia at. Facere, hic ut? Beatae maxime expedita amet, laborum debitis dolores aliquid vero sequi rem? Nemo, alias. Deserunt.</p>
      </div>
      <div class="blog-post">
        <h4>This is a title.</h4>
        <small>1/1/2022</small>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quod nemo mollitia at. Facere, hic ut? Beatae maxime expedita amet, laborum debitis dolores aliquid vero sequi rem? Nemo, alias. Deserunt.</p>
      </div>
    </article>
    </section>
  </main>
  <header>
    <?php include_once "navigation.php" ?>
  </header>
</div>
</body>
</html>